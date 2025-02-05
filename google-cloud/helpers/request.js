const axios = require('axios');
const config = require('../config');
const graphqlHelper = require('./graphql');
const Shopify = require('shopify-api-node');
const dataFormatter = require('./dataFormatter');
const { XMLParser } = require("fast-xml-parser");

const shopify = new Shopify({
  shopName: config.shopify.shopName,
  apiKey: config.shopify.apiKey,
  password: config.shopify.password,
  apiVersion: config.shopify.apiVersion
});

const timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function sendCreateUpdateGoods(soapRequests) {
  const url = config.novapost.urls[config.nodeEnv];
  const auth = config.novapost.auth[config.nodeEnv];
  const responses = [];

  for (const soapRequest of soapRequests) {
    try {
      const request = await axios.post(url, soapRequest, {
        headers: {
          "Content-Type": "application/soap+xml; charset=utf-8"
        },
        auth
      });

      const parser = new XMLParser();
      const jsonResponse = parser.parse(request.data);
      const errors = jsonResponse["soap:Envelope"]["soap:Body"]["m:CreateUpdateGoodsResponse"]["m:return"]["m:MessageGoodsER"]["m:Errors"];
      const response = jsonResponse["soap:Envelope"]["soap:Body"]["m:CreateUpdateGoodsResponse"]["m:return"]["m:MessageGoodsER"]["m:Info"]["m:Descr"];

      if (errors) throw new Error(JSON.stringify(errors));

      responses.push(response);
    } catch (error) {
      console.error('❌[ERROR] - Error sending SOAP:', error);
    } finally {
      await timeout(3000);
    }
  }

  return responses;
}

async function sendOrderCreate(body) {
  const url = config.novapost.urls[config.nodeEnv];
  console.log('✌️url --->', url);
  const auth = config.novapost.auth[config.nodeEnv];

  try {
    const request = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8"
      },
      auth
    });

    const parser = new XMLParser();
    return parser.parse(request.data);
  } catch (error) {
    throw error;
  }
}

async function sendOrderCancelled(body) {
  const url = config.novapost.urls[config.nodeEnv];
  const auth = config.novapost.auth[config.nodeEnv];

  try {
    const request = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8"
      },
      auth
    });

    const parser = new XMLParser();
    const jsonResponse = parser.parse(request.data);

    return JSON.stringify(jsonResponse);
  } catch (error) {
    throw error;
  }
}

async function getOrdersStatuses(xmls) {
  const url = config.novapost.urls[config.nodeEnv];
  const auth = config.novapost.auth[config.nodeEnv];

  const responses = [];
  for (const xml of xmls) {
    try {
      const request = await axios.post(url, xml, {
        headers: {
          "Content-Type": "application/soap+xml; charset=utf-8"
        },
        auth
      });

      const parser = new XMLParser();
      const jsonResponse = parser.parse(request.data);

      responses.push(jsonResponse);
    } catch (error) {
      console.error(`❌[ERROR] - Error sending request:`, error);
    } finally {
      await timeout(3000);
    }
  }

  return responses;
}

async function getStocksFromNovaPost() {
  const xml = dataFormatter.createXMLForGetStocks();
  const url = config.novapost.urls[config.nodeEnv];
  const auth = config.novapost.auth[config.nodeEnv];

  try {
    const request = await axios.post(url, xml, {
      headers: {
        "Content-Type": "application/soap+xml; charset=utf-8"
      },
      auth
    });

    const parser = new XMLParser();
    const jsonResponse = parser.parse(request.data);

    const unparsedStocks = config.nodeEnv === 'development'
      ? jsonResponse["soap:Envelope"]["soap:Body"]["m:GetFactInboundResponse"]["m:return"]["m:MessageFactInboundER"]
      : jsonResponse["soap:Envelope"]["soap:Body"]["m:GetFactInboundResponse"]["m:return"]["m:MessageFactInboundER"]["m:ItemsFactinbound"];

    console.log('🚔🚨unparsedStocks --->', unparsedStocks);

    const stocks = unparsedStocks.map(stock => {
      const stockDetails = stock["m:ItemsFactinbound"];
      const item = config.nodeEnv === 'development' ? {
        sku: stockDetails["m:Sku"],
        quantity: stockDetails["m:Qty"],
        quantityPlan: stockDetails["m:QtyPlan"]
      } : {
        sku: stock["m:Sku"],
        quantity: stock["m:Qty"],
        quantityPlan: stock["m:QtyPlan"]
      }

      return item;
    });

    return stocks;
  } catch (error) {
    throw error;
  }
}

async function getStocksFromShopify(after = null, collectedData = []) {
  const query = graphqlHelper.getAllStocks(after);
  const variables = {
    first: 100,
    locationId: `gid://shopify/Location/${config.shopify.locationId}`,
    ...(after && { after }),
  };

  try {
    const response = await shopify.graphql(query, variables);
    const inventoryItems = response.inventoryItems.edges;

    const newItems = inventoryItems.map(item => {
      const sku = item.node.sku;
      const quantity = item.node.inventoryLevel?.quantities?.[0]?.quantity || 0;
      const id = item.node.id;
      return { sku, quantity, id };
    });

    collectedData.push(...newItems);

    if (response.inventoryItems.pageInfo.hasNextPage) {
      const nextCursor = inventoryItems[inventoryItems.length - 1].cursor;
      return getAllStocksRecursively(locationId, nextCursor, collectedData);
    }

    return collectedData;
  } catch (error) {
    throw error;
  }
}

