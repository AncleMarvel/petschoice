const soap = require('soap');
const config = require('../config');

const WSDL_URL = config.novapost.urls[config.nodeEnv];
const AUTH = config.novapost.auth[config.nodeEnv];

/** 
 * @type {soap.Client | null} 
 * @private
 */
let soapClient = null;

/**
 * Создаёт SOAP-клиента (кэшируется)
 * @returns {Promise<soap.Client>} SOAP-клиент
 */
async function getSoapClient() {
    if (soapClient) return soapClient;

    try {
        soapClient = await soap.createClientAsync(WSDL_URL, {
            overrideRootElement: { namespace: 'OM_depositorExchaneSoap12' }
        });

        // Добавляем аутентификацию
        soapClient.setSecurity(new soap.BasicAuthSecurity(AUTH.username, AUTH.password));

        console.log('✅ SOAP-клиент успешно создан');
        return soapClient;
    } catch (error) {
        console.error(`❌ [SOAP ERROR] Ошибка создания клиента:`, error);
        throw error;
    }
}

/**
 * Отправляет SOAP-запрос
 * @param {string} method - Метод SOAP API
 * @param {Object} args - Аргументы запроса
 * @returns {Promise<Object>} - Ответ API
 */
async function sendSoapRequest(method, args) {
    try {
        const client = await getSoapClient();

        if (!client[method]) {
            throw new Error(`Метод ${method} отсутствует в SOAP API`);
        }

        const [result] = await client[method](args);
        return result;
    } catch (error) {
        console.error(`❌ [SOAP ERROR] Ошибка вызова ${method}:`, error);
        throw error;
    }
}

/**
 * Создаёт или обновляет товары в Nova Poshta
 * @param {Array<Object>} goodsData - Данные о товарах
 * @returns {Promise<Object>} - Ответ Nova Poshta
 */
async function createUpdateGoods(goodsData) {
    return sendSoapRequest('CreateUpdateGoods', {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        Goods: { MessageGoods: goodsData }
    });
}

/**
 * Создаёт или обновляет заказы в Nova Poshta
 * @param {Array<Object>} ordersData - Данные о заказах
 * @returns {Promise<Object>} - Ответ Nova Poshta
 */
async function createUpdateOrders(ordersData) {
    return sendSoapRequest('CreateUpdateOrders', {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        Orders: { MessageOrders: ordersData }
    });
}

/**
 * Создаёт или обновляет единицы измерения в Nova Poshta
 * @param {Array<Object>} measureUnits - Данные о единицах измерения
 * @returns {Promise<Object>} - Ответ Nova Poshta
 */
async function createUpdateMeasureUnits(measureUnits) {
    return sendSoapRequest('CreateUpdateMeasureUnits', {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        MeasureUnits: { MessageMeasureUnit: measureUnits }
    });
}

/**
 * Отменяет заказ в Nova Poshta
 * @param {Array<{ ExternalNumber: string, GUID: string }>} externalNumbers - Заказы для отмены
 * @returns {Promise<Object>} - Ответ Nova Poshta
 */
async function undoOrder(externalNumbers) {
    return sendSoapRequest('UndoOrder', {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        ExternalNumbers: { MessageExternalNumbers: externalNumbers }
    });
}

/**
 * Получает статусы заказов в Nova Poshta
 * @param {Array<{ ExternalNumber: string, GUID: string }>} orderNumbers - Заказы для получения статуса
 * @param {string} warehouse - Склад (необязательно)
 * @returns {Promise<Object>} - Ответ Nova Poshta
 */
async function getOrdersStatus(orderNumbers, warehouse = '') {
    return sendSoapRequest('GetOrdersStatus', {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        Warehouse: warehouse,
        ArrayOrders: { MessageArrayOrders: orderNumbers }
    });
}

module.exports = {
    createUpdateGoods,
    createUpdateOrders,
    createUpdateMeasureUnits,
    undoOrder,
    getOrdersStatus
};
