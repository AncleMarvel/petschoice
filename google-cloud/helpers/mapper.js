const config = require('../config');

/**
 * @module OrderMapper
 * @description
 * Этот модуль предоставляет функции для двустороннего маппинга между данными заказа из Shopify и
 * данными, необходимыми для вызова API Новой Почты (например, метода CreateUpdateOrders).
 * 
 * Для работы с SOAP можно использовать пакет [node-soap](https://www.npmjs.com/package/soap),
 * здесь же представлена только логика преобразования данных.
 */

/**
 * Список полей из структуры НП (CreateUpdateOrders), которые не удалось смапить из данных Shopify.
 * Эти поля отсутствуют в payload Shopify или не имеют однозначного соответствия.
 *
 * @constant
 * @type {Object}
 */
const UNMAPPED_FIELDS = {
    headOrder: [
        'DestWarehouse',
        'Adress.House',
        'Adress.NPWarehouse',
        'Adress.District',
        'Adress.NPWarehouseSec',
        'Adress.StructureType',
        'Adress.DivisionID',
        'Adress.SettlementID',
        'PayType',
        'payer',
        'Contactor.RecipientType',
        'Contactor.RecipientEDRPOU',
        'AdditionalInfo',
        'Documents',
        'RedeliveryType',
        'DeliveryInOut',
        'DeliveryAmount',
        'DeliveryType',
        'AdditionalParams.RedeliveryPaymentPayer',
        'AdditionalParams.AdditionalRedeliveryType',
        'AdditionalParams.AdditionalDeliveryInOut',
        'AdditionalParams.TypeTrays',
        'AdditionalParams.TrayPlaces',
        'AdditionalParams.FlourCount',
        'AdditionalParams.Elevator',
        'AdditionalParams.HandToHand',
        'AdditionalParams.DeliveryInSaturday',
        'AdditionalParams.PreferredDeliveryDate',
        'AdditionalParams.DeliveryInCertainTime',
        'AdditionalParams.SameDayDelivery',
        'AdditionalParams.IsTakeAttorney',
        'AdditionalParams.UserActions',
        'AdditionalParams.PartialReturn',
        'AdditionalParams.ForwardingCount',
        'AdditionalParams.AccompanyingDocuments',
        'OrderType',
        'AdditionalInfo2',
        'AdditionalInfo3',
        'AdditionalInfo4',
        'AdditionalInfo5',
        'AdditionalInfo6',
        'DeliveryPlanDate',
        'TTNOrganization',
        'PreferredDeliveryDate',
        'PayerEDRPOU',
        'WaybilRef',
        'AccompanyingDocuments',
        'Consolidation',
        'DocumentList',
        'ConsolidationDetails',
        'CargoType',
        'ExpressPallet',
        'ForwardingCount',
        'PrintVersion',
        'AdditionalInfo7',
        'AdditionalInfo8',
        'AdditionalInfo9',
        'AdditionalInfo10',
        'FinancialInstitution',
        'AfterpaymentOnGoodsCostInfo',
        'AwisAPIKey',
        'WaybilNumber',
        'CrossDocking',
        'BackwardDeliveryPhone',
        'TimeInterval',
        'ExistAccompDocuments',
        'Priority',
        'ServiceID',
        'IOSS',
        'CompletingAdvertisingMaterials',
        'AdditionalPackaging'
    ],
    items: [
        'MeasureUnit',
        'BarCode',
        'Series',
        'ExpirationDate',
        'Marketing',
        'Owner',
        'Quality',
        'LineAmount',
        'AccountNum',
        'SpecialCondition',
        'LineAmountTax',
        'BatchId',
        'PalletId',
        'BarCodes',
        'Serials'
    ]
};

/**
 * Преобразует payload заказа из Shopify в структуру для метода CreateUpdateOrders API Новой Почты.
 *
 * @param {Object} shopifyOrder - Объект заказа, полученный от Shopify (например, webhook).
 * @returns {Object} Объект, соответствующий схеме NP (CreateUpdateOrders).
 *
 * @example
 * const npPayload = mapShopifyOrderToNP(shopifyOrder);
 * // npPayload можно передать в метод client.CreateUpdateOrders(npPayload, callback)
 */
