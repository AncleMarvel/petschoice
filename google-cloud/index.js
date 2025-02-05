const config = require('./config');
const webhooks = require('./webhooks/examples');
const requestHelper = require('./helpers/request');
const firestoreHelper = require('./helpers/firestore');
const dataFormatter = require('./helpers/dataFormatter');

exports.handleProductsCreateUpdate = async (req, res) => {
  const data = config.isLocal ? webhooks.productsCreate : req.body;
  let xmls, result;

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }

  try {
    const { existingMetafield, metafieldId } = await requestHelper.getShopifyShopMetafield('wms', 'products');
    const updatedMetafield = dataFormatter.updateShopifyProductsMetafield(existingMetafield, data);
    await requestHelper.updateShopifyMetafield(updatedMetafield, metafieldId);
  } catch (error) {
    console.error('❌[ERROR] - Error updating Shopify metafield', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    xmls = dataFormatter.createXMLForProductsCreateUpdate(data);
  } catch (error) {
    console.error('❌[ERROR] - Error generating XMLS for productsCreateUpdate:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    result = await requestHelper.sendCreateUpdateGoods(xmls);
  } catch (error) {
    console.error('❌[ERROR] - Error sending SOAP:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - CreateUpdateGood request sent successfully:', JSON.stringify(result));
  return res.status(200).send('ok');
}

exports.handleProductsDelete = async (req, res) => {
  const data = config.isLocal ? webhooks.productsDelete : req.body;
  let xmls, result, shopifyMetafield;

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }

  try {
    shopifyMetafield = await requestHelper.getShopifyShopMetafield('wms', 'products');
  } catch (error) {
    console.error('❌[ERROR] - Error getting Shopify metafield:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    xmls = dataFormatter.createXMLForProductsDelete(data, shopifyMetafield);
  } catch (error) {
    console.error('❌[ERROR] - Error generating XMLS for productsDelete:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    result = await requestHelper.sendCreateUpdateGoods(xmls);
  } catch (error) {
    console.error('❌[ERROR] - Error sending SOAP:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - CreateUpdateGood request sent successfully:', JSON.stringify(result));
  return res.status(200).send('ok');
}

exports.syncInventory = async (_req, res) => {
  let stocksNovaPost, stocksShopify, result;

  try {
    stocksNovaPost = await requestHelper.getStocksFromNovaPost();
  } catch (error) {
    console.error('❌[ERROR] - Error getting stocks from NovaPost:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    stocksShopify = await requestHelper.getStocksFromShopify();
  } catch (error) {
    console.error('❌[ERROR] - Error getting stocks from Shopify:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    const { changes, logs } = dataFormatter.prepareInventoryAdjustments(stocksNovaPost, stocksShopify);
    result = await requestHelper.syncStocks(changes);
    console.log('📄[INFO] - Result:', JSON.stringify(logs));
  } catch (error) {
    console.error('❌[ERROR] - Error syncing stocks:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - Stocks synced successfully:', JSON.stringify(result));
  return res.status(200).send('ok');
};

exports.orderCreate = async (req, res) => {
  console.log('\n\n\n---------------------------------------');
  console.log('RUN orderCreate...');
  console.log('---------------------------------------');

  const data = config.isLocal ? webhooks.ordersCreate_PrepaymentWarehouse : req.body;
  console.log(`📄[INFO] - Order name: ${data?.name}`);
  console.log(`📄[INFO] - PAYLOAD: ${JSON.stringify(req?.body, null, 2)}`);
  let xml;

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }
  try {
    xml = dataFormatter.createXMLForOrdersCreate(data);
    console.log(`📄[INFO] - XML created successfully for order: ${data?.name}`);
    console.log('[XML]:', xml);
  } catch (error) {
    console.error('❌[ERROR] - Error creating XML:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    const result = await requestHelper.sendOrderCreate(xml);

    if (result.status === 200) {
      console.log(`📄[INFO] - Order name: ${data.name} successfully sent!`);
    }
  } catch (error) {
    console.error('❌[ERROR] - Error sending orderCreate:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    const dataToSend = {
      orderName: data.name,
      orderId: data.id,
      orderStatus: 'Новый'
    };

    await firestoreHelper.addToFirestore(dataToSend, `${data.id}`, 'orders');
  } catch (error) {
    console.error('❌[ERROR] - Error putting order to firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  return res.status(200).send('ok');
};

exports.orderCancel = async (req, res) => {
  console.log('\n\n\n---------------------------------------');
  console.log('RUN orderCancel...');
  console.log('---------------------------------------');
  const data = config.isLocal ? webhooks.ordersCancelled : req.body;
  let xml;
  console.log(`📄[INFO] - Order: ${data.name}`);
  console.log(`📄[INFO] - PAYLOAD: ${JSON.stringify(req?.body, null, 2)}`);

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }

  try {
    xml = dataFormatter.createXMLForOrdersCancelled(data);
    console.log('[XML]:', xml);
  } catch (error) {
    console.error('❌[ERROR] - Error creating XML:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    const result = await requestHelper.sendOrderCancelled(xml);
    if (result.status === 200) {
      console.log(`📄[INFO] - Order name: ${data.name} successfully canceled!`);
    }
  } catch (error) {
    console.error('❌[ERROR] - Error sending orderCancel:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    await firestoreHelper.removeFromFirestore(`${data.id}`, 'orders');
  } catch (error) {
    console.error('❌[ERROR] - Error removing order from firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  return res.status(200).send('ok');
};

exports.getOrdersStatuses = async (_req, res) => {
  console.log('\n\n\n---------------------------------------');
  console.log('RUN getOrdersStatuses...');
  console.log('---------------------------------------');
  let openedOrders, ordersStatuses, allOrdersFromFirestore;

  try {
    openedOrders = await requestHelper.getOpenedOrders();
  } catch (error) {
    console.error('❌[ERROR] - Error getting opened orders:', error);
    return res.status(500).send('Internal Server Error');
  }

  if (openedOrders.length === 0) {
    console.log('📄[INFO] - Received 0 opened orders');
    return res.status(200).send('ok');
  } else {
    console.log(`📄[INFO] - Received ${openedOrders.length} opened orders`);
    console.log('📄[OPENED ORDERS]:', JSON.stringify(openedOrders, null, 2));
  }

  const xmls = dataFormatter.createXMLForGetOrdersStatuses(openedOrders);
  console.log('📄[XMLs]:', xmls);

  try {
    const rawOrdersStatuses = await requestHelper.getOrdersStatuses(xmls);
    console.log('📄[INFO] - rawOrdersStatuses:', JSON.stringify(rawOrdersStatuses, null, 2));
    ordersStatuses = dataFormatter.formatOrdersStatuses(rawOrdersStatuses);
    console.log('📄[INFO] - FORMATTED rawOrdersStatuses:', JSON.stringify(ordersStatuses, null, 2));
  } catch (error) {
    console.error('❌[ERROR] - Error getting orders status:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    allOrdersFromFirestore = await firestoreHelper.getAllDocuments('orders');
  } catch (error) {
    console.error('❌[ERROR] - Error getting orders from firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    const ordersToUpdate = dataFormatter.getOrdersToUpdate(ordersStatuses, allOrdersFromFirestore);
    for (const order of ordersToUpdate) {
      try {
        await updateFirestoreItem('orders', order.orderId, order);
      } catch (error) {
        console.error(`❌[ERROR] - Failed to update order in firestore ${order.orderId}:`, error);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders in firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    for (const order of ordersStatuses) {
      try {
        const { metafieldId } = await requestHelper.getShopifyOrderMetafield('wms', 'order_status', order.id);
        const metafield = { status: order.status };
        await requestHelper.updateShopifyMetafield(metafield, metafieldId);
        console.log('📄[INFO] - Metafield updated for order:', order.id);
      } catch (error) {
        console.error(`❌[ERROR] - Failed to update order in shopify metafield ${order.id}:`, error);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders in shopify metafield:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    for (const order of ordersStatuses) {
      try {
        const result = await requestHelper.updateOrderStatus(order);
        if (result) console.log('📄[INFO] - Order status updated, result:', JSON.stringify(result));
      } catch (error) {
        console.error(`❌[ERROR] - Error updating order status. Order Id: ${order.id}, status: ${order.status}. Error: ${error}`);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders status in shopify:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - Done');
  return res.status(200).send('ok');
};