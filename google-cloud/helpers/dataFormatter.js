const config = require('../config');

function createXMLForProductsCreateUpdate(data) {
  const xmls = [];
  const variants = data.variants;
  const organization = config.novapost.xml[config.nodeEnv].organization;

  for (const variant of variants) {
    const xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
      <soap:Header/>
      <soap:Body>
        <wms:CreateUpdateGoods>
          <wms:Organization>${organization}</wms:Organization>
          <wms:Goods>
            <wms:MessageGoods>
              <wms:Sku>${variant.sku}</wms:Sku>
              <wms:GoodsUnitName>${data.title}</wms:GoodsUnitName>
              <wms:GoodsUnitFullName>${data.title + variant.title}</wms:GoodsUnitFullName>
              <wms:BaseMeasureUnit>
                <wms:MeasureUnitName>шт.</wms:MeasureUnitName>
                <wms:Sku>${variant.sku}</wms:Sku>
                <wms:Includes>1</wms:Includes>
              </wms:BaseMeasureUnit>
              <wms:ExpirationDateSign>0</wms:ExpirationDateSign>
              <wms:Price>${variant.price}</wms:Price>
            </wms:MessageGoods>
          </wms:Goods>
        </wms:CreateUpdateGoods>
      </soap:Body>
    </soap:Envelope>`;

    xmls.push(xml);
  }

  return xmls;
}

function createXMLForProductsDelete(data, shopifyMetafield) {
  const removedProduct = shopifyMetafield.existingMetafield.products.find(product => product.productId === data.id);
  if (!removedProduct) throw new Error('Removed product not found in Shopify Metafield');

  const xmls = [];
  const organization = config.novapost.xml[config.nodeEnv].organization;

  for (const variant of removedProduct.variants) {
    const xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
      <soap:Header/>
      <soap:Body>
        <wms:CreateUpdateGoods>
          <wms:Organization>${organization}</wms:Organization>
          <wms:Goods>
            <wms:MessageGoods>
              <wms:Sku>${variant.SKU}</wms:Sku>
              <wms:GoodsUnitName>${removedProduct.productTitle}</wms:GoodsUnitName>
              <wms:GoodsUnitFullName>${removedProduct.productTitle + variant.variantTitle}</wms:GoodsUnitFullName>
              <wms:BaseMeasureUnit>
                <wms:MeasureUnitName>шт.</wms:MeasureUnitName>
                <wms:Includes>1</wms:Includes>
              </wms:BaseMeasureUnit>
              <wms:ExpirationDateSign>0</wms:ExpirationDateSign>
              <wms:InventSize>0</wms:InventSize>
            </wms:MessageGoods>
          </wms:Goods>
        </wms:CreateUpdateGoods>
      </soap:Body>
      </soap:Envelope>
    `;

    xmls.push(xml);
  }

  return xmls;
}

function createXMLForGetStocks() {
  const currentDate = new Date();
  const organization = config.novapost.xml[config.nodeEnv].organization;
  const formattedDate = currentDate.toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).replace(",", "");

  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
    <soap:Header/>
    <soap:Body>
      <wms:GetFactInbound>
        <wms:Organization>${organization}</wms:Organization>
        <wms:Warehouse/>
        <wms:StartDate></wms:StartDate>
        <wms:EndDate>${formattedDate}</wms:EndDate>
        <wms:ArrayPlanInbound/>
      </wms:GetFactInbound>
    </soap:Body>
  </soap:Envelope>`;
}

/**
 * Prepare InventoryAdjustItemInput for Shopify
 * @param {Array} stocksNovaPost - Array of stocks from NovaPost
 * @param {Array} stocksShopify - Array of stocks from Shopify
 * @returns {Array} - Array InventoryAdjustItemInput with unique inventoryItemId
 */
function prepareInventoryAdjustments(stocksNovaPost, stocksShopify) {
  const adjustments = [];
  const logs = [];
  const seen = new Set();

  stocksNovaPost.forEach(novaItem => {
    const shopifyItem = stocksShopify.find(shopItem => shopItem.sku === novaItem.sku);

    if (shopifyItem) {
      const delta = novaItem.quantity - shopifyItem.quantity;

      if (!seen.has(shopifyItem.id)) {
        adjustments.push({
          delta,
          inventoryItemId: shopifyItem.id,
          locationId: `gid://shopify/Location/${config.shopify.locationId}`
        });

        logs.push({
          sku: shopifyItem.sku,
          delta
        });

        seen.add(shopifyItem.id);
      }
    }
  });

  return {
    changes: adjustments,
    logs
  };
}


