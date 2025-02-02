const config = require('../config');

const ordersCreate = {
    "id": 820982911946154508,
    "admin_graphql_api_id": "gid://shopify/Order/820982911946154508",
    "app_id": null,
    "browser_ip": null,
    "buyer_accepts_marketing": true,
    "cancel_reason": "customer",
    "cancelled_at": "2021-12-31T19:00:00-05:00",
    "cart_token": null,
    "checkout_id": null,
    "checkout_token": null,
    "client_details": null,
    "closed_at": null,
    "confirmation_number": null,
    "confirmed": false,
    "contact_email": "jon@example.com",
    "created_at": "2021-12-31T19:00:00-05:00",
    "currency": "USD",
    "current_shipping_price_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "current_subtotal_price": "398.00",
    "current_subtotal_price_set": {
        "shop_money": {
            "amount": "398.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "398.00",
            "currency_code": "USD"
        }
    },
    "current_total_additional_fees_set": null,
    "current_total_discounts": "0.00",
    "current_total_discounts_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "current_total_duties_set": null,
    "current_total_price": "398.00",
    "current_total_price_set": {
        "shop_money": {
            "amount": "398.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "398.00",
            "currency_code": "USD"
        }
    },
    "current_total_tax": "0.00",
    "current_total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "customer_locale": "en",
    "device_id": null,
    "discount_codes": [],
    "duties_included": false,
    "email": "jon@example.com",
    "estimated_taxes": false,
    "financial_status": "voided",
    "fulfillment_status": null,
    "landing_site": null,
    "landing_site_ref": null,
    "location_id": null,
    "merchant_business_entity_id": "MTU0ODM4MDAwOQ",
    "merchant_of_record_app_id": null,
    "name": "#9999",
    "note": JSON.stringify({
        "zip": "79018",
        "address": "Відділення №1: вул. Городоцька, 359",
        "city": "Львів",
        "firstName": "Нікіта",
        "lastName": "Шевченко",
        "surname": "Олександрович",
        "email": "anclemarvel@gmail.com",
        "phone": "+380993350918",
        "shipping-type": "post-office",
        "settlement-search": "Обрано: Львів, Львівська",
        "settlement-selection": "e71abb60-4b33-11e4-ab6d-005056801329",
        "search-post-office": "Обрано: Відділення №1: вул. Городоцька, 359",
        "post-office": "1ec09d2e-e1c2-11e3-8c4a-0050568002cf",
        "courier-settlement-search": "",
        "street": "",
        "house": "",
        "flat": "",
        "postal-code": "50055",
        "country": "Ukraine",
        "variantsWithQty": {
            "41864347877450": 2
        }
    }),
    "note_attributes": [],
    "number": 234,
    "order_number": 1234,
    "order_status_url": "https://jsmith.myshopify.com/548380009/orders/123456abcd/authenticate?key=abcdefg",
    "original_total_additional_fees_set": null,
    "original_total_duties_set": null,
    "payment_gateway_names": [
        "visa",
        "bogus"
    ],
    "phone": null,
    "po_number": null,
    "presentment_currency": "USD",
    "processed_at": "2021-12-31T19:00:00-05:00",
    "reference": null,
    "referring_site": null,
    "source_identifier": null,
    "source_name": "web",
    "source_url": null,
    "subtotal_price": "388.00",
    "subtotal_price_set": {
        "shop_money": {
            "amount": "388.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "388.00",
            "currency_code": "USD"
        }
    },
    "tags": "tag1, tag2",
    "tax_exempt": false,
    "tax_lines": [],
    "taxes_included": false,
    "test": true,
    "token": "123456abcd",
    "total_cash_rounding_payment_adjustment_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "total_cash_rounding_refund_adjustment_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "total_discounts": "20.00",
    "total_discounts_set": {
        "shop_money": {
            "amount": "20.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "20.00",
            "currency_code": "USD"
        }
    },
    "total_line_items_price": "398.00",
    "total_line_items_price_set": {
        "shop_money": {
            "amount": "398.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "398.00",
            "currency_code": "USD"
        }
    },
    "total_outstanding": "398.00",
    "total_price": "388.00",
    "total_price_set": {
        "shop_money": {
            "amount": "388.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "388.00",
            "currency_code": "USD"
        }
    },
    "total_shipping_price_set": {
        "shop_money": {
            "amount": "10.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "10.00",
            "currency_code": "USD"
        }
    },
    "total_tax": "0.00",
    "total_tax_set": {
        "shop_money": {
            "amount": "0.00",
            "currency_code": "USD"
        },
        "presentment_money": {
            "amount": "0.00",
            "currency_code": "USD"
        }
    },
    "total_tip_received": "0.00",
    "total_weight": 0,
    "updated_at": "2021-12-31T19:00:00-05:00",
    "user_id": null,
    "billing_address": {
        "first_name": "Steve",
        "address1": "123 Shipping Street",
        "phone": "555-555-SHIP",
        "city": "Shippington",
        "zip": "40003",
        "province": "Kentucky",
        "country": "United States",
        "last_name": "Shipper",
        "address2": null,
        "company": "Shipping Company",
        "latitude": null,
        "longitude": null,
        "name": "Steve Shipper",
        "country_code": "US",
        "province_code": "KY"
    },
    "customer": {
        "id": 115310627314723954,
        "email": "john@example.com",
        "created_at": null,
        "updated_at": null,
        "first_name": "John",
        "last_name": "Smith",
        "state": "disabled",
        "note": null,
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "currency": "USD",
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/115310627314723954",
        "default_address": {
            "id": 715243470612851245,
            "customer_id": 115310627314723954,
            "first_name": null,
            "last_name": null,
            "company": null,
            "address1": "123 Elm St.",
            "address2": null,
            "city": "Ottawa",
            "province": "Ontario",
            "country": "Canada",
            "zip": "K2H7A8",
            "phone": "123-123-1234",
            "name": "",
            "province_code": "ON",
            "country_code": "CA",
            "country_name": "Canada",
            "default": true
        }
    },
    "discount_applications": [],
    "fulfillments": [],
    "line_items": [
        {
            "id": 866550311766439020,
            "admin_graphql_api_id": "gid://shopify/LineItem/866550311766439020",
            "attributed_staffs": [
                {
                    "id": "gid://shopify/StaffMember/902541635",
                    "quantity": 1
                }
            ],
            "current_quantity": 1,
            "fulfillable_quantity": 1,
            "fulfillment_service": "manual",
            "fulfillment_status": null,
            "gift_card": false,
            "grams": 567,
            "name": "IPod Nano - 8GB",
            "price": "199.00",
            "price_set": {
                "shop_money": {
                    "amount": "199.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "199.00",
                    "currency_code": "USD"
                }
            },
            "product_exists": true,
            "product_id": 632910392,
            "properties": [],
            "quantity": 1,
            "requires_shipping": true,
            "sales_line_item_group_id": null,
            "sku": "IPOD2008PINK",
            "taxable": true,
            "title": "IPod Nano - 8GB",
            "total_discount": "0.00",
            "total_discount_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                }
            },
            "variant_id": 808950810,
            "variant_inventory_management": "shopify",
            "variant_title": null,
            "vendor": null,
            "tax_lines": [],
            "duties": [],
            "discount_allocations": []
        },
        {
            "id": 141249953214522974,
            "admin_graphql_api_id": "gid://shopify/LineItem/141249953214522974",
            "attributed_staffs": [],
            "current_quantity": 1,
            "fulfillable_quantity": 1,
            "fulfillment_service": "manual",
            "fulfillment_status": null,
            "gift_card": false,
            "grams": 567,
            "name": "IPod Nano - 8GB",
            "price": "199.00",
            "price_set": {
                "shop_money": {
                    "amount": "199.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "199.00",
                    "currency_code": "USD"
                }
            },
            "product_exists": true,
            "product_id": 632910392,
            "properties": [],
            "quantity": 1,
            "requires_shipping": true,
            "sales_line_item_group_id": null,
            "sku": "IPOD2008PINK",
            "taxable": true,
            "title": "IPod Nano - 8GB",
            "total_discount": "0.00",
            "total_discount_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                }
            },
            "variant_id": 808950810,
            "variant_inventory_management": "shopify",
            "variant_title": null,
            "vendor": null,
            "tax_lines": [],
            "duties": [],
            "discount_allocations": []
        }
    ],
    "payment_terms": null,
    "refunds": [],
    "shipping_address": {
        "first_name": "Steve",
        "address1": "123 Shipping Street",
        "phone": "555-555-SHIP",
        "city": "Shippington",
        "zip": "40003",
        "province": "Kentucky",
        "country": "United States",
        "last_name": "Shipper",
        "address2": null,
        "company": "Shipping Company",
        "latitude": null,
        "longitude": null,
        "name": "Steve Shipper",
        "country_code": "US",
        "province_code": "KY"
    },
    "shipping_lines": [
        {
            "id": 271878346596884015,
            "carrier_identifier": null,
            "code": null,
            "current_discounted_price_set": {
                "shop_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "0.00",
                    "currency_code": "USD"
                }
            },
            "discounted_price": "10.00",
            "discounted_price_set": {
                "shop_money": {
                    "amount": "10.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "10.00",
                    "currency_code": "USD"
                }
            },
            "is_removed": false,
            "phone": null,
            "price": "10.00",
            "price_set": {
                "shop_money": {
                    "amount": "10.00",
                    "currency_code": "USD"
                },
                "presentment_money": {
                    "amount": "10.00",
                    "currency_code": "USD"
                }
            },
            "requested_fulfillment_service_id": null,
            "source": "shopify",
            "title": "Generic Shipping",
            "tax_lines": [],
            "discount_allocations": []
        }
    ],
    "returns": []
}

/**
 * Преобразует заказ из Shopify в формат, необходимый для создания/обновления заказа (CreateUpdateOrders)
 * в Nova Poshta.
 * 
 * Функция использует стандартные поля заказа Shopify и NP-специфичные данные, сохранённые в order.note.
 * В зависимости от типа доставки (адресная доставка курьером или доставка на отделение NP)
 * маппинг формируется соответственно.
 * 
 * Если обнаруживается, что в заказе присутствует товар предоплаты (prepaymentVariantId),
 * предполагается, что пользователь оплатил фиксированную сумму (200 грн) предоплаты.
 * Тогда для расчёта оставшейся суммы (Cost) суммируются оригинальные цены всех остальных товаров,
 * после чего из общей суммы вычитается 200 грн.
 * Если предоплаты нет – итоговая сумма равна "0.00".
 *
 * @param {Object} shopifyOrder - Объект заказа из Shopify (webhook payload).
 * @returns {Object} Объект, соответствующий структуре для метода CreateUpdateOrders API Nova Poshta.
 */
function mapShopifyOrderToNPFulfillment(shopifyOrder) {
    console.log('RUN mapShopifyOrderToNPFulfillment...');
    console.log('✌️shopifyOrder --->', JSON.stringify(shopifyOrder, null, 2));
    // Извлекаем NP-специфичные данные из order.note.
    let npNote = {};
    if (shopifyOrder.note) {
        if (typeof shopifyOrder.note === 'string') {
            try {
                npNote = JSON.parse(shopifyOrder.note);
            } catch (e) {
                console.error('Ошибка парсинга order.note как JSON:', e);
            }
        } else if (typeof shopifyOrder.note === 'object') {
            npNote = shopifyOrder.note;
        }
    }

    // Определяем тип доставки (по умолчанию courier).
    const shippingType = npNote['shipping-type'] || 'courier';
    const isPostOffice = shippingType === 'post-office';

    // Формируем идентификаторы заказа.
    const externalNumber = shopifyOrder.name ? shopifyOrder.name.replace(/^#/, '') : shopifyOrder.name;
    const guid = shopifyOrder.id ? shopifyOrder.id.toString() : shopifyOrder.id;
    const externalDate = shopifyOrder.created_at || '';

    // Для доставки на отделение NP передаём ref отделения из NP note.
    const destWarehouse = isPostOffice ? (npNote["post-office"] || "") : "";

    // Формируем блок Adress.
    let adress = {};
    if (isPostOffice) {
        adress = {
            Region: "",
            City: npNote.city || "",
            Street: "",
            House: "",
            Flat: "",
            Phone: npNote.phone || "",
            NPWarehouse: 1,
            District: "",
            ZipCode: npNote.zip || "",
            CountryCode: npNote.country || "",
            PostCode: npNote["postal-code"] || "",
            Email: npNote.email || ""
        };
    } else {
        adress = {
            Region: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.province : "",
            City: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.city : "",
            Street: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.address1 : "",
            House: npNote.house || "",
            Flat: npNote.flat || (shopifyOrder.shipping_address ? shopifyOrder.shipping_address.address2 || "" : ""),
            Phone: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.phone : "",
            NPWarehouse: 0,
            District: "",
            ZipCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.zip : "",
            CountryCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.country_code : "",
            PostCode: shopifyOrder.shipping_address ? shopifyOrder.shipping_address.zip : "",
            Email: shopifyOrder.email || ""
        };
    }

    // Фиксированные параметры оплаты: 1 — наличный расчет, payer – получатель.
    const payType = 1;
    const payer = 1;

    // Формируем данные контактного лица (Contactor).
    const rcptName = [npNote.firstName, npNote.lastName, npNote.surname].filter(Boolean).join(" ");
    const rcptContact = npNote.phone || "";
    const recipientType = "PrivatePerson";
    const recipientEDRPOU = "";

    // Описание заказа.
    const description = isPostOffice
        ? "Доставка через відділення Нової Пошти"
        : "Адресна доставка кур'єром";

    // --- Удаляем линию предоплаты из заказа (если она присутствует) ---
    const prepaymentVariantId = 41899282661450;
    const indexOfPrepaymentLine = shopifyOrder.line_items.findIndex(item => item.variant_id === prepaymentVariantId);
    if (indexOfPrepaymentLine !== -1) {
        shopifyOrder.line_items = shopifyOrder.line_items.filter((_, index) => index !== indexOfPrepaymentLine);
    }

    /**
     * Сумма, которую необходимо собрать от юзера при получении посылки (Cost).
     * Если indexOfPrepaymentLine >= 0, тогда предполагается, что пользователь заплатил уже 200 грн предоплаты,
     * и на все продукты, кроме prepaymentVariantId, была применена скидка 100%.
     * В этом случае необходимо взять стоимость товаров без скидки (используя поле original_price, если оно присутствует)
     * и вычесть из общей суммы фиксированную сумму предоплаты (200 грн).
     * Если итоговая сумма меньше или равна 200 грн, то Cost будет "0.00".
     * Если предоплаты нет – по умолчанию "0.00".
     */
    let cost;
    if (indexOfPrepaymentLine !== -1) {
        let totalOriginal = 0;
        shopifyOrder.line_items.forEach(item => {
            // Используем original_price, если оно есть; иначе, fallback к price.
            const originalPrice = parseFloat(item.original_price || item.price || "0");
            const qty = parseFloat(item.quantity || "0");
            totalOriginal += originalPrice * qty;
        });
        cost = totalOriginal > 200 ? (totalOriginal - 200).toFixed(2) : "0.00";
    } else {
        cost = "0.00";
    }

    // Тип доставки: 0 для доставки на отделение, 1 для курьерской доставки.
    const deliveryType = isPostOffice ? 0 : 1;

    // Дополнительные параметры – передаём сумму наложенного платежа.
    const additionalParams = {
        DeliveryAmount: cost
    };

    // Маппинг позиций заказа.
    const items = (shopifyOrder.line_items || []).map(item => {
        const qty = item.quantity;
        const price = item.price;
        const sum = (parseFloat(price) * qty).toFixed(2);
        return {
            Sku: item.sku || "",
            GoodName: item.name || "",
            Qty: qty.toString(),
            Price: price,
            Sum: sum,
            MeasureUnit: "шт."
        };
    });

    // Формируем итоговый payload для NP.
    const npPayload = {
        Organization: config.novapost.xml[config.nodeEnv].organization,
        Orders: {
            MessageOrders: [
                {
                    HeadOrder: {
                        ExternalNumber: externalNumber,
                        GUID: guid,
                        ExternalDate: externalDate,
                        DestWarehouse: destWarehouse,
                        Adress: adress,
                        PayType: payType,
                        payer: payer,
                        Contactor: {
                            rcptName: rcptName,
                            rcptContact: rcptContact,
                            RecipientType: recipientType,
                            RecipientEDRPOU: recipientEDRPOU
                        },
                        Description: description,
                        Cost: cost,
                        DeliveryType: deliveryType,
                        AdditionalParams: additionalParams
                    },
                    Items: {
                        Item: items
                    }
                }
            ]
        }
    };

    return npPayload;
}

// Пример использования:
// const npPayload = mapShopifyOrderToNPFulfillment(ordersCreate);
// console.log('NP payload:', JSON.stringify(npPayload, null, 2));

module.exports = {
    mapShopifyOrderToNPFulfillment,
}
