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

/*
https://petschoice.club/cart/41864347942986:1?checkout%5Bemail%5D=anclemarvel%40gmail.com&checkout%5Bshipping_address%5D%5Bcity%5D=%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3&checkout%5Bshipping_address%5D%5Bfirst_name%5D=Mykyta&checkout%5Bshipping_address%5D%5Blast_name%5D=Shevchenko&checkout%5Bshipping_address%5D%5Baddress1%5D=%D0%92%D1%96%D0%B4%D0%B4%D1%96%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20%E2%84%9615%20(%D0%B4%D0%BE%2030%20%D0%BA%D0%B3)%3A%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9C%D0%B8%D1%80%D1%83%2C%2029%D0%92&checkout%5Bshipping_address%5D%5Bzip%5D=50069&checkout%5Bshipping_address%5D%5Bcountry%5D=Ukraine&checkout%5Bshipping_address%5D%5Bphone%5D=%2B380993350918&note=%7B%22phone%22%3A%22%2B380993350918%22%2C%22street%22%3A%22%22%2C%22house%22%3A%22%22%2C%22flat%22%3A%22%22%2C%22selectedPostoffice%22%3A%22%7B%5C%22selectedPostoffice%5C%22%3A%7B%5C%22SiteKey%5C%22%3A%5C%22865%5C%22%2C%5C%22Description%5C%22%3A%5C%22%D0%92%D1%96%D0%B4%D0%B4%D1%96%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F%20%E2%84%9615%20(%D0%B4%D0%BE%2030%20%D0%BA%D0%B3)%3A%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9C%D0%B8%D1%80%D1%83%2C%2029%D0%92%5C%22%2C%5C%22DescriptionRu%5C%22%3A%5C%22%D0%9E%D1%82%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%E2%84%9615%20(%D0%B4%D0%BE%2030%20%D0%BA%D0%B3)%3A%20%D0%BF%D1%80%D0%BE%D1%81%D0%BF.%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2029%D0%92%5C%22%2C%5C%22ShortAddress%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%2C%20%D0%9C%D0%B8%D1%80%D1%83%2C%2029%D0%92%5C%22%2C%5C%22ShortAddressRu%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D0%B9%20%D0%A0%D0%BE%D0%B3%2C%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2029%D0%92%5C%22%2C%5C%22Phone%5C%22%3A%5C%22380800500609%5C%22%2C%5C%22TypeOfWarehouse%5C%22%3A%5C%22841339c7-591a-42e2-8233-7a0a00f0ed6f%5C%22%2C%5C%22Ref%5C%22%3A%5C%22336de184-e1c2-11e3-8c4a-0050568002cf%5C%22%2C%5C%22Number%5C%22%3A%5C%2215%5C%22%2C%5C%22CityRef%5C%22%3A%5C%22db5c890d-391c-11dd-90d9-001a92567626%5C%22%2C%5C%22CityDescription%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%5C%22%2C%5C%22CityDescriptionRu%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D0%B9%20%D0%A0%D0%BE%D0%B3%5C%22%2C%5C%22SettlementRef%5C%22%3A%5C%22e71a2cab-4b33-11e4-ab6d-005056801329%5C%22%2C%5C%22SettlementDescription%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%B8%D0%B9%20%D0%A0%D1%96%D0%B3%5C%22%2C%5C%22SettlementAreaDescription%5C%22%3A%5C%22%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%5C%22%2C%5C%22SettlementRegionsDescription%5C%22%3A%5C%22%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D1%80%D1%96%D0%B7%D1%8C%D0%BA%D0%B8%D0%B9%5C%22%2C%5C%22SettlementTypeDescription%5C%22%3A%5C%22%D0%BC%D1%96%D1%81%D1%82%D0%BE%5C%22%2C%5C%22SettlementTypeDescriptionRu%5C%22%3A%5C%22%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%5C%22%2C%5C%22Longitude%5C%22%3A%5C%2233.385431000000000%5C%22%2C%5C%22Latitude%5C%22%3A%5C%2247.908275000000000%5C%22%2C%5C%22PostFinance%5C%22%3A%5C%220%5C%22%2C%5C%22BicycleParking%5C%22%3A%5C%221%5C%22%2C%5C%22PaymentAccess%5C%22%3A%5C%220%5C%22%2C%5C%22POSTerminal%5C%22%3A%5C%221%5C%22%2C%5C%22InternationalShipping%5C%22%3A%5C%221%5C%22%2C%5C%22SelfServiceWorkplacesCount%5C%22%3A%5C%221%5C%22%2C%5C%22TotalMaxWeightAllowed%5C%22%3A%5C%2230%5C%22%2C%5C%22PlaceMaxWeightAllowed%5C%22%3A%5C%220%5C%22%2C%5C%22SendingLimitationsOnDimensions%5C%22%3A%7B%5C%22Width%5C%22%3A70%2C%5C%22Height%5C%22%3A70%2C%5C%22Length%5C%22%3A120%7D%2C%5C%22ReceivingLimitationsOnDimensions%5C%22%3A%7B%5C%22Width%5C%22%3A70%2C%5C%22Height%5C%22%3A70%2C%5C%22Length%5C%22%3A120%7D%2C%5C%22Reception%5C%22%3A%7B%5C%22Monday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Tuesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Wednesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Thursday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Friday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Saturday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%2C%5C%22Sunday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%7D%2C%5C%22Delivery%5C%22%3A%7B%5C%22Monday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Tuesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Wednesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Thursday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Friday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Saturday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%2C%5C%22Sunday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%7D%2C%5C%22Schedule%5C%22%3A%7B%5C%22Monday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Tuesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Wednesday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Thursday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Friday%5C%22%3A%5C%2208%3A00-20%3A00%5C%22%2C%5C%22Saturday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%2C%5C%22Sunday%5C%22%3A%5C%2209%3A00-19%3A00%5C%22%7D%2C%5C%22DistrictCode%5C%22%3A%5C%22%D0%9215%5C%22%2C%5C%22WarehouseStatus%5C%22%3A%5C%22Working%5C%22%2C%5C%22WarehouseStatusDate%5C%22%3A%5C%222022-03-28%2000%3A00%3A00%5C%22%2C%5C%22WarehouseIllusha%5C%22%3A%5C%220%5C%22%2C%5C%22CategoryOfWarehouse%5C%22%3A%5C%22Branch%5C%22%2C%5C%22Direct%5C%22%3A%5C%22%5C%22%2C%5C%22RegionCity%5C%22%3A%5C%22%D0%9A%D0%A0%D0%98%D0%92%D0%98%D0%99%20%D0%A0%D0%86%D0%93%5C%22%2C%5C%22WarehouseForAgent%5C%22%3A%5C%220%5C%22%2C%5C%22GeneratorEnabled%5C%22%3A%5C%221%5C%22%2C%5C%22MaxDeclaredCost%5C%22%3A%5C%220%5C%22%2C%5C%22WorkInMobileAwis%5C%22%3A%5C%220%5C%22%2C%5C%22DenyToSelect%5C%22%3A%5C%220%5C%22%2C%5C%22CanGetMoneyTransfer%5C%22%3A%5C%220%5C%22%2C%5C%22HasMirror%5C%22%3A%5C%221%5C%22%2C%5C%22HasFittingRoom%5C%22%3A%5C%221%5C%22%2C%5C%22OnlyReceivingParcel%5C%22%3A%5C%220%5C%22%2C%5C%22PostMachineType%5C%22%3A%5C%22%5C%22%2C%5C%22PostalCodeUA%5C%22%3A%5C%2250069%5C%22%2C%5C%22WarehouseIndex%5C%22%3A%5C%2233%2F15%5C%22%2C%5C%22BeaconCode%5C%22%3A%5C%22%5C%22%2C%5C%22Location%5C%22%3A%5C%22%5C%22%7D%7D%22%7D
*/
const ordersCreate_FullWarehouse = {}