function createXMLForOrdersCreate(order) {
  const getItemsXML = (lineItems) => {
    const lines = lineItems.filter(line => line.variant_id !== 41899282661450)

    return lines.map(item => `
      <wms:Item>
        <wms:Sku>${item.sku || ''}</wms:Sku>
        <wms:Qty>${item.quantity || 0}</wms:Qty>
        <wms:Price>${item.price || 0}</wms:Price>
        <wms:Sum>${(item.quantity || 0) * (item.price || 0)}</wms:Sum>
        <wms:MeasureUnit>шт.</wms:MeasureUnit>
      </wms:Item>
    `).join('');
  };

  const orderNote = (() => {
    try {
      return JSON.parse(order.note) || {};
    } catch (e) {
      return {};
    }
  })();

  const organization = config.novapost.xml[config.nodeEnv].organization;
  const shippingAddress = order.shipping_address || {};
  const customer = order.customer || {};

  const prepaymentItem = order.line_items.find(item => item.variant_id == 41899282661450);
  let subtotalPrice = 0;

  if (prepaymentItem) {
    order.line_items.forEach((line) => {
      if (line.variant_id == 41899282661450) return;
      const price = parseFloat(line.price);
      const quantity = parseInt(line.current_quantity);

      subtotalPrice += price * quantity;
    });
  }

  const shippingType = orderNote.selectedPostoffice ? 0 : 1;

  const getAdressXML = () => {
    if (orderNote.selectedPostoffice) {
      orderNote.selectedPostoffice = JSON.parse(orderNote.selectedPostoffice)?.selectedPostoffice;
    } else if (orderNote.settlementObject) {
      orderNote.settlementObject = JSON.parse(orderNote.settlementObject)?.settlementObject;
    }

    return shippingType === 0 ? `
      <wms:Region>${orderNote.selectedPostoffice?.SettlementAreaDescription || ''}</wms:Region>
      <wms:City>${orderNote.selectedPostoffice?.SettlementDescription || ''}</wms:City>
      <wms:Phone>${orderNote.phone || ''}</wms:Phone>
      <wms:DivisionID>${orderNote.selectedPostoffice?.Number || ''}</wms:DivisionID>
    ` : `
      <wms:Region>${orderNote.settlementObject?.AreaDescription || ''}</wms:Region>
      <wms:City>${orderNote.settlementObject?.Description || ''}</wms:City>
      <wms:Street>${orderNote.street || ''}</wms:Street>
      <wms:House>${orderNote.house || ''}</wms:House>
      <wms:Flat>${orderNote.flat || ''}</wms:Flat>
      <wms:Phone>${orderNote.phone || ''}</wms:Phone>
    `;
  };

  const date = new Date(order.created_at || '');
  const externalDate = `${date.getDate().toString().padStart(2, '0')}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;

  const xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
    <soap:Header/>
    <soap:Body>
      <wms:CreateUpdateOrders>
        <wms:Organization>${organization}</wms:Organization>
        <wms:Orders>
          <wms:MessageOrders>
            <wms:HeadOrder>
              <wms:ExternalNumber>${order.id || ''}</wms:ExternalNumber>
              <wms:ExternalDate>${externalDate}</wms:ExternalDate>
              <wms:DestWarehouse>KyivSkhid</wms:DestWarehouse>
              <wms:Adress>${getAdressXML()}</wms:Adress>
              <wms:PayType>1</wms:PayType>
              <wms:payer>1</wms:payer>
              <wms:Contactor>
                <wms:rcptName>${shippingAddress.name || `${customer.first_name} ${customer.last_name}`}</wms:rcptName>
                <wms:rcptContact>${shippingAddress.name || `${customer.first_name} ${customer.last_name}`}</wms:rcptContact>
                <wms:RecipientType>PrivatePerson</wms:RecipientType>
              </wms:Contactor>
              <wms:Description>Shopify order</wms:Description>
              <wms:Cost>${subtotalPrice.toFixed(2)}</wms:Cost>
              ${prepaymentItem ? '<wms:RedeliveryType>2</wms:RedeliveryType>' : ''}
              ${prepaymentItem ? `<wms:DeliveryInOut>${subtotalPrice.toFixed(2)}</wms:DeliveryInOut>` : ''}
              <wms:DeliveryType>${shippingType}</wms:DeliveryType>
              <wms:AdditionalParams/>
            </wms:HeadOrder>
            <wms:Items>${getItemsXML(order.line_items || [])}</wms:Items>
          </wms:MessageOrders>
        </wms:Orders>
      </wms:CreateUpdateOrders>
    </soap:Body>
  </soap:Envelope>`;

  return xml;
}