function mapShopifyOrderToNP(shopifyOrder) {
    const headOrder = {
        // Используем номер заказа и id в качестве ExternalNumber и GUID
        ExternalNumber: shopifyOrder.order_number ? shopifyOrder.order_number.toString() : '',
        GUID: shopifyOrder.id ? shopifyOrder.id.toString() : '',
        ExternalDate: shopifyOrder.created_at || '',
        DestWarehouse: '', // Нет соответствия в Shopify
        Adress: {
            // Маппинг адреса осуществляется по данным shipping_address
            Region: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.province : '',
            City: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.city : '',
            Street: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.address1 : '',
            House: '', // Нет соответствия в Shopify
            Flat: shopifyOrder.shipping_address && shopifyOrder.shipping_address.address2 ? shopifyOrder.shipping_address.address2 : '',
            Phone: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.phone : '',
            NPWarehouse: 0,         // Нет соответствия
            District: '',           // Нет соответствия
            NPWarehouseSec: 0,      // Нет соответствия
            ZipCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.zip : '',
            StructureType: 0,       // Нет соответствия
            SettlementType: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.country : '',
            CountryCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.country_code : '',
            PostCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.zip : '',
            Email: shopifyOrder.contact_email || shopifyOrder.email || ''
            // Поля DivisionID и SettlementID отсутствуют в Shopify
        },
        PayType: 0, // Нет соответствия
        payer: 0,   // Нет соответствия
        PayerCompany: shopifyOrder.billing_address ? shopifyOrder.billing_address.company || '' : '',
        PayerCity: shopifyOrder.billing_address ? shopifyOrder.billing_address.city || '' : '',
        Contactor: {
            // Формируем контактное имя из shipping_address
            rcptName: shopifyOrder.shipping_address
                ? `${shopifyOrder.shipping_address.first_name || ''} ${shopifyOrder.shipping_address.last_name || ''}`.trim()
                : '',
            rcptContact: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.phone || '' : '',
            RecipientType: '',    // Нет соответствия
            RecipientEDRPOU: ''   // Нет соответствия
        },
        Description: shopifyOrder.note || '',
        AdditionalInfo: '',       // Нет соответствия
        Documents: '',            // Нет соответствия
        Cost: parseFloat(shopifyOrder.total_price) || 0,
        RedeliveryType: 0,        // Нет соответствия
        DeliveryInOut: '',        // Нет соответствия
        DeliveryAmount: 0,        // Нет соответствия
        DeliveryType: 0,          // Нет соответствия
        AdditionalParams: {
            RedeliveryPaymentPayer: 0,    // Нет соответствия
            AdditionalRedeliveryType: 0,  // Нет соответствия
            AdditionalDeliveryInOut: '',  // Нет соответствия
            TypeTrays: 0,                 // Нет соответствия
            TrayPlaces: '',               // Нет соответствия
            FlourCount: '',               // Нет соответствия
            Elevator: 0,                  // Нет соответствия
            HandToHand: 0,                // Нет соответствия
            DeliveryInSaturday: 0,        // Нет соответствия
            PreferredDeliveryDate: '',    // Нет соответствия
            DeliveryInCertainTime: '',    // Нет соответствия
            SameDayDelivery: 0,           // Нет соответствия
            IsTakeAttorney: 0,            // Нет соответствия
            UserActions: '',              // Нет соответствия
            PartialReturn: 0,             // Нет соответствия
            ForwardingCount: 0,           // Нет соответствия
            AccompanyingDocuments: ''     // Нет соответствия
        },
        OrderType: 0,             // Нет соответствия
        AdditionalInfo2: '',      // Нет соответствия
        AdditionalInfo3: '',      // Нет соответствия
        AdditionalInfo4: '',      // Нет соответствия
        AdditionalInfo5: '',      // Нет соответствия
        AdditionalInfo6: '',      // Нет соответствия
        DeliveryPlanDate: '',     // Нет соответствия
        TTNOrganization: '',      // Нет соответствия
        PreferredDeliveryDate: '',// Нет соответствия
        PayerEDRPOU: '',         // Нет соответствия
        WaybilRef: '',           // Нет соответствия
        AccompanyingDocuments: '', // Нет соответствия
        Consolidation: 0,        // Нет соответствия
        DocumentList: { Document: [] }, // Нет соответствия
        ConsolidationDetails: {
            ConsolidationNumber: '',
            ConsolidationSeat: 0,
            ConsolidationAmount: 0
        },
        CargoType: '',           // Нет соответствия
        ExpressPallet: 0,        // Нет соответствия
        ForwardingCount: '',     // Нет соответствия
        PrintVersion: '',        // Нет соответствия
        Discount: parseFloat(shopifyOrder.total_discounts) || 0,
        AdditionalInfo7: '',     // Нет соответствия
        AdditionalInfo8: '',     // Нет соответствия
        AdditionalInfo9: '',     // Нет соответствия
        AdditionalInfo10: '',    // Нет соответствия
        FinancialInstitution: '', // Нет соответствия
        AfterpaymentOnGoodsCostInfo: {
            AfterpaymentOnGoodsCostInfoItem: '',
            Summ: 0,
            AccountNumber: '',
            Invoice: ''
        },
        AwisAPIKey: '',          // Нет соответствия
        WaybilNumber: '',        // Нет соответствия
        CrossDocking: false,     // Нет соответствия
        BackwardDeliveryPhone: '', // Нет соответствия
        TimeInterval: '',        // Нет соответствия
        ExistAccompDocuments: false, // Нет соответствия
        Priority: 0,             // Нет соответствия
        ServiceID: '',           // Нет соответствия
        IOSS: '',               // Нет соответствия
        CompletingAdvertisingMaterials: false, // Нет соответствия
        AdditionalPackaging: false // Нет соответствия
    };

    // Маппинг элементов заказа (line_items) в NP Items
    const items = (shopifyOrder.line_items || []).map(item => ({
        Sku: item.sku || '',
        GoodName: item.name || '',
        Qty: item.quantity ? item.quantity.toString() : '0',
        Price: item.price || '0',
        Sum: (item.price && item.quantity
            ? (parseFloat(item.price) * item.quantity).toFixed(2)
            : '0'),
        MeasureUnit: '',  // Нет соответствия
        BarCode: '',      // Нет соответствия
        Series: '',       // Нет соответствия
        ExpirationDate: '', // Нет соответствия
        Marketing: '',    // Нет соответствия
        Owner: '',        // Нет соответствия
        Quality: '',      // Нет соответствия
        LineAmount: '',   // Нет соответствия
        AccountNum: '',   // Нет соответствия
        SpecialCondition: '', // Нет соответствия
        LineAmountTax: '',    // Нет соответствия
        BatchId: '',          // Нет соответствия
        PalletId: '',         // Нет соответствия
        BarCodes: { item: [] },
        Serials: { Serial: [] }
    }));

    return {
        Organization: config.novapost.xml[config.nodeEnv].organization, // Значение организации – должно быть установлено в рамках логики приложения
        Orders: {
            MessageOrders: [
                {
                    HeadOrder: headOrder,
                    Items: { Item: items },
                    Attaches: { Attach: [] },
                    Invoice: {
                        InvoiceNumber: '',
                        InvoiceDate: '',
                        CurrencyCode: shopifyOrder.currency || '',
                        Incoterm: '',
                        ExportReason: '',
                        Customs: '',
                        Items: { Item: [] }
                    }
                }
            ]
        }
    };
}

/**
 * Преобразует ответ от Nova Почты (NP) по заказу в формат обновления/информации для Shopify.
 *
 * @param {Object} npResponse - Ответ NP, например, результат вызова CreateUpdateOrders.
 * @returns {Object} Объект для обновления заказа в Shopify (или для логирования).
 * @throws {Error} Если формат npResponse некорректный.
 *
 * @example
 * try {
 *   const shopifyUpdate = mapNPOrderToShopify(npResponse);
 *   // например, обновить заказ в Shopify с помощью shopifyUpdate
 * } catch (err) {
 *   console.error('Ошибка маппинга NP->Shopify', err);
 * }
 */
function mapNPOrderToShopify(npResponse) {
    if (!npResponse || !npResponse.MessageOrdersER || !Array.isArray(npResponse.MessageOrdersER)) {
        throw new Error('Invalid NP order response format');
    }

    // В данном примере мы обрабатываем только первый объект ответа
    const npOrder = npResponse.MessageOrdersER[0];

    return {
        id: npOrder.GUID || '',
        order_number: npOrder.ExternalNumber || '',
        waybill_number: npOrder.WaybilNumber || '',
        errors: npOrder.Errors || {},
        info: npOrder.Info || {}
        // Дополнительные поля можно добавить по необходимости
    };
}

module.exports = {
    mapShopifyOrderToNP,
    mapNPOrderToShopify,
    UNMAPPED_FIELDS
};