/*
https://petschoice.club/cart/41899282661450:1,41864347942986:1?checkout%5Bemail%5D=anclemarvel%40gmail.com&checkout%5Bshipping_address%5D%5Bcity%5D=%D0%9B%D1%8C%D0%B2%D1%96%D0%B2&checkout%5Bshipping_address%5D%5Bfirst_name%5D=%D0%9D%D1%96%D0%BA%D1%96%D1%82%D0%B0&checkout%5Bshipping_address%5D%5Blast_name%5D=%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE&checkout%5Bshipping_address%5D%5Baddress1%5D=%D0%BE%D0%B1%D0%BB.%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%2C%20%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%2C%2010&checkout%5Bshipping_address%5D%5Bzip%5D=undefined&checkout%5Bshipping_address%5D%5Bcountry%5D=Ukraine&checkout%5Bshipping_address%5D%5Bphone%5D=%2B380993350918&note=%7B%22phone%22%3A%22%2B380993350918%22%2C%22street%22%3A%22%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%22%2C%22house%22%3A%2210%22%2C%22flat%22%3A%22%22%2C%22settlementObject%22%3A%22%7B%5C%22settlementObject%5C%22%3A%7B%5C%22Ref%5C%22%3A%5C%22e71abb60-4b33-11e4-ab6d-005056801329%5C%22%2C%5C%22SettlementType%5C%22%3A%5C%22563ced10-f210-11e3-8c4a-0050568002cf%5C%22%2C%5C%22Latitude%5C%22%3A%5C%2249.839678000000000%5C%22%2C%5C%22Longitude%5C%22%3A%5C%2224.029709000000000%5C%22%2C%5C%22Description%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%5C%22%2C%5C%22DescriptionRu%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%5C%22%2C%5C%22DescriptionTranslit%5C%22%3A%5C%22Lviv%5C%22%2C%5C%22SettlementTypeDescription%5C%22%3A%5C%22%D0%BC%D1%96%D1%81%D1%82%D0%BE%5C%22%2C%5C%22SettlementTypeDescriptionRu%5C%22%3A%5C%22%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%5C%22%2C%5C%22SettlementTypeDescriptionTranslit%5C%22%3A%5C%22misto%5C%22%2C%5C%22Region%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescription%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescriptionRu%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescriptionTranslit%5C%22%3A%5C%22%5C%22%2C%5C%22Area%5C%22%3A%5C%22dcaadd3a-4b33-11e4-ab6d-005056801329%5C%22%2C%5C%22AreaDescription%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%5C%22%2C%5C%22AreaDescriptionRu%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%5C%22%2C%5C%22AreaDescriptionTranslit%5C%22%3A%5C%22Lvivska%5C%22%2C%5C%22Index1%5C%22%3A%5C%2279002%5C%22%2C%5C%22Index2%5C%22%3A%5C%2279071%5C%22%2C%5C%22IndexCOATSU1%5C%22%3A%5C%224610100000%5C%22%2C%5C%22Delivery1%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery2%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery3%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery4%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery5%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery6%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery7%5C%22%3A%5C%221%5C%22%2C%5C%22SpecialCashCheck%5C%22%3A1%2C%5C%22RadiusHomeDelivery%5C%22%3A%5C%22500%5C%22%2C%5C%22RadiusExpressPickUp%5C%22%3A%5C%22500%5C%22%2C%5C%22RadiusDrop%5C%22%3A%5C%22500%5C%22%2C%5C%22Warehouse%5C%22%3A%5C%221%5C%22%2C%5C%22AddressDeliveryAllowed%5C%22%3Atrue%7D%7D%22%7D
*/
const ordersCreate_PrepaymentCurier = {
  "id": 6005860532298,
  "admin_graphql_api_id": "gid://shopify/Order/6005860532298",
  "app_id": 580111,
  "browser_ip": "31.148.20.77",
  "buyer_accepts_marketing": true,
  "cancel_reason": null,
  "cancelled_at": null,
  "cart_token": "Z2NwLXVzLWVhc3QxOjAxSktCRFZSMDZSNzJKNzBLMktEOVJFVlQ1",
  "checkout_id": 42751862734922,
  "checkout_token": "8798df6b6bd38a2b569d9b1ae3b89096",
  "client_details": {
    "accept_language": "uk-UA",
    "browser_height": null,
    "browser_ip": "31.148.20.77",
    "browser_width": null,
    "session_hash": null,
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
  },
  "closed_at": null,
  "confirmation_number": "Y94XHGI5U",
  "confirmed": true,
  "contact_email": "anclemarvel@gmail.com",
  "created_at": "2025-02-05T17:10:44+01:00",
  "currency": "UAH",
  "current_shipping_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_subtotal_price": "0.00",
  "current_subtotal_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_total_additional_fees_set": null,
  "current_total_discounts": "599.00",
  "current_total_discounts_set": {
    "shop_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    }
  },
  "current_total_duties_set": null,
  "current_total_price": "0.00",
  "current_total_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_total_tax": "0.00",
  "current_total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "customer_locale": "uk-UA",
  "device_id": null,
  "discount_codes": [
    {
      "code": "free_n",
      "amount": "599.00",
      "type": "percentage"
    }
  ],
  "duties_included": false,
  "email": "anclemarvel@gmail.com",
  "estimated_taxes": false,
  "financial_status": "paid",
  "fulfillment_status": null,
  "landing_site": "/?key=677ae8b1cdcce0e5dede3aceeb5091f1fda67a290cbd28131ddccf529ff7fada",
  "landing_site_ref": null,
  "location_id": null,
  "merchant_business_entity_id": "MTYxNzM4ODExNDY2",
  "merchant_of_record_app_id": null,
  "name": "#1021",
  "note": "{\"phone\":\"+380993350918\",\"street\":\"Грушевського\",\"house\":\"10\",\"flat\":\"\",\"settlementObject\":\"{\\\"settlementObject\\\":{\\\"Ref\\\":\\\"e71abb60-4b33-11e4-ab6d-005056801329\\\",\\\"SettlementType\\\":\\\"563ced10-f210-11e3-8c4a-0050568002cf\\\",\\\"Latitude\\\":\\\"49.839678000000000\\\",\\\"Longitude\\\":\\\"24.029709000000000\\\",\\\"Description\\\":\\\"Львів\\\",\\\"DescriptionRu\\\":\\\"Львов\\\",\\\"DescriptionTranslit\\\":\\\"Lviv\\\",\\\"SettlementTypeDescription\\\":\\\"місто\\\",\\\"SettlementTypeDescriptionRu\\\":\\\"город\\\",\\\"SettlementTypeDescriptionTranslit\\\":\\\"misto\\\",\\\"Region\\\":\\\"\\\",\\\"RegionsDescription\\\":\\\"\\\",\\\"RegionsDescriptionRu\\\":\\\"\\\",\\\"RegionsDescriptionTranslit\\\":\\\"\\\",\\\"Area\\\":\\\"dcaadd3a-4b33-11e4-ab6d-005056801329\\\",\\\"AreaDescription\\\":\\\"Львівська\\\",\\\"AreaDescriptionRu\\\":\\\"Львовская область\\\",\\\"AreaDescriptionTranslit\\\":\\\"Lvivska\\\",\\\"Index1\\\":\\\"79002\\\",\\\"Index2\\\":\\\"79071\\\",\\\"IndexCOATSU1\\\":\\\"4610100000\\\",\\\"Delivery1\\\":\\\"1\\\",\\\"Delivery2\\\":\\\"1\\\",\\\"Delivery3\\\":\\\"1\\\",\\\"Delivery4\\\":\\\"1\\\",\\\"Delivery5\\\":\\\"1\\\",\\\"Delivery6\\\":\\\"1\\\",\\\"Delivery7\\\":\\\"1\\\",\\\"SpecialCashCheck\\\":1,\\\"RadiusHomeDelivery\\\":\\\"500\\\",\\\"RadiusExpressPickUp\\\":\\\"500\\\",\\\"RadiusDrop\\\":\\\"500\\\",\\\"Warehouse\\\":\\\"1\\\",\\\"AddressDeliveryAllowed\\\":true}}\"}",
  "note_attributes": [],
  "number": 21,
  "order_number": 1021,
  "order_status_url": "https://petschoice.club/61738811466/orders/9797fa2c1f84cad0c825a6f98d6afabb/authenticate?key=5429241c0dfc862b233bafd5df9dbb39",
  "original_total_additional_fees_set": null,
  "original_total_duties_set": null,
  "payment_gateway_names": [],
  "phone": null,
  "po_number": null,
  "presentment_currency": "UAH",
  "processed_at": "2025-02-05T17:10:43+01:00",
  "reference": null,
  "referring_site": "",
  "source_identifier": null,
  "source_name": "web",
  "source_url": null,
  "subtotal_price": "0.00",
  "subtotal_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "tags": "",
  "tax_exempt": false,
  "tax_lines": [],
  "taxes_included": true,
  "test": false,
  "token": "9797fa2c1f84cad0c825a6f98d6afabb",
  "total_cash_rounding_payment_adjustment_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_cash_rounding_refund_adjustment_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_discounts": "599.00",
  "total_discounts_set": {
    "shop_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    }
  },
  "total_line_items_price": "599.00",
  "total_line_items_price_set": {
    "shop_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "599.00",
      "currency_code": "UAH"
    }
  },
  "total_outstanding": "0.00",
  "total_price": "0.00",
  "total_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_shipping_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_tax": "0.00",
  "total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_tip_received": "0.00",
  "total_weight": 350,
  "updated_at": "2025-02-05T17:10:45+01:00",
  "user_id": null,
  "billing_address": {
    "first_name": "Нікіта",
    "address1": "обл. Львівська, Львів, Грушевського, 10",
    "phone": "+380993350918",
    "city": "Львів",
    "zip": "79005",
    "province": null,
    "country": "Ukraine",
    "last_name": "Шевченко",
    "address2": null,
    "company": null,
    "latitude": null,
    "longitude": null,
    "name": "Нікіта Шевченко",
    "country_code": "UA",
    "province_code": null
  },
  "customer": {
    "id": 8094839668810,
    "email": "anclemarvel@gmail.com",
    "created_at": "2025-01-16T19:47:17+01:00",
    "updated_at": "2025-02-05T17:10:44+01:00",
    "first_name": "Mykyta",
    "last_name": "Shevchenko",
    "state": "enabled",
    "note": null,
    "verified_email": false,
    "multipass_identifier": null,
    "tax_exempt": false,
    "phone": null,
    "currency": "UAH",
    "tax_exemptions": [],
    "admin_graphql_api_id": "gid://shopify/Customer/8094839668810",
    "default_address": {
      "id": 9352814166090,
      "customer_id": 8094839668810,
      "first_name": "Нікіта",
      "last_name": "Шевченко",
      "company": null,
      "address1": "обл. Львівська, Львів, Грушевського, 10",
      "address2": null,
      "city": "Львів",
      "province": null,
      "country": "Ukraine",
      "zip": "79005",
      "phone": "+380993350918",
      "name": "Нікіта Шевченко",
      "province_code": null,
      "country_code": "UA",
      "country_name": "Ukraine",
      "default": true
    }
  },
  "discount_applications": [
    {
      "target_type": "line_item",
      "type": "discount_code",
      "value": "100.0",
      "value_type": "percentage",
      "allocation_method": "across",
      "target_selection": "all",
      "code": "free_n"
    }
  ],
  "fulfillments": [],
  "line_items": [
    {
      "id": 14854151340106,
      "admin_graphql_api_id": "gid://shopify/LineItem/14854151340106",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 1,
      "fulfillment_service": "manual",
      "fulfillment_status": null,
      "gift_card": false,
      "grams": 350,
      "name": "Шампунь для собак - 350 мл / Ваніль-Кокос",
      "price": "399.00",
      "price_set": {
        "shop_money": {
          "amount": "399.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "399.00",
          "currency_code": "UAH"
        }
      },
      "product_exists": true,
      "product_id": 7870931927114,
      "properties": [],
      "quantity": 1,
      "requires_shipping": true,
      "sales_line_item_group_id": null,
      "sku": "5905884494769",
      "taxable": false,
      "title": "Шампунь для собак",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "variant_id": 41864347942986,
      "variant_inventory_management": "shopify",
      "variant_title": "350 мл / Ваніль-Кокос",
      "vendor": "Pets Choice Club",
      "tax_lines": [
        {
          "channel_liable": false,
          "price": "0.00",
          "price_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            }
          },
          "rate": 0.2,
          "title": "PDV"
        }
      ],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "399.00",
          "amount_set": {
            "shop_money": {
              "amount": "399.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "399.00",
              "currency_code": "UAH"
            }
          },
          "discount_application_index": 0
        }
      ]
    },
    {
      "id": 14854151372874,
      "admin_graphql_api_id": "gid://shopify/LineItem/14854151372874",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 1,
      "fulfillment_service": "manual",
      "fulfillment_status": null,
      "gift_card": false,
      "grams": 0,
      "name": "Предоплата",
      "price": "200.00",
      "price_set": {
        "shop_money": {
          "amount": "200.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "200.00",
          "currency_code": "UAH"
        }
      },
      "product_exists": true,
      "product_id": 7883238932554,
      "properties": [],
      "quantity": 1,
      "requires_shipping": false,
      "sales_line_item_group_id": null,
      "sku": "",
      "taxable": false,
      "title": "Предоплата",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "variant_id": 41899282661450,
      "variant_inventory_management": null,
      "variant_title": null,
      "vendor": "Petschoice club",
      "tax_lines": [
        {
          "channel_liable": false,
          "price": "0.00",
          "price_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            }
          },
          "rate": 0.2,
          "title": "PDV"
        }
      ],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "200.00",
          "amount_set": {
            "shop_money": {
              "amount": "200.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "200.00",
              "currency_code": "UAH"
            }
          },
          "discount_application_index": 0
        }
      ]
    }
  ],
  "payment_terms": null,
  "refunds": [],
  "shipping_address": {
    "first_name": "Нікіта",
    "address1": "обл. Львівська, Львів, Грушевського, 10",
    "phone": "+380993350918",
    "city": "Львів",
    "zip": "79005",
    "province": null,
    "country": "Ukraine",
    "last_name": "Шевченко",
    "address2": null,
    "company": null,
    "latitude": 49.8335277,
    "longitude": 24.0329477,
    "name": "Нікіта Шевченко",
    "country_code": "UA",
    "province_code": null
  },
  "shipping_lines": [
    {
      "id": 5075226165322,
      "carrier_identifier": null,
      "code": "Standard",
      "current_discounted_price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "discounted_price": "0.00",
      "discounted_price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "is_removed": false,
      "phone": null,
      "price": "0.00",
      "price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "requested_fulfillment_service_id": null,
      "source": "shopify",
      "title": "Standard",
      "tax_lines": [],
      "discount_allocations": []
    }
  ],
  "returns": []
}

/**
 https://petschoice.club/cart/41864347942986:1?checkout%5Bemail%5D=anclemarvel%40gmail.com&checkout%5Bshipping_address%5D%5Bcity%5D=%D0%9B%D1%8C%D0%B2%D1%96%D0%B2&checkout%5Bshipping_address%5D%5Bfirst_name%5D=%D0%9D%D1%96%D0%BA%D1%96%D1%82%D0%B0&checkout%5Bshipping_address%5D%5Blast_name%5D=%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%BE&checkout%5Bshipping_address%5D%5Baddress1%5D=%D0%BE%D0%B1%D0%BB.%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%2C%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%2C%20%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%2C%2010&checkout%5Bshipping_address%5D%5Bzip%5D=undefined&checkout%5Bshipping_address%5D%5Bcountry%5D=Ukraine&checkout%5Bshipping_address%5D%5Bphone%5D=%2B380993350918&note=%7B%22phone%22%3A%22%2B380993350918%22%2C%22street%22%3A%22%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE%22%2C%22house%22%3A%2210%22%2C%22flat%22%3A%22%22%2C%22settlementObject%22%3A%22%7B%5C%22settlementObject%5C%22%3A%7B%5C%22Ref%5C%22%3A%5C%22e71abb60-4b33-11e4-ab6d-005056801329%5C%22%2C%5C%22SettlementType%5C%22%3A%5C%22563ced10-f210-11e3-8c4a-0050568002cf%5C%22%2C%5C%22Latitude%5C%22%3A%5C%2249.839678000000000%5C%22%2C%5C%22Longitude%5C%22%3A%5C%2224.029709000000000%5C%22%2C%5C%22Description%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%5C%22%2C%5C%22DescriptionRu%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%5C%22%2C%5C%22DescriptionTranslit%5C%22%3A%5C%22Lviv%5C%22%2C%5C%22SettlementTypeDescription%5C%22%3A%5C%22%D0%BC%D1%96%D1%81%D1%82%D0%BE%5C%22%2C%5C%22SettlementTypeDescriptionRu%5C%22%3A%5C%22%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%5C%22%2C%5C%22SettlementTypeDescriptionTranslit%5C%22%3A%5C%22misto%5C%22%2C%5C%22Region%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescription%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescriptionRu%5C%22%3A%5C%22%5C%22%2C%5C%22RegionsDescriptionTranslit%5C%22%3A%5C%22%5C%22%2C%5C%22Area%5C%22%3A%5C%22dcaadd3a-4b33-11e4-ab6d-005056801329%5C%22%2C%5C%22AreaDescription%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%5C%22%2C%5C%22AreaDescriptionRu%5C%22%3A%5C%22%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%5C%22%2C%5C%22AreaDescriptionTranslit%5C%22%3A%5C%22Lvivska%5C%22%2C%5C%22Index1%5C%22%3A%5C%2279002%5C%22%2C%5C%22Index2%5C%22%3A%5C%2279071%5C%22%2C%5C%22IndexCOATSU1%5C%22%3A%5C%224610100000%5C%22%2C%5C%22Delivery1%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery2%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery3%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery4%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery5%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery6%5C%22%3A%5C%221%5C%22%2C%5C%22Delivery7%5C%22%3A%5C%221%5C%22%2C%5C%22SpecialCashCheck%5C%22%3A1%2C%5C%22RadiusHomeDelivery%5C%22%3A%5C%22500%5C%22%2C%5C%22RadiusExpressPickUp%5C%22%3A%5C%22500%5C%22%2C%5C%22RadiusDrop%5C%22%3A%5C%22500%5C%22%2C%5C%22Warehouse%5C%22%3A%5C%221%5C%22%2C%5C%22AddressDeliveryAllowed%5C%22%3Atrue%7D%7D%22%7D
 */