function createXMLForOrdersCancelled(order) {
  const organization = config.novapost.xml[config.nodeEnv].organization;

  return `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
    <soap:Header/>
    <soap:Body>
      <wms:UndoOrder>
        <wms:Organization>${organization}</wms:Organization>
        <wms:ExternalNumbers>
          <wms:MessageExternalNumbers>
            <wms:ExternalNumber>${order.id}</wms:ExternalNumber>
          </wms:MessageExternalNumbers>
        </wms:ExternalNumbers>
      </wms:UndoOrder>
    </soap:Body>
    </soap:Envelope>
  `;
}

function createXMLForGetOrdersStatuses(orders) {
  const organization = config.novapost.xml[config.nodeEnv].organization;
  const xmls = [];

  for (const order of orders) {
    const xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wms="http://npl-dev.omnic.solutions/wms">
      <soap:Header/>
      <soap:Body>
        <wms:GetOrdersStatus>
          <wms:Organization>${organization}</wms:Organization>
          <wms:Warehouse/>
          <wms:StartDate/>
          <wms:EndDate/>
          <wms:ArrayOrders>
            <wms:MessageArrayOrders>
              <wms:ExternalNumber>${order.legacyResourceId}</wms:ExternalNumber>
              <wms:GUID/>
            </wms:MessageArrayOrders>
          </wms:ArrayOrders>
        </wms:GetOrdersStatus>
      </soap:Body>
      </soap:Envelope>
    `;

    xmls.push(xml);
  }

  return xmls;
}

function updateShopifyProductsMetafield(existingMetafield, data) {
  if (!existingMetafield || !existingMetafield.products) {
    existingMetafield = { products: [] };
  }

  const existingProducts = existingMetafield.products.reduce((acc, product) => {
    acc[product.productId] = product;
    return acc;
  }, {});

  const product = data;
  const productId = product.id;

  if (!existingProducts[productId]) {
    existingMetafield.products.push({
      productId: productId,
      productTitle: product.title,
      variants: product.variants.map(variant => ({
        SKU: variant.sku,
        variantTitle: variant.title,
      }))
    });
  } else {
    const existingProduct = existingProducts[productId];
    existingProduct.productTitle = product.title;
    existingProduct.variants = product.variants.map(variant => ({
      SKU: variant.sku,
      variantTitle: variant.title,
    }));
  }

  return existingMetafield;
}

function formatOrdersStatuses(ordersStatuses) {
  return ordersStatuses.map(order => {
    const statusData = order["soap:Envelope"]?.["soap:Body"]?.["m:GetOrdersStatusResponse"]?.["m:return"]?.["m:MessageOrdersStatusER"];

    if (!statusData) {
      console.error('❌[ERROR] - formatOrdersStatuses recevied wrong order structure:', JSON.stringify(order));
    }

    return {
      id: statusData["m:ExternalNumber"],
      status: statusData["m:Status"],
      parcelNumber: statusData["m:WaybilNumber"]
    };
  });
}

function getOrdersToUpdate(ordersStatuses, allOrdersFromFirestore) {
  const orders = [];
  const allOrdersFirestore = allOrdersFromFirestore.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  for (const orderStatus of ordersStatuses) {
    const matchingOrder = allOrdersFirestore.find(
      order => order.orderId === orderStatus.id
    );

    if (matchingOrder && matchingOrder.orderStatus !== orderStatus.status) {
      const order = {
        ...matchingOrder,
        orderStatus: orderStatus.status
      }
      orders.push(order);
    }
  }

  return orders;
}

function formatLineItemsByFulfillmentOrder(orderId, lineItems) {
  return [
    {
      fulfillmentOrderId: orderId,
      fulfillmentOrderLineItems: lineItems
    }
  ];
}

module.exports = {
  createXMLForProductsCreateUpdate,
  createXMLForProductsDelete,
  createXMLForGetStocks,
  prepareInventoryAdjustments,
  createXMLForOrdersCreate,
  createXMLForOrdersCancelled,
  createXMLForGetOrdersStatuses,
  updateShopifyProductsMetafield,
  formatOrdersStatuses,
  getOrdersToUpdate,
  formatLineItemsByFulfillmentOrder
};