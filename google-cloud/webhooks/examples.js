const productsCreate = {
  "admin_graphql_api_id": "gid://shopify/Product/788032119674292922",
  "body_html": "An example T-Shirt",
  "created_at": null,
  "handle": "example-t-shirt",
  "id": 788032119674292922,
  "product_type": "Shirts",
  "published_at": "2021-12-31T19:00:00-05:00",
  "template_suffix": null,
  "title": "Example T-Shirt",
  "updated_at": "2021-12-31T19:00:00-05:00",
  "vendor": "Acme",
  "status": "active",
  "published_scope": "web",
  "tags": "example, mens, t-shirt",
  "variants": [
    {
      "admin_graphql_api_id": "gid://shopify/ProductVariant/642667041472713922",
      "barcode": null,
      "compare_at_price": "24.99",
      "created_at": "2021-12-29T19:00:00-05:00",
      "id": 642667041472713922,
      "inventory_policy": "deny",
      "position": 1,
      "price": "19.99",
      "product_id": 788032119674292922,
      "sku": null,
      "taxable": true,
      "title": "Small",
      "updated_at": "2021-12-30T19:00:00-05:00",
      "option1": "Small",
      "option2": null,
      "option3": null,
      "image_id": null,
      "inventory_item_id": null,
      "inventory_quantity": 75,
      "old_inventory_quantity": 75
    },
    {
      "admin_graphql_api_id": "gid://shopify/ProductVariant/757650484644203962",
      "barcode": null,
      "compare_at_price": "24.99",
      "created_at": "2021-12-29T19:00:00-05:00",
      "id": 757650484644203962,
      "inventory_policy": "deny",
      "position": 2,
      "price": "19.99",
      "product_id": 788032119674292922,
      "sku": null,
      "taxable": true,
      "title": "Medium",
      "updated_at": "2021-12-31T19:00:00-05:00",
      "option1": "Medium",
      "option2": null,
      "option3": null,
      "image_id": null,
      "inventory_item_id": null,
      "inventory_quantity": 50,
      "old_inventory_quantity": 50
    }
  ],
  "options": [],
  "images": [],
  "image": null,
  "media": [],
  "variant_gids": [
    {
      "admin_graphql_api_id": "gid://shopify/ProductVariant/757650484644203962",
      "updated_at": "2022-01-01T00:00:00.000Z"
    },
    {
      "admin_graphql_api_id": "gid://shopify/ProductVariant/642667041472713922",
      "updated_at": "2021-12-31T00:00:00.000Z"
    }
  ],
  "has_variants_that_requires_components": false,
  "category": null
}

const productsDelete = {
  "id": 788032119674292922
}

const ordersCreate_PrepaymentWarehouse = {
  id: 6004604174410,
  admin_graphql_api_id: 'gid://shopify/Order/6004604174410',
  app_id: 580111,
  browser_ip: '31.148.20.77',
  buyer_accepts_marketing: true,
  cancel_reason: null,
  cancelled_at: null,
  cart_token: 'Z2NwLXVzLWVhc3QxOjAxSks5MkVKMFBDWUZaWkZYNzFDVFZESkJB',
  checkout_id: 42746765574218,
  checkout_token: '6a7f9943815c1867d7f3532590e5597e',
  client_details: {
    accept_language: 'uk-UA',
    browser_height: null,
    browser_ip: '31.148.20.77',
    browser_width: null,
    session_hash: null,
    user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36'
  },
  closed_at: null,
  confirmation_number: 'TEDILJ8AD',
  confirmed: true,
  contact_email: 'anclemarvel@gmail.com',
  created_at: '2025-02-04T19:09:48+01:00',
  currency: 'UAH',
  current_shipping_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  current_subtotal_price: '0.00',
  current_subtotal_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  current_total_additional_fees_set: null,
  current_total_discounts: '599.00',
  current_total_discounts_set: {
    shop_money: { amount: '599.00', currency_code: 'UAH' },
    presentment_money: { amount: '599.00', currency_code: 'UAH' }
  },
  current_total_duties_set: null,
  current_total_price: '0.00',
  current_total_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  current_total_tax: '0.00',
  current_total_tax_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  customer_locale: 'uk-UA',
  device_id: null,
  discount_codes: [{ code: 'free_n', amount: '599.00', type: 'percentage' }],
  duties_included: false,
  email: 'anclemarvel@gmail.com',
  estimated_taxes: false,
  financial_status: 'paid',
  fulfillment_status: null,
  landing_site: '/?key=677ae8b1cdcce0e5dede3aceeb5091f1fda67a290cbd28131ddccf529ff7fada',
  landing_site_ref: null,
  location_id: null,
  merchant_business_entity_id: 'MTYxNzM4ODExNDY2',
  merchant_of_record_app_id: null,
  name: '#1019',
  note: '{"phone":"+380993350918","street":"","house":"","flat":"","selectedPostoffice":"{\\"selectedPostoffice\\":{\\"SiteKey\\":\\"726\\",\\"Description\\":\\"Відділення №10 (до 10 кг): вул. Левицького, 7\\",\\"DescriptionRu\\":\\"Отделение №10 (до 5 кг): ул. Левицкого, 7\\",\\"ShortAddress\\":\\"Львів, Левицького, 7\\",\\"ShortAddressRu\\":\\"Львов, Левицкого, 7\\",\\"Phone\\":\\"380800500609\\",\\"TypeOfWarehouse\\":\\"841339c7-591a-42e2-8233-7a0a00f0ed6f\\",\\"Ref\\":\\"5a39e5b1-e1c2-11e3-8c4a-0050568002cf\\",\\"Number\\":\\"10\\",\\"CityRef\\":\\"db5c88f5-391c-11dd-90d9-001a92567626\\",\\"CityDescription\\":\\"Львів\\",\\"CityDescriptionRu\\":\\"Львов\\",\\"SettlementRef\\":\\"e71abb60-4b33-11e4-ab6d-005056801329\\",\\"SettlementDescription\\":\\"Львів\\",\\"SettlementAreaDescription\\":\\"Львівська\\",\\"SettlementRegionsDescription\\":\\"\\",\\"SettlementTypeDescription\\":\\"місто\\",\\"SettlementTypeDescriptionRu\\":\\"город\\",\\"Longitude\\":\\"24.036123000000000\\",\\"Latitude\\":\\"49.836238000000000\\",\\"PostFinance\\":\\"0\\",\\"BicycleParking\\":\\"0\\",\\"PaymentAccess\\":\\"0\\",\\"POSTerminal\\":\\"1\\",\\"InternationalShipping\\":\\"1\\",\\"SelfServiceWorkplacesCount\\":\\"1\\",\\"TotalMaxWeightAllowed\\":\\"10\\",\\"PlaceMaxWeightAllowed\\":\\"0\\",\\"SendingLimitationsOnDimensions\\":{\\"Width\\":60,\\"Height\\":60,\\"Length\\":60},\\"ReceivingLimitationsOnDimensions\\":{\\"Width\\":60,\\"Height\\":60,\\"Length\\":60},\\"Reception\\":{\\"Monday\\":\\"08:00-21:00\\",\\"Tuesday\\":\\"08:00-21:00\\",\\"Wednesday\\":\\"08:00-21:00\\",\\"Thursday\\":\\"08:00-21:00\\",\\"Friday\\":\\"08:00-21:00\\",\\"Saturday\\":\\"09:00-19:00\\",\\"Sunday\\":\\"09:00-19:00\\"},\\"Delivery\\":{\\"Monday\\":\\"08:00-20:00\\",\\"Tuesday\\":\\"08:00-20:00\\",\\"Wednesday\\":\\"08:00-20:00\\",\\"Thursday\\":\\"08:00-20:00\\",\\"Friday\\":\\"08:00-20:00\\",\\"Saturday\\":\\"09:00-19:00\\",\\"Sunday\\":\\"09:00-19:00\\"},\\"Schedule\\":{\\"Monday\\":\\"08:00-21:00\\",\\"Tuesday\\":\\"08:00-21:00\\",\\"Wednesday\\":\\"08:00-21:00\\",\\"Thursday\\":\\"08:00-21:00\\",\\"Friday\\":\\"08:00-21:00\\",\\"Saturday\\":\\"09:00-19:00\\",\\"Sunday\\":\\"09:00-19:00\\"},\\"DistrictCode\\":\\"Д4/В10\\",\\"WarehouseStatus\\":\\"Working\\",\\"WarehouseStatusDate\\":\\"2024-04-22 00:00:00\\",\\"WarehouseIllusha\\":\\"0\\",\\"CategoryOfWarehouse\\":\\"Branch\\",\\"Direct\\":\\"\\",\\"RegionCity\\":\\"ЛЬВІВ ПОСИЛКОВИЙ\\",\\"WarehouseForAgent\\":\\"0\\",\\"GeneratorEnabled\\":\\"1\\",\\"MaxDeclaredCost\\":\\"0\\",\\"WorkInMobileAwis\\":\\"0\\",\\"DenyToSelect\\":\\"0\\",\\"CanGetMoneyTransfer\\":\\"0\\",\\"HasMirror\\":\\"1\\",\\"HasFittingRoom\\":\\"0\\",\\"OnlyReceivingParcel\\":\\"0\\",\\"PostMachineType\\":\\"\\",\\"PostalCodeUA\\":\\"79000\\",\\"WarehouseIndex\\":\\"74/10\\",\\"BeaconCode\\":\\"\\",\\"Location\\":\\"\\"}}"}',
  note_attributes: [],
  number: 19,
  order_number: 1019,
  order_status_url: 'https://petschoice.club/61738811466/orders/3f2846cd4a6dd8f78b71000bceee92cf/authenticate?key=0f57998a440b2269141ad3929b778918',
  original_total_additional_fees_set: null,
  original_total_duties_set: null,
  payment_gateway_names: [],
  phone: null,
  po_number: null,
  presentment_currency: 'UAH',
  processed_at: '2025-02-04T19:09:47+01:00',
  reference: null,
  referring_site: '',
  source_identifier: null,
  source_name: 'web',
  source_url: null,
  subtotal_price: '0.00',
  subtotal_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  tags: '',
  tax_exempt: false,
  tax_lines: [],
  taxes_included: true,
  test: false,
  token: '3f2846cd4a6dd8f78b71000bceee92cf',
  total_cash_rounding_payment_adjustment_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  total_cash_rounding_refund_adjustment_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  total_discounts: '599.00',
  total_discounts_set: {
    shop_money: { amount: '599.00', currency_code: 'UAH' },
    presentment_money: { amount: '599.00', currency_code: 'UAH' }
  },
  total_line_items_price: '599.00',
  total_line_items_price_set: {
    shop_money: { amount: '599.00', currency_code: 'UAH' },
    presentment_money: { amount: '599.00', currency_code: 'UAH' }
  },
  total_outstanding: '0.00',
  total_price: '0.00',
  total_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  total_shipping_price_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  total_tax: '0.00',
  total_tax_set: {
    shop_money: { amount: '0.00', currency_code: 'UAH' },
    presentment_money: { amount: '0.00', currency_code: 'UAH' }
  },
  total_tip_received: '0.00',
  total_weight: 350,
  updated_at: '2025-02-04T19:09:49+01:00',
  user_id: null,
  billing_address: {
    first_name: 'Нікіта',
    address1: 'Відділення №10 (до 10 кг): вул. Левицького, 7',
    phone: '+380993350918',
    city: 'Львів',
    zip: '79000',
    province: null,
    country: 'Ukraine',
    last_name: 'Шевченко',
    address2: null,
    company: null,
    latitude: 49.836259,
    longitude: 24.0361659,
    name: 'Нікіта Шевченко',
    country_code: 'UA',
    province_code: null
  },
  customer: {
    id: 8094839668810,
    email: 'anclemarvel@gmail.com',
    created_at: '2025-01-16T19:47:17+01:00',
    updated_at: '2025-02-04T19:09:48+01:00',
    first_name: 'Mykyta',
    last_name: 'Shevchenko',
    state: 'enabled',
    note: null,
    verified_email: false,
    multipass_identifier: null,
    tax_exempt: false,
    phone: null,
    currency: 'UAH',
    tax_exemptions: [],
    admin_graphql_api_id: 'gid://shopify/Customer/8094839668810',
    default_address: {
      id: 9355337203786,
      customer_id: 8094839668810,
      first_name: 'Нікіта',
      last_name: 'Шевченко',
      company: null,
      address1: 'Відділення №10 (до 10 кг): вул. Левицького, 7',
      address2: null,
      city: 'Львів',
      province: null,
      country: 'Ukraine',
      zip: '79000',
      phone: '+380993350918',
      name: 'Нікіта Шевченко',
      province_code: null,
      country_code: 'UA',
      country_name: 'Ukraine',
      default: true
    }
  },
  discount_applications: [
    {
      target_type: 'line_item',
      type: 'discount_code',
      value: '100.0',
      value_type: 'percentage',
      allocation_method: 'across',
      target_selection: 'all',
      code: 'free_n'
    }
  ],
  fulfillments: [],
  line_items: [
    {
      id: 14851429007434,
      admin_graphql_api_id: 'gid://shopify/LineItem/14851429007434',
      attributed_staffs: [],
      current_quantity: 1,
      fulfillable_quantity: 1,
      fulfillment_service: 'manual',
      fulfillment_status: null,
      gift_card: false,
      grams: 350,
      name: 'Шампунь для собак - 350 мл / Ваніль-Кокос',
      price: '399.00',
      price_set: [Object],
      product_exists: true,
      product_id: 7870931927114,
      properties: [],
      quantity: 1,
      requires_shipping: true,
      sales_line_item_group_id: null,
      sku: '5905884494769',
      taxable: false,
      title: 'Шампунь для собак',
      total_discount: '0.00',
      total_discount_set: [Object],
      variant_id: 41864347942986,
      variant_inventory_management: 'shopify',
      variant_title: '350 мл / Ваніль-Кокос',
      vendor: 'Pets Choice Club',
      tax_lines: [Array],
      duties: [],
      discount_allocations: [Array]
    },
    {
      id: 14851429040202,
      admin_graphql_api_id: 'gid://shopify/LineItem/14851429040202',
      attributed_staffs: [],
      current_quantity: 1,
      fulfillable_quantity: 1,
      fulfillment_service: 'manual',
      fulfillment_status: null,
      gift_card: false,
      grams: 0,
      name: 'Предоплата',
      price: '200.00',
      price_set: [Object],
      product_exists: true,
      product_id: 7883238932554,
      properties: [],
      quantity: 1,
      requires_shipping: false,
      sales_line_item_group_id: null,
      sku: '',
      taxable: false,
      title: 'Предоплата',
      total_discount: '0.00',
      total_discount_set: [Object],
      variant_id: 41899282661450,
      variant_inventory_management: null,
      variant_title: null,
      vendor: 'Petschoice club',
      tax_lines: [Array],
      duties: [],
      discount_allocations: [Array]
    }
  ],
  payment_terms: null,
  refunds: [],
  shipping_address: {
    first_name: 'Нікіта',
    address1: 'Відділення №10 (до 10 кг): вул. Левицького, 7',
    phone: '+380993350918',
    city: 'Львів',
    zip: '79000',
    province: null,
    country: 'Ukraine',
    last_name: 'Шевченко',
    address2: null,
    company: null,
    latitude: null,
    longitude: null,
    name: 'Нікіта Шевченко',
    country_code: 'UA',
    province_code: null
  },
  shipping_lines: [
    {
      id: 5074147803210,
      carrier_identifier: null,
      code: 'Standard',
      current_discounted_price_set: [Object],
      discounted_price: '0.00',
      discounted_price_set: [Object],
      is_removed: false,
      phone: null,
      price: '0.00',
      price_set: [Object],
      requested_fulfillment_service_id: null,
      source: 'shopify',
      title: 'Standard',
      tax_lines: [],
      discount_allocations: []
    }
  ],
  returns: []
}

const ordersCancelled = {
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
  "note": null,
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

module.exports = {
  productsCreate,
  productsDelete,
  ordersCreate_PrepaymentWarehouse,
  ordersCancelled
}