const ordersCreate_FullCurier = {
  "id": 6005866528842,
  "admin_graphql_api_id": "gid://shopify/Order/6005866528842",
  "app_id": 580111,
  "browser_ip": "31.148.20.77",
  "buyer_accepts_marketing": true,
  "cancel_reason": null,
  "cancelled_at": null,
  "cart_token": "Z2NwLXVzLWVhc3QxOjAxSktCRTlEM0VRWFJZWjdUODhHSjBQRTRI",
  "checkout_id": 42751904481354,
  "checkout_token": "3cac219dca9395f4ff8c04c3484fbf06",
  "client_details": {
    "accept_language": "uk-UA",
    "browser_height": null,
    "browser_ip": "31.148.20.77",
    "browser_width": null,
    "session_hash": null,
    "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
  },
  "closed_at": null,
  "confirmation_number": "G1KG6EUPI",
  "confirmed": true,
  "contact_email": "anclemarvel@gmail.com",
  "created_at": "2025-02-05T17:16:13+01:00",
  "currency": "UAH",
  "current_shipping_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_subtotal_price": "0.00",
  "current_subtotal_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_total_additional_fees_set": null,
  "current_total_discounts": "399.00",
  "current_total_discounts_set": {
    "shop_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    }
  },
  "current_total_duties_set": null,
  "current_total_price": "0.00",
  "current_total_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "current_total_tax": "0.00",
  "current_total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "customer_locale": "uk-UA",
  "device_id": null,
  "discount_codes": [
    {
      "code": "free_n",
      "amount": "399.00",
      "type": "percentage"
    }
  ],
  "duties_included": false,
  "email": "anclemarvel@gmail.com",
  "estimated_taxes": false,
  "financial_status": "paid",
  "fulfillment_status": null,
  "landing_site": "/?key=677ae8b1cdcce0e5dede3aceeb5091f1fda67a290cbd28131ddccf529ff7fada",
  "landing_site_ref": null,
  "location_id": null,
  "merchant_business_entity_id": "MTYxNzM4ODExNDY2",
  "merchant_of_record_app_id": null,
  "name": "#1022",
  "note": "{\"phone\":\"+380993350918\",\"street\":\"Грушевського\",\"house\":\"10\",\"flat\":\"\",\"settlementObject\":\"{\\\"settlementObject\\\":{\\\"Ref\\\":\\\"e71abb60-4b33-11e4-ab6d-005056801329\\\",\\\"SettlementType\\\":\\\"563ced10-f210-11e3-8c4a-0050568002cf\\\",\\\"Latitude\\\":\\\"49.839678000000000\\\",\\\"Longitude\\\":\\\"24.029709000000000\\\",\\\"Description\\\":\\\"Львів\\\",\\\"DescriptionRu\\\":\\\"Львов\\\",\\\"DescriptionTranslit\\\":\\\"Lviv\\\",\\\"SettlementTypeDescription\\\":\\\"місто\\\",\\\"SettlementTypeDescriptionRu\\\":\\\"город\\\",\\\"SettlementTypeDescriptionTranslit\\\":\\\"misto\\\",\\\"Region\\\":\\\"\\\",\\\"RegionsDescription\\\":\\\"\\\",\\\"RegionsDescriptionRu\\\":\\\"\\\",\\\"RegionsDescriptionTranslit\\\":\\\"\\\",\\\"Area\\\":\\\"dcaadd3a-4b33-11e4-ab6d-005056801329\\\",\\\"AreaDescription\\\":\\\"Львівська\\\",\\\"AreaDescriptionRu\\\":\\\"Львовская область\\\",\\\"AreaDescriptionTranslit\\\":\\\"Lvivska\\\",\\\"Index1\\\":\\\"79002\\\",\\\"Index2\\\":\\\"79071\\\",\\\"IndexCOATSU1\\\":\\\"4610100000\\\",\\\"Delivery1\\\":\\\"1\\\",\\\"Delivery2\\\":\\\"1\\\",\\\"Delivery3\\\":\\\"1\\\",\\\"Delivery4\\\":\\\"1\\\",\\\"Delivery5\\\":\\\"1\\\",\\\"Delivery6\\\":\\\"1\\\",\\\"Delivery7\\\":\\\"1\\\",\\\"SpecialCashCheck\\\":1,\\\"RadiusHomeDelivery\\\":\\\"500\\\",\\\"RadiusExpressPickUp\\\":\\\"500\\\",\\\"RadiusDrop\\\":\\\"500\\\",\\\"Warehouse\\\":\\\"1\\\",\\\"AddressDeliveryAllowed\\\":true}}\"}",
  "note_attributes": [],
  "number": 22,
  "order_number": 1022,
  "order_status_url": "https://petschoice.club/61738811466/orders/d20df52422d59b8bdd023e1f0dcce928/authenticate?key=6c2352cba6239e9684df951e79dbf8e9",
  "original_total_additional_fees_set": null,
  "original_total_duties_set": null,
  "payment_gateway_names": [],
  "phone": null,
  "po_number": null,
  "presentment_currency": "UAH",
  "processed_at": "2025-02-05T17:16:13+01:00",
  "reference": null,
  "referring_site": "",
  "source_identifier": null,
  "source_name": "web",
  "source_url": null,
  "subtotal_price": "0.00",
  "subtotal_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "tags": "",
  "tax_exempt": false,
  "tax_lines": [],
  "taxes_included": true,
  "test": false,
  "token": "d20df52422d59b8bdd023e1f0dcce928",
  "total_cash_rounding_payment_adjustment_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_cash_rounding_refund_adjustment_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_discounts": "399.00",
  "total_discounts_set": {
    "shop_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    }
  },
  "total_line_items_price": "399.00",
  "total_line_items_price_set": {
    "shop_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "399.00",
      "currency_code": "UAH"
    }
  },
  "total_outstanding": "0.00",
  "total_price": "0.00",
  "total_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_shipping_price_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_tax": "0.00",
  "total_tax_set": {
    "shop_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    },
    "presentment_money": {
      "amount": "0.00",
      "currency_code": "UAH"
    }
  },
  "total_tip_received": "0.00",
  "total_weight": 350,
  "updated_at": "2025-02-05T17:16:14+01:00",
  "user_id": null,
  "billing_address": {
    "first_name": "Нікіта",
    "address1": "обл. Львівська, Львів, Грушевського, 10",
    "phone": "+380993350918",
    "city": "Львів",
    "zip": "79005",
    "province": null,
    "country": "Ukraine",
    "last_name": "Шевченко",
    "address2": null,
    "company": null,
    "latitude": null,
    "longitude": null,
    "name": "Нікіта Шевченко",
    "country_code": "UA",
    "province_code": null
  },
  "customer": {
    "id": 8094839668810,
    "email": "anclemarvel@gmail.com",
    "created_at": "2025-01-16T19:47:17+01:00",
    "updated_at": "2025-02-05T17:16:13+01:00",
    "first_name": "Mykyta",
    "last_name": "Shevchenko",
    "state": "enabled",
    "note": null,
    "verified_email": false,
    "multipass_identifier": null,
    "tax_exempt": false,
    "phone": null,
    "currency": "UAH",
    "tax_exemptions": [],
    "admin_graphql_api_id": "gid://shopify/Customer/8094839668810",
    "default_address": {
      "id": 9352814166090,
      "customer_id": 8094839668810,
      "first_name": "Нікіта",
      "last_name": "Шевченко",
      "company": null,
      "address1": "обл. Львівська, Львів, Грушевського, 10",
      "address2": null,
      "city": "Львів",
      "province": null,
      "country": "Ukraine",
      "zip": "79005",
      "phone": "+380993350918",
      "name": "Нікіта Шевченко",
      "province_code": null,
      "country_code": "UA",
      "country_name": "Ukraine",
      "default": true
    }
  },
  "discount_applications": [
    {
      "target_type": "line_item",
      "type": "discount_code",
      "value": "100.0",
      "value_type": "percentage",
      "allocation_method": "across",
      "target_selection": "all",
      "code": "free_n"
    }
  ],
  "fulfillments": [],
  "line_items": [
    {
      "id": 14854162874442,
      "admin_graphql_api_id": "gid://shopify/LineItem/14854162874442",
      "attributed_staffs": [],
      "current_quantity": 1,
      "fulfillable_quantity": 1,
      "fulfillment_service": "manual",
      "fulfillment_status": null,
      "gift_card": false,
      "grams": 350,
      "name": "Шампунь для собак - 350 мл / Ваніль-Кокос",
      "price": "399.00",
      "price_set": {
        "shop_money": {
          "amount": "399.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "399.00",
          "currency_code": "UAH"
        }
      },
      "product_exists": true,
      "product_id": 7870931927114,
      "properties": [],
      "quantity": 1,
      "requires_shipping": true,
      "sales_line_item_group_id": null,
      "sku": "5905884494769",
      "taxable": false,
      "title": "Шампунь для собак",
      "total_discount": "0.00",
      "total_discount_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "variant_id": 41864347942986,
      "variant_inventory_management": "shopify",
      "variant_title": "350 мл / Ваніль-Кокос",
      "vendor": "Pets Choice Club",
      "tax_lines": [
        {
          "channel_liable": false,
          "price": "0.00",
          "price_set": {
            "shop_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "0.00",
              "currency_code": "UAH"
            }
          },
          "rate": 0.2,
          "title": "PDV"
        }
      ],
      "duties": [],
      "discount_allocations": [
        {
          "amount": "399.00",
          "amount_set": {
            "shop_money": {
              "amount": "399.00",
              "currency_code": "UAH"
            },
            "presentment_money": {
              "amount": "399.00",
              "currency_code": "UAH"
            }
          },
          "discount_application_index": 0
        }
      ]
    }
  ],
  "payment_terms": null,
  "refunds": [],
  "shipping_address": {
    "first_name": "Нікіта",
    "address1": "обл. Львівська, Львів, Грушевського, 10",
    "phone": "+380993350918",
    "city": "Львів",
    "zip": "79005",
    "province": null,
    "country": "Ukraine",
    "last_name": "Шевченко",
    "address2": null,
    "company": null,
    "latitude": 49.8335277,
    "longitude": 24.0329477,
    "name": "Нікіта Шевченко",
    "country_code": "UA",
    "province_code": null
  },
  "shipping_lines": [
    {
      "id": 5075230687306,
      "carrier_identifier": null,
      "code": "Standard",
      "current_discounted_price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "discounted_price": "0.00",
      "discounted_price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "is_removed": false,
      "phone": null,
      "price": "0.00",
      "price_set": {
        "shop_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        },
        "presentment_money": {
          "amount": "0.00",
          "currency_code": "UAH"
        }
      },
      "requested_fulfillment_service_id": null,
      "source": "shopify",
      "title": "Standard",
      "tax_lines": [],
      "discount_allocations": []
    }
  ],
  "returns": []
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