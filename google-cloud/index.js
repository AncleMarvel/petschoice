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

// Пример предполагаемых функций мапинга (без реализации!)
// Обычно вы их опишете в отдельном файле, например, "mappings.js".
// Они должны вернуть объект, подходящий под структуру WSDL (на вход createUpdateOrders, undoOrder, и т.п.)
const {
  mapShopifyOrderToNovaPoshtaCreate,
  mapShopifyOrderToNovaPoshtaCancel,
  mapOrdersToGetOrdersStatus
} = require('./helpers/mappings'); // <--- Сам файл мапинга

exports.syncInventory = async (_req, res) => {
  let stocksNovaPost, stocksShopify, result;

  try {
    // 1) Получаем остатки из Nova Poshta
    stocksNovaPost = await requestHelper.getStocksFromNovaPost();
  } catch (error) {
    console.error('❌[ERROR] - Error getting stocks from NovaPost:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    // 2) Получаем остатки из Shopify
    stocksShopify = await requestHelper.getStocksFromShopify();
  } catch (error) {
    console.error('❌[ERROR] - Error getting stocks from Shopify:', error);
    return res.status(500).send('Internal Server Error');
  }

  try {
    // 3) Формируем список корректировок
    const { changes, logs } = dataFormatter.prepareInventoryAdjustments(stocksNovaPost, stocksShopify);

    // 4) Отправляем корректировки обратно в Shopify
    result = await requestHelper.syncStocks(changes);
    console.log('📄[INFO] - Inventory sync logs:', JSON.stringify(logs));
  } catch (error) {
    console.error('❌[ERROR] - Error syncing stocks:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - Stocks synced successfully:', JSON.stringify(result));
  return res.status(200).send('ok');
};

exports.orderCreate = async (req, res) => {
  // Если локально, берём mock
  const data = config.isLocal ? webhooks.ordersCreate : req.body;

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }

  console.log(`📄[INFO] - orderCreate called for order: ${data.name} (ID: ${data.id})`);

  let mappedArgs;
  try {
    // 1) Мапим структуру Shopify-заказа в структуру NovaPoshta (CreateUpdateOrders)
    mappedArgs = mapShopifyOrderToNovaPoshtaCreate(data);
  } catch (error) {
    console.error('❌[ERROR] - Error mapping shopify order to NovaPoshta:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 2) Создаём/обновляем заказ в NovaPoshta
  try {
    const result = await requestHelper.createUpdateOrders(mappedArgs);
    console.log(`📄[INFO] - NovaPoshta createUpdateOrders response for order ${data.name}:`, result);
  } catch (error) {
    console.error('❌[ERROR] - Error sending orderCreate:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 3) Добавляем запись в Firestore (пример)
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
  // Аналогично, если локально, берём mock
  const data = config.isLocal ? webhooks.ordersCancelled : req.body;

  if (!data || Object.keys(data).length === 0) {
    console.error('❌[ERROR] - Bad request. No data found');
    return res.status(400).send('Bad request');
  }

  console.log(`📄[INFO] - orderCancel called for order: ${data.name} (ID: ${data.id})`);

  let mappedArgs;
  try {
    // 1) Мапим структуру Shopify-заказа в структуру NovaPoshta (UndoOrder)
    mappedArgs = mapShopifyOrderToNovaPoshtaCancel(data);
  } catch (error) {
    console.error('❌[ERROR] - Error mapping shopify order to NovaPoshta for cancel:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 2) Отправляем запрос на отмену в NovaPoshta
  try {
    const result = await requestHelper.undoOrder(mappedArgs);
    console.log(`📄[INFO] - NovaPoshta undoOrder response for order ${data.name}:`, result);
  } catch (error) {
    console.error('❌[ERROR] - Error sending orderCancel:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 3) Удаляем заказ из Firestore
  try {
    await firestoreHelper.removeFromFirestore(`${data.id}`, 'orders');
  } catch (error) {
    console.error('❌[ERROR] - Error removing order from firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  return res.status(200).send('ok');
};

exports.getOrdersStatuses = async (_req, res) => {
  let openedOrders, rawOrdersStatuses, ordersStatuses, allOrdersFromFirestore;

  // 1) Получаем "открытые" заказы из Shopify (например, status=OPEN)
  try {
    openedOrders = await requestHelper.getOpenedOrders();
  } catch (error) {
    console.error('❌[ERROR] - Error getting opened orders:', error);
    return res.status(500).send('Internal Server Error');
  }

  if (openedOrders.length === 0) {
    console.log('📄[INFO] - Received 0 opened orders');
    return res.status(200).send('ok');
  }

  // 2) Мапим "открытые" заказы, чтобы вызвать getOrdersStatus в NovaPoshta
  //    (например, массив ExternalNumbers, если нужно)
  let mappedArgs;
  try {
    mappedArgs = mapOrdersToGetOrdersStatus(openedOrders);
  } catch (error) {
    console.error('❌[ERROR] - Error mapping openedOrders to getOrdersStatus:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 3) Получаем статусы из NovaPoshta
  try {
    rawOrdersStatuses = await requestHelper.getOrdersStatus(mappedArgs);
    // rawOrdersStatuses — ответ от NovaPoshta
  } catch (error) {
    console.error('❌[ERROR] - Error getting orders status:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 4) Приводим ответ NovaPoshta к массиву { id, status, ... }
  //    (т.е. сопоставляем ExternalNumber -> shopifyOrderId)
  try {
    ordersStatuses = dataFormatter.formatOrdersStatuses(rawOrdersStatuses);
    // Или у вас может быть отдельная функция mapOrdersStatusFromNovaPoshtaToShopify(...)
  } catch (error) {
    console.error('❌[ERROR] - Error formatting orders statuses:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 5) Берём все заказы из Firestore
  try {
    allOrdersFromFirestore = await firestoreHelper.getAllDocuments('orders');
  } catch (error) {
    console.error('❌[ERROR] - Error getting orders from firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 6) Сопоставляем, какие заказы нужно обновить
  try {
    const ordersToUpdate = dataFormatter.getOrdersToUpdate(ordersStatuses, allOrdersFromFirestore);
    for (const order of ordersToUpdate) {
      try {
        await firestoreHelper.updateFirestoreItem('orders', order.orderId, order);
      } catch (error) {
        console.error(`❌[ERROR] - Failed to update order in firestore ${order.orderId}:`, error);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders in firestore:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 7) Обновляем metafield с "order_status" в Shopify
  try {
    for (const order of ordersStatuses) {
      try {
        const { metafieldId } = await requestHelper.getShopifyOrderMetafield('wms', 'order_status', order.id);
        const metafield = { status: order.status };
        await requestHelper.updateShopifyMetafield(metafield, metafieldId);
        console.log('📄[INFO] - Metafield updated for order:', order.id);
      } catch (error) {
        console.error(`❌[ERROR] - Failed to update shopify metafield. Order: ${order.id}`, error);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders in shopify metafield:', error);
    return res.status(500).send('Internal Server Error');
  }

  // 8) Если нужно, обновляем статус заказа в Shopify (fulfillment/cancel)
  try {
    for (const order of ordersStatuses) {
      try {
        const result = await requestHelper.updateOrderStatus(order);
        if (result) {
          console.log('📄[INFO] - Order status updated in Shopify, result:', JSON.stringify(result));
        }
      } catch (error) {
        console.error(`❌[ERROR] - Error updating order status in Shopify. Order Id: ${order.id}`, error);
      }
    }
  } catch (error) {
    console.error('❌[ERROR] - Error updating orders status in shopify:', error);
    return res.status(500).send('Internal Server Error');
  }

  console.log('✅[SUCCESS] - Done');
  return res.status(200).send('ok');
};