/**
 * Sync stocks via GraphQL API
 * @param {Array} inventoryAdjustments - Array[{}] InventoryAdjustItemInput
 */
async function syncStocks(inventoryAdjustments) {
  if (inventoryAdjustments.length === 0) return 'No inventory adjustments to sync';

  const query = graphqlHelper.inventoryAdjust;
  const variables = {
    input: {
      reason: 'correction',
      name: 'available',
      changes: inventoryAdjustments
    }
  };

  try {
    const response = await shopify.graphql(query, variables);

    if (response?.inventoryAdjustQuantities?.userErrors?.length > 0) {
      console.error('❌[SILENT-ERROR]:', response.inventoryAdjustQuantities.userErrors);
      throw new Error('Error updating inventory - received silent errors');
    } else {
      return JSON.stringify(inventoryAdjustments);
    }
  } catch (error) {
    throw error;
  }
}

async function getOpenedOrders(after = null, collectedOrders = []) {
  const query = graphqlHelper.getAllOrders();
  const variables = {
    first: 250,
    ...(after && { after })
  }

  try {
    const response = await shopify.graphql(query, variables);
    const orders = response.orders.edges.map(edge => edge.node);
    collectedOrders.push(...orders);

    if (response.orders.pageInfo.hasNextPage) {
      const nextCursor = response.orders.edges[response.orders.edges.length - 1].cursor;
      return getOpenedOrders(nextCursor, collectedOrders);
    }

    return collectedOrders;
  } catch (error) {
    throw error;
  }
}

async function getShopifyShopMetafield(namespace, key) {
  const query = graphqlHelper.getShopMetafield;
  const variables = { namespace, key };

  try {
    const request = await shopify.graphql(query, variables);
    const metafield = request?.shop?.metafield;

    return {
      existingMetafield: JSON.parse(metafield?.value || '{}'),
      metafieldId: +metafield?.legacyResourceId || null,
    };
  } catch (error) {
    throw error;
  }
}

async function getShopifyOrderMetafield(namespace, key, orderId) {
  const query = graphqlHelper.getOrderMetafield;
  const variables = { namespace, key, id: `gid://shopify/Order/${orderId}` };

  try {
    const request = await shopify.graphql(query, variables);
    const metafield = request?.order?.metafield;

    return {
      existingMetafield: JSON.parse(metafield?.value || '{}'),
      metafieldId: +metafield?.legacyResourceId || null,
    };
  } catch (error) {
    throw error;
  }
}

async function updateShopifyMetafield(metafield, metafieldId) {
  const data = JSON.stringify(metafield);

  try {
    await shopify.metafield.update(metafieldId, { value: data });
  } catch (error) {
    throw error;
  }
}

async function getFulfillmentOrders(orderId) {
  const query = graphqlHelper.getFulfillmentOrders;
  const variables = { id: `gid://shopify/Order/${orderId}` };

  try {
    const result = await shopify.graphql(query, variables);
    return result.order.fulfillmentOrders.edges.map(edge => edge.node);
  } catch (error) {
    throw error;
  }
}

async function prepareFulfillmentData(order) {
  const fulfillmentOrders = await getFulfillmentOrders(order.id);

  const formattedData = fulfillmentOrders.map(fulfillmentOrder => {
    const lineItems = fulfillmentOrder.lineItems.edges.map(edge => ({
      id: edge.node.id,
      quantity: Number(edge.node.lineItem.quantity)
    }));

    return {
      fulfillmentOrderId: fulfillmentOrder.id,
      fulfillmentOrderLineItems: lineItems
    };
  });

  return {
    mutation: graphqlHelper.fulfillmentCreate,
    variables: {
      fulfillment: {
        lineItemsByFulfillmentOrder: formattedData,
        trackingInfo: {
          company: 'Nova Post',
          number: order.parcelNumber,
          url: `https://novapost.com/uk-ua/tracking/${order.parcelNumber}`
        }
      }
    }
  };
}

function prepareOrderCancel(order) {
  return {
    mutation: graphqlHelper.orderCancel,
    variables: {
      notifyCustomer: false,
      orderId: `gid://shopify/Order/${order.id}`,
      reason: "CUSTOMER",
      refund: true,
      restock: true,
    }
  };
}

async function updateOrderStatus(order) {
  const statuses = {
    'Отгружен': await prepareFulfillmentData(order),
    'Отменен': prepareOrderCancel(order)
  }

  const statusHandler = statuses[order.status];
  if (!statusHandler) return;

  try {
    const { mutation, variables } = statusHandler;
    return await shopify.graphql(mutation, variables);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  sendCreateUpdateGoods,
  sendOrderCreate,
  sendOrderCancelled,
  getOrdersStatuses,
  getStocksFromNovaPost,
  getStocksFromShopify,
  syncStocks,
  getOpenedOrders,
  getShopifyShopMetafield,
  getShopifyOrderMetafield,
  updateShopifyMetafield,
  updateOrderStatus
};