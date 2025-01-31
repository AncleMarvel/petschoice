/**
 * @file requests.js
 * @description Файл с запросами к Nova Poshta (через node-soap) и Shopify (через GraphQL).
 */

const soap = require('soap');
const config = require('../config');
const graphqlHelper = require('./graphql');
const Shopify = require('shopify-api-node');

/** Инициализация клиента Shopify */
const shopify = new Shopify({
  shopName: config.shopify.shopName,
  apiKey: config.shopify.apiKey,
  password: config.shopify.password,
  apiVersion: config.shopify.apiVersion
});

/**
 * @type {import('soap').Client | null}
 * @private
 * Переменная, чтобы хранить SOAP-клиент (singleton).
 */
let soapClient = null;

/**
 * Возвращает (кэширующий) SOAP-клиент, основанный на WSDL.  
 * При первом вызове создает клиента, при последующих — возвращает тот же.
 * 
 * @async
 * @function getSoapClient
 * @returns {Promise<import('soap').Client>} SOAP-клиент c уже установленной BasicAuth
 * @throws {Error} Если не удалось создать клиента
 */
async function getSoapClient() {
  if (soapClient) return soapClient;

  // Путь к WSDL (либо локальный файл, либо URL). Например:
  // const wsdlPath = path.join(__dirname, '../novaPoshta.wsdl');
  // Либо 'https://somewhere/novaPoshta.wsdl'
  const wsdlPath = '../novaPoshta.wsdl';

  try {
    // Создаём клиента
    soapClient = await soap.createClientAsync(wsdlPath, {
      overrideRootElement: {
        namespace: 'OM_depositorExchaneSoap12',
      }
    });

    // Устанавливаем BasicAuth из config
    const { username, password } = config.novapost.auth[config.nodeEnv];
    soapClient.setSecurity(new soap.BasicAuthSecurity(username, password));

    return soapClient;
  } catch (err) {
    console.error('[SOAP] Error creating client:', err);
    throw err;
  }
}

/* ===========================================================================
   1) Методы Nova Poshta (через node-soap)
   Пример: CreateUpdateGoods, CreateUpdateOrders, UndoOrder, GetOrdersStatus, GetFactInbound...
   =========================================================================== */

/**
 * Создаёт/обновляет товары в Nova Poshta (WMS), используя метод CreateUpdateGoods.
 * @async
 * @function createUpdateGoods
 * @param {Object} args - Аргументы, соответствующие структуре WSDL
 * @returns {Promise<any>} - Результат метода CreateUpdateGoods
 * @example
 * const args = {
 *   Organization: 'ООО Ромашка',
 *   Goods: {
 *     MessageGoods: {
 *       Sku: '123',
 *       GoodsUnitName: 'SomeName',
 *       // ...
 *     }
 *   }
 * };
 * const result = await createUpdateGoods(args);
 */
async function createUpdateGoods(args) {
  const client = await getSoapClient();
  // Для node-soap асинхронные методы называются "<methodName>Async"
  // если в WSDL метод: <operation name="CreateUpdateGoods">
  // то в клиенте будет client.CreateUpdateGoodsAsync(...)
  const [result, rawResponse, soapHeader, rawRequest] =
    await client.CreateUpdateGoodsAsync(args);

  // Если нужно, можно проверить result на ошибки
  return result;
}

/**
 * Создаёт/обновляет заказы (OrderCreate) в Nova Poshta, метод CreateUpdateOrders.
 * @async
 * @function createUpdateOrders
 * @param {Object} args - Аргументы согласно WSDL
 * @returns {Promise<any>}
 */
async function createUpdateOrders(args) {
  const client = await getSoapClient();
  const [result] = await client.CreateUpdateOrdersAsync(args);
  return result;
}

/**
 * Отменяет заказ в Nova Poshta (OrderCancel), метод UndoOrder.
 * @async
 * @function undoOrder
 * @param {Object} args - Аргументы (ExternalNumbers и т.д.)
 * @returns {Promise<any>}
 */
async function undoOrder(args) {
  const client = await getSoapClient();
  const [result] = await client.UndoOrderAsync(args);
  return result;
}

/**
 * Возвращает статусы заказов, метод GetOrdersStatus.
 * @async
 * @function getOrdersStatus
 * @param {Object} args - Аргументы (Organization, Warehouse, ArrayOrders, ...)
 * @returns {Promise<any>}
 */
async function getOrdersStatus(args) {
  const client = await getSoapClient();
  const [result] = await client.GetOrdersStatusAsync(args);
  return result;
}

/**
 * Возвращает фактические остатки (сток) из Nova Poshta, метод GetFactInbound.
 * @async
 * @function getFactInbound
 * @param {Object} args - Аргументы (Organization, StartDate, EndDate, Warehouse, ...)
 * @returns {Promise<any>}
 */
async function getFactInbound(args) {
  const client = await getSoapClient();
  const [result] = await client.GetFactInboundAsync(args);
  return result;
}

/* ===========================================================================
   2) Пример адаптера/обёртки для "получить сток" (getStocksFromNovaPost),
   который вызывал раньше ручной XML. Теперь вызываем getFactInbound(args).
   =========================================================================== */

/**
 * Пример функции, которая передаёт в GetFactInbound аргументы (Organization, Warehouse, даты...),
 * и далее парсит результат в нужный формат (sku, quantity, quantityPlan).
 * 
 * @async
 * @function getStocksFromNovaPost
 * @returns {Promise<Array<{sku: string, quantity: number, quantityPlan: number}>>}
 */
async function getStocksFromNovaPost() {
  // Вы можете использовать dataFormatter или любой другой метод,
  // чтобы собрать объект `args`, соответствующий структуре WSDL.
  // Например:
  const currentDate = new Date();
  const dateString = currentDate.toISOString().replace('T', ' ').split('.')[0];
  // (просто пример, смотрите как у вас WSDL описывает дату)

  const organization = config.novapost.xml[config.nodeEnv].organization;

  // Допустим, WSDL ждет такие поля:
  const args = {
    Organization: organization,
    Warehouse: '',
    StartDate: '',
    EndDate: dateString,
    ArrayPlanInbound: {
      // ... если надо
    }
  };

  const result = await getFactInbound(args);

  // `result` – это то, что вернётся внутри <return><MessageFactInboundER>...</MessageFactInboundER></return> и т.п.
  // Структуру смотрите в WSDL/describe().

  // Предположим, результат лежит в result.return.MessageFactInboundER
  // (Название зависит от того, как сформирован WSDL. Иногда namespace).
  const messageFactInboundER = result?.return?.MessageFactInboundER;

  if (!messageFactInboundER) {
    console.log('[INFO] - No stocks found in the response');
    return [];
  }

  // Далее берем ItemsFactinbound, распарсиваем под dev/prod окружение, как в вашем примере
  let unparsedStocks = [];
  if (Array.isArray(messageFactInboundER)) {
    // В одном случае может быть массив
    unparsedStocks = messageFactInboundER;
  } else {
    // В другом — объект. Подстройтесь под фактическую структуру.
    unparsedStocks = [messageFactInboundER];
  }

  // Пробегаемся и формируем итоговый массив
  const stocks = unparsedStocks.map((item) => {
    // В зависимости от dev/prod, поля могут различаться
    if (config.nodeEnv === 'development') {
      // Примерно так:
      const details = item?.ItemsFactinbound;
      return {
        sku: details?.Sku,
        quantity: details?.Qty,
        quantityPlan: details?.QtyPlan
      };
    } else {
      return {
        sku: item?.Sku,
        quantity: item?.Qty,
        quantityPlan: item?.QtyPlan
      };
    }
  });

  return stocks;
}

/* ===========================================================================
   3) Shopify (GraphQL) – как и раньше, либо "shopify-api-node", либо axios c GQL
   =========================================================================== */

/** Пример: Рекурсивно получить все остатки из Shopify */
async function getStocksFromShopify(after = null, collectedData = []) {
  const query = graphqlHelper.getAllStocks(after);
  const variables = {
    first: 100,
    locationId: `gid://shopify/Location/${config.shopify.locationId}`,
    ...(after && { after })
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
      return getStocksFromShopify(nextCursor, collectedData);
    }

    return collectedData;
  } catch (error) {
    console.error('[ERROR] - getStocksFromShopify:', error);
    throw error;
  }
}

/** Синхронизация стоков (пример, как было) */
async function syncStocks(inventoryAdjustments) {
  if (inventoryAdjustments.length === 0) {
    return 'No inventory adjustments to sync';
  }

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
    }
    return JSON.stringify(inventoryAdjustments);
  } catch (error) {
    throw error;
  }
}

/** Получить все "открытые" заказы (примеры) */
async function getOpenedOrders(after = null, collectedOrders = []) {
  const query = graphqlHelper.getAllOrders();
  const variables = {
    first: 250,
    ...(after && { after })
  };

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

/** Получить metafield у Shop */
async function getShopifyShopMetafield(namespace, key) {
  const query = graphqlHelper.getShopMetafield;
  const variables = { namespace, key };

  try {
    const request = await shopify.graphql(query, variables);
    const metafield = request?.shop?.metafield;
    return {
      existingMetafield: JSON.parse(metafield?.value || '{}'),
      metafieldId: +metafield?.legacyResourceId || null
    };
  } catch (error) {
    throw error;
  }
}

/** Получить metafield у конкретного заказа */
async function getShopifyOrderMetafield(namespace, key, orderId) {
  const query = graphqlHelper.getOrderMetafield;
  const variables = { namespace, key, id: `gid://shopify/Order/${orderId}` };

  try {
    const request = await shopify.graphql(query, variables);
    const metafield = request?.order?.metafield;
    return {
      existingMetafield: JSON.parse(metafield?.value || '{}'),
      metafieldId: +metafield?.legacyResourceId || null
    };
  } catch (error) {
    throw error;
  }
}

/** Обновить metafield */
async function updateShopifyMetafield(metafield, metafieldId) {
  const data = JSON.stringify(metafield);

  try {
    await shopify.metafield.update(metafieldId, { value: data });
  } catch (error) {
    throw error;
  }
}

/* ===========================================================================
   4) Пример логики смены статуса заказа (если нужно)
   =========================================================================== */

/**
 * Обновляет статус заказа в Shopify (например, «Отгружен» => делаем fulfillment, «Отменён» => отменяем).
 * @async
 * @function updateOrderStatus
 * @param {{ id: number|string, status: string, parcelNumber?: string }} order
 * @returns {Promise<any|void>}
 */
async function updateOrderStatus(order) {
  const statuses = {
    'Отгружен': await prepareFulfillmentData(order),
    'Отменен': prepareOrderCancel(order)
  };

  const statusHandler = statuses[order.status];
  if (!statusHandler) return;

  try {
    const { mutation, variables } = statusHandler;
    return await shopify.graphql(mutation, variables);
  } catch (error) {
    throw error;
  }
}

/**
 * Получить fulfillmentOrders для заказа, подготовить данные для fulfillmentCreate
 * @param {string|number} orderId
 * @returns {Promise<{ mutation: string, variables: any }>}
 */
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

/**
 * Возвращает GraphQL-мутацию для отмены заказа
 * @param {{ id: string|number }} order
 * @returns {{ mutation: string, variables: any }}
 */
function prepareOrderCancel(order) {
  return {
    mutation: graphqlHelper.orderCancel,
    variables: {
      notifyCustomer: false,
      orderId: `gid://shopify/Order/${order.id}`,
      reason: 'CUSTOMER',
      refund: true,
      restock: true
    }
  };
}

/**
 * Получаем fulfillmentOrders по ID заказа
 * @async
 * @function getFulfillmentOrders
 * @param {string|number} orderId
 * @returns {Promise<any[]>}
 */
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

/* ===========================================================================
   5) Экспорт всех функций
   =========================================================================== */
module.exports = {
  // 5.1: SOAP (node-soap)
  getSoapClient,
  createUpdateGoods,
  createUpdateOrders,
  undoOrder,
  getOrdersStatus,
  getFactInbound,

  // 5.2: Адаптеры / обёртки над методами Nova Poshta
  getStocksFromNovaPost,

  // 5.3: Shopify GraphQL
  getStocksFromShopify,
  syncStocks,
  getOpenedOrders,
  getShopifyShopMetafield,
  getShopifyOrderMetafield,
  updateShopifyMetafield,
  updateOrderStatus
};
