import { closeCartDrawer } from "./utils";

const state = {
  fetchedSettlements: [],
  fetchedPostOffices: [],
  fetchedStreets: [],
  selectedSettlement: null,
  selectedPostoffice: null,
  selectedStreet: null,
  selectedDelivery: 'post-office'
};

const selectors = {
  prefillOverlay: '#prefill-overlay',
  prefillContainer: '#prefill-container',

  prefillForm: '#prefill-form',
  closeBtn: '#close-prefill-form',

  errorMessage: '.prefill-error-message',

  firstName: '#first-name',
  lastName: '#last-name',
  email: '#email',
  phone: '#phone',

  shippingType: '[name="shipping-type"]',

  postOfficeAddressWindow: '#post-office-shipping',
  searchPostOffice: '#search-post-office',
  postOfficeSelection: '#post-office',
  postOfficeDropdown: 'post-office-dropdown',
  postOfficeSearchClearIcon: '.prefill-search-post-office-clear',
  postOfficeSearchIcon: '.prefill-search-post-office-search',
  settlementSearch: '#settlement-search',
  settlementSelection: '#settlement-selection',
  settlementDropdown: 'settlement-dropdown',
  settlementSearchClearIcon: '.prefill-settlement-search-clear',
  settlementSearchIcon: '.icon-prefill-search',

  courierAddressWindow: '#courier-shipping',
  courierSettlementSearch: '#courier-settlement-search',
  courierSettlementSelection: '#courier-settlement-selection',
  courierStreetSearch: '#courier-street-search',
  courierStreetSelection: '#courier-street-selection',
  courierSettlementDropdown: 'courier-settlement-dropdown',
  courierSettlementClearIcon: '.courier-settlement-clear',
  courierSettlementSearchIcon: '.prefill-courier-settlement-search',

  street: '#street',
  house: '#house',
  flat: '#flat',
  postalCode: '#postal-code',
  country: '#country',

  inputsWrappers: '.prefill-input-selection',

  checkoutBtn: '[type="submit"][name="checkout"]',
  buyNowBtn: '.payment-button__prefill-checkout-trigger',
};

const settlementDropdown = document.getElementById(selectors.settlementDropdown);
const settlementSearchClearIcon = document.querySelector(selectors.settlementSearchClearIcon);
const settlementSearchIcon = document.querySelector(selectors.settlementSearchIcon);

const postOfficeDropdown = document.getElementById(selectors.postOfficeDropdown);
const postOfficeSearchClearIcon = document.querySelector(selectors.postOfficeSearchClearIcon);
const postOfficeSearchIcon = document.querySelector(selectors.postOfficeSearchIcon);

const courierSettlementDropdown = document.getElementById(selectors.courierSettlementDropdown);
const courierSettlementClearIcon = document.querySelector(selectors.courierSettlementClearIcon);
const courierSettlementSearchIcon = document.querySelector(selectors.courierSettlementSearchIcon);

const inputsWrappers = document.querySelectorAll(selectors.inputsWrappers);
const firstNameInput = document.querySelector(selectors.firstName);
const lastNameInput = document.querySelector(selectors.lastName);
const phoneInput = document.querySelector(selectors.phone);
const emailImput = document.querySelector(selectors.email);

/**
 * @param {Object} params
 *
 * @property {Object} variantsWithQty
 * @example { "41864347975754:1": 2, "41864347975754:2": 1 }
 * @property {String} email
 * @property {String} city
 * @property {String} firstName
 * @property {String} lastName
 * @property {String} address
 * @property {String} zip
 * @property {String} country
 * @property {String} phone
 * @returns {String}
 * @example 'https://petschoice.club/cart/41864347975754:1?checkout[email]=customer@example.com&checkout[shipping_address][city]=Lviv&checkout[shipping_address][first_name]=Nikita&checkout[shipping_address][last_name]=Shechenko&checkout[shipping_address][address1]=Ломоносова,55,кв6&checkout[shipping_address][zip]=03022&checkout[shipping_address][country]=Ukraine&checkout[shipping_address][phone]=+380995586745'
 */
function createPrefilLink({ variantsWithQty, email, city, firstName, lastName, address, zip, country, phone, street, house, flat, selectedPostoffice, settlementObject }) {
  let variants = Object.entries(variantsWithQty).map(([variantId, qty]) => `${variantId}:${qty}`).join(',');

  const queryParams = {
    'checkout[email]': email,
    'checkout[shipping_address][city]': city,
    'checkout[shipping_address][first_name]': firstName,
    'checkout[shipping_address][last_name]': lastName,
    'checkout[shipping_address][address1]': address,
    'checkout[shipping_address][zip]': zip,
    'checkout[shipping_address][country]': country,
    'checkout[shipping_address][phone]': phone,
  };

  const note = {
    phone: phone,
    street: street,
    house: house,
    flat: flat || '',
  };

  if (selectedPostoffice) {
    note.selectedPostoffice = JSON.stringify({ selectedPostoffice });
  }

  if (settlementObject) {
    note.settlementObject = JSON.stringify({ settlementObject });
  }

  queryParams['note'] = JSON.stringify(note);

  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return `https://petschoice.club/cart/${variants}?${queryString}`;
}

function togglePrefillOverlay() {
  const overlay = document.querySelector(selectors.prefillOverlay);
  overlay.classList.toggle('hidden');
  const body = document.querySelector('body');
  body.style.overflow = body.style.overflow === 'hidden' ? 'auto' : 'hidden';
}

function checkoutHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  closeCartDrawer();
  togglePrefillOverlay();
}

async function prefillSubmitHandler(event) {
  event.preventDefault();
  event.stopPropagation();
  const submitButton = document.querySelector(selectors.prefillForm).querySelector('[type="submit"]');
  submitButton.setAttribute('aria-busy', 'true');
  if (!validatePrefillForm()) return;

  const form = document.querySelector(selectors.prefillForm);
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const prepayemntProductVariant = 41899282661450;

  let cart = await fetch('/cart.js')
    .then((response) => response.json())
    .catch(console.error);
  if (!cart || !cart.item_count) return;

  if (
    data['payment-type'] === 'prepayment' &&
    !cart.items.find((item) => item.variant_id === prepayemntProductVariant)
  ) {
    const responseOfAdding = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            id: prepayemntProductVariant,
            quantity: 1,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .catch(console.error);
    console.log('responseOfAdding --->', responseOfAdding);
  } else if (
    data['payment-type'] !== 'prepayment' &&
    cart.items.find((item) => item.variant_id === prepayemntProductVariant)
  ) {
    const updates = {
      [prepayemntProductVariant]: 0,
    };
    const responseOfRemoving = await fetch('/cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updates }),
    })
      .then((response) => response.json())
      .catch(console.error);
    console.log('responseOfRemoving --->', responseOfRemoving);
  }
  cart = await fetch('/cart.js')
    .then((response) => response.json())
    .catch(console.error);

  if (data['shipping-type'] === 'post-office') {
    const selectedPostoffice = state.fetchedPostOffices.find(
      (postoffice) => postoffice.Ref === state.selectedPostoffice,
    );
    const { PostalCodeUA, Description, CityDescription } = selectedPostoffice;
    data.zip = PostalCodeUA;
    data.address = Description;
    data.city = CityDescription;
    data.selectedPostoffice = selectedPostoffice;
  } else {
    const selectedSettlement = state.fetchedSettlements.find(
      (settlement) => settlement.Ref === state.selectedSettlement,
    );
    let address = `обл. ${selectedSettlement.AreaDescription}, ${selectedSettlement.Description}, ${data.street}, ${data.house}`;
    if (data.flat) {
      address += `, кв. ${data.flat}`;
    }
    data.address = address;
    data.city = selectedSettlement.Description;
    data.settlementObject = selectedSettlement;
  }

  const variantsWithQty = {};
  cart.items.forEach((item) => {
    variantsWithQty[item.variant_id] = item.quantity;
  });

  data.variantsWithQty = variantsWithQty;

  const dataExampleOfCurierShipping = {
    firstName: 'Нікіта',
    lastName: 'Shevchenko',
    surname: 'Олександрович',
    email: 'anclemarvel@gmail.com',
    phone: '+380993350918',
    'payment-type': 'full',
    'shipping-type': 'courier',
    'settlement-search': '',
    'search-post-office': '',
    'courier-settlement-search': 'Обрано: Львів, Львівська',
    'courier-settlement-selection': 'e71abb60-4b33-11e4-ab6d-005056801329',
    street: 'Грушевського',
    house: '10',
    flat: '',
    'postal-code': '4610100000',
    country: 'Ukraine',
    address: 'обл. Львівська, Львів, Грушевського, 10',
    city: 'Львів',
    settlementObject: {
      Ref: 'e71abb60-4b33-11e4-ab6d-005056801329',
      SettlementType: '563ced10-f210-11e3-8c4a-0050568002cf',
      Latitude: '49.839678000000000',
      Longitude: '24.029709000000000',
      Description: 'Львів',
      DescriptionRu: 'Львов',
      DescriptionTranslit: 'Lviv',
      SettlementTypeDescription: 'місто',
      SettlementTypeDescriptionRu: 'город',
      SettlementTypeDescriptionTranslit: 'misto',
      Region: '',
      RegionsDescription: '',
      RegionsDescriptionRu: '',
      RegionsDescriptionTranslit: '',
      Area: 'dcaadd3a-4b33-11e4-ab6d-005056801329',
      AreaDescription: 'Львівська',
      AreaDescriptionRu: 'Львовская область',
      AreaDescriptionTranslit: 'Lvivska',
      Index1: '79002',
      Index2: '79071',
      IndexCOATSU1: '4610100000',
      Delivery1: '1',
      Delivery2: '1',
      Delivery3: '1',
      Delivery4: '1',
      Delivery5: '1',
      Delivery6: '1',
      Delivery7: '1',
      SpecialCashCheck: 1,
      RadiusHomeDelivery: '500',
      RadiusExpressPickUp: '500',
      RadiusDrop: '500',
      Warehouse: '1',
      AddressDeliveryAllowed: true,
    },
    variantsWithQty: {
      41864347877450: 2,
    },
  };

  const dataExampleOfPostOfficeShipping = {
    firstName: 'Нікіта',
    lastName: 'Shevchenko',
    surname: 'Олександрович',
    email: 'anclemarvel@gmail.com',
    phone: '+380993350918',
    'payment-type': 'full',
    'shipping-type': 'post-office',
    'settlement-search': 'Обрано: Львів, Львівська',
    'settlement-selection': 'e71abb60-4b33-11e4-ab6d-005056801329',
    'search-post-office': 'Обрано: Відділення №1: вул. Городоцька, 359',
    'post-office': '1ec09d2e-e1c2-11e3-8c4a-0050568002cf',
    'courier-settlement-search': 'Обрано: Львів, Львівська',
    'courier-settlement-selection': 'e71abb60-4b33-11e4-ab6d-005056801329',
    street: 'Грушевського',
    house: '10',
    flat: '',
    'postal-code': '4610100000',
    country: 'Ukraine',
    zip: '79018',
    address: 'Відділення №1: вул. Городоцька, 359',
    city: 'Львів',
    selectedPostoffice: {
      SiteKey: '8',
      Description: 'Відділення №1: вул. Городоцька, 359',
      DescriptionRu: 'Отделение №1: ул. Городоцкая, 359',
      ShortAddress: 'Львів, Городоцька, 359',
      ShortAddressRu: 'Львов, Городоцкая, 359',
      Phone: '380800500609',
      TypeOfWarehouse: '9a68df70-0267-42a8-bb5c-37f427e36ee4',
      Ref: '1ec09d2e-e1c2-11e3-8c4a-0050568002cf',
      Number: '1',
      CityRef: 'db5c88f5-391c-11dd-90d9-001a92567626',
      CityDescription: 'Львів',
      CityDescriptionRu: 'Львов',
      SettlementRef: 'e71abb60-4b33-11e4-ab6d-005056801329',
      SettlementDescription: 'Львів',
      SettlementAreaDescription: 'Львівська',
      SettlementRegionsDescription: '',
      SettlementTypeDescription: 'місто',
      SettlementTypeDescriptionRu: 'город',
      Longitude: '23.919766000000000',
      Latitude: '49.821426000000000',
      PostFinance: '0',
      BicycleParking: '1',
      PaymentAccess: '1',
      POSTerminal: '1',
      InternationalShipping: '1',
      SelfServiceWorkplacesCount: '1',
      TotalMaxWeightAllowed: '0',
      PlaceMaxWeightAllowed: '1100',
      SendingLimitationsOnDimensions: {
        Width: 170,
        Height: 220,
        Length: 600,
      },
      ReceivingLimitationsOnDimensions: {
        Width: 170,
        Height: 220,
        Length: 600,
      },
      Reception: {
        Monday: '08:00-21:00',
        Tuesday: '08:00-21:00',
        Wednesday: '08:00-21:00',
        Thursday: '08:00-21:00',
        Friday: '08:00-21:00',
        Saturday: '09:00-19:00',
        Sunday: '09:00-19:00',
      },
      Delivery: {
        Monday: '08:00-20:00',
        Tuesday: '08:00-20:00',
        Wednesday: '08:00-20:00',
        Thursday: '08:00-20:00',
        Friday: '08:00-20:00',
        Saturday: '09:00-19:00',
        Sunday: '09:00-19:00',
      },
      Schedule: {
        Monday: '08:00-21:00',
        Tuesday: '08:00-21:00',
        Wednesday: '08:00-21:00',
        Thursday: '08:00-21:00',
        Friday: '08:00-21:00',
        Saturday: '09:00-19:00',
        Sunday: '09:00-19:00',
      },
      DistrictCode: 'ЛЕО/Т2/В1',
      WarehouseStatus: 'Working',
      WarehouseStatusDate: '2000-01-01 00:00:00',
      WarehouseIllusha: '0',
      CategoryOfWarehouse: 'Branch',
      Direct: '',
      RegionCity: 'ЛЬВІВ ПОСИЛКОВИЙ',
      WarehouseForAgent: '0',
      GeneratorEnabled: '1',
      MaxDeclaredCost: '0',
      WorkInMobileAwis: '0',
      DenyToSelect: '0',
      CanGetMoneyTransfer: '0',
      HasMirror: '1',
      HasFittingRoom: '1',
      OnlyReceivingParcel: '0',
      PostMachineType: '',
      PostalCodeUA: '79018',
      WarehouseIndex: '74/1',
      BeaconCode: '',
      Location: '',
    },
    variantsWithQty: {
      41864347877450: 2,
    },
  };
  console.log('✌️data --->', data);

  const response = await fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ note: JSON.stringify(data) }),
  })
    .then((response) => response.json())
    .catch(console.error);
  console.log('✌️response --->', response);

  const prefillLink = createPrefilLink(data);
  console.log('✌️prefillLink --->', prefillLink);

  window.location.href = prefillLink;
}

/**
 * Handle submit prefill form
 */
const prefillForm = document.querySelector(selectors.prefillForm);
prefillForm.addEventListener('submit', prefillSubmitHandler);

/**
 * Handle click on close prefill form button
 */
const closePrefillFormBtn = document.querySelector(selectors.closeBtn);
closePrefillFormBtn.addEventListener('click', togglePrefillOverlay);

/**
 * Handle click outside of prefill-container
 */
const prefillContainer = document.querySelector(selectors.prefillContainer);
prefillContainer.addEventListener('click', (event) => {
  if (event.target === prefillContainer) {
    togglePrefillOverlay();
  }
});

/**
 * Search settlement & post office
 */
const settlementSearch = document.querySelector(selectors.settlementSearch);
const settlementSelection = document.querySelector(selectors.settlementSelection);
const searchPostOffice = document.querySelector(selectors.searchPostOffice);
const postOfficeSelection = document.querySelector(selectors.postOfficeSelection);

const endpoint = 'https://api.novaposhta.ua/v2.0/json/';
const apiKey = 'a4f8704e04f9ea609b1bd830e1875d7f';

/**
 * Fetch settlements from Nova Poshta API
 * @param {string} query - Текст для поиска населенного пункта
 * @returns {Array} - Список населенных пунктов
 */
async function fetchSettlements(query) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: apiKey,
      modelName: 'AddressGeneral',
      calledMethod: 'getSettlements',
      methodProperties: {
        FindByString: query,
        Limit: 20, // Максимальное количество записей
      },
    }),
  });

  const result = await response.json();
  if (result.success) {
    state.fetchedSettlements = result.data;
    return result.data;
  } else {
    console.error('Ошибка при получении населенных пунктов:', result.errors);
    return [];
  }
}

/**
 * Fetch streets from Nova Poshta API
 * @param {string} query - Текст для поиска населенного пункта
 * @param {string} cityRef - City Ref
 * @returns {Array} - Список населенных пунктов
 */
async function fetchStreets(query, cityRef) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: apiKey,
      modelName: 'Address',
      calledMethod: 'getStreet',
      methodProperties: {
        CityRef: 'e71abb60-4b33-11e4-ab6d-005056801329', //cityRef,
        FindByString: query,
      },
    }),
  });

  const result = await response.json();
  if (result.success) {
    state.fetchedStreets = result.data;
    return result.data;
  } else {
    console.error('Ошибка при получении улиц:', result.errors);
    return [];
  }
}

/**
 * Fetch post offices from Nova Poshta API
 * @param {string} settlementRef - REF выбранного населенного пункта
 * @param {string} query - Текст для поиска отделения
 * @returns {Array} - Список отделений
 */
async function fetchPostOffices(settlementRef, query) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      apiKey: apiKey,
      modelName: 'Address',
      calledMethod: 'getWarehouses',
      methodProperties: {
        SettlementRef: settlementRef, // REF выбранного населенного пункта
        FindByString: query,
        Limit: 20,
      },
    }),
  });

  const result = await response.json();
  if (result.success) {
    state.fetchedPostOffices = result.data;
    return result.data;
  } else {
    console.error('Ошибка при получении отделений:', result.errors);
    return [];
  }
}

/**
 * Render options for dropdowns
 * @param {HTMLElement} dropdown - HTML select element
 * @param {Array} items - Список элементов для отображения
 * @param {string} valueKey - Ключ для значения (value) option
 * @param {string|Array<string>} textKey - Key(s) for (innerText) option
 */
function renderDropdownOptions(dropdown, items, valueKey, textKeys) {
  const selectionTargetString = dropdown.id === 'settlement-selection' ? 'населений пункт' : 'відділення';
  dropdown.innerHTML = `<option value="" selected disabled hidden>Оберіть ${selectionTargetString}</option>`;
  items.forEach((item) => {
    const option = document.createElement('option');
    option.value = item[valueKey];
    if (Array.isArray(textKeys)) {
      option.textContent = textKeys.map((key) => item[key]).join(', ');
    } else {
      option.textContent = item[textKeys];
    }
    dropdown.appendChild(option);
  });
  dropdown.classList.remove('hidden');
}

function updateDropdown(dropdown, items, value, displayKeys) {
  dropdown.innerHTML = '';

  if (items.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.textContent = 'Відсутні результати пошуку';
    emptyMessage.className = 'empty';
    dropdown.appendChild(emptyMessage);
  } else {
    items.forEach(item => {
      const selection = displayKeys.map(key => {
        if (key === 'SettlementTypeDescription' && item[key]) {
          return `${item[key].charAt(0)}. `;
        }

        if (key === 'Description' && item[key]) {
          return `${item[key]}`;
        }

        if (key === 'AreaDescription' && item[key]) {
          return `, ${item.AreaDescription} обл.`;
        }

        if (key === 'RegionsDescription' && item[key]) {
          return `, ${item[key]} р-н`;
        }
        return item[key];
      }).join('');

      const option = document.createElement('div');
      option.textContent = selection;
      option.dataset.value = item[value];
      dropdown.appendChild(option);
    });
  }

  dropdown.classList.add('active');
}

/**
 * Handle settlement search input
 */
settlementSearch.addEventListener('input', async (event) => {
  const query = event.target.value.trim();
  if (query.length < 2) return; // Игнорируем запросы короче 2 символов

  const settlements = await fetchSettlements(query);
  // renderDropdownOptions(settlementSelection, settlements, 'Ref', ['Description', 'AreaDescription']);
  updateDropdown(settlementDropdown, settlements, 'Ref', ['SettlementTypeDescription', 'Description', 'AreaDescription', 'RegionsDescription']);
});

/**
 * Handle post office search input
 */
searchPostOffice.addEventListener('input', async (event) => {
  const query = event.target.value.trim();
  const settlementRef = state.selectedSettlement;

  if (!state.selectedSettlement) {
    settlementSearch.classList.add('error');
    settlementSearch.scrollIntoView({ behavior: 'smooth' });
    return;
  } else {
    settlementSearch.classList.remove('error');
  }

  const postOffices = await fetchPostOffices(settlementRef, query);

  // renderDropdownOptions(postOfficeSelection, postOffices, 'Ref', 'Description');
  updateDropdown(postOfficeDropdown, postOffices, 'Ref', ['Description']);
});

/**
 * Handle settlement selection change
 */
settlementSelection.addEventListener('change', (e) => {
  // 1. Reset post office selection
  postOfficeSelection.classList.add('hidden');
  searchPostOffice.value = '';

  // 2. Save selected settlement
  state.selectedSettlement = e.target.value;
  settlementSearch.value = `Обрано: ${e.target.selectedOptions[0].innerText}`;

  // 3. Reset errors
  settlementSearch.classList.remove('error');
  settlementSelection.classList.remove('error');
});

/**
 * Handle postOffice selection change
 */
postOfficeSelection.addEventListener('change', (e) => {
  state.selectedPostoffice = e.target.value;
  searchPostOffice.value = `Обрано: ${e.target.selectedOptions[0].innerText}`;
});

/**
 * Show post office selection when input focused
 */
searchPostOffice.addEventListener('focus', async () => {
  if (!state.selectedSettlement) {
    settlementSearch.classList.add('error');
    settlementSearch.scrollIntoView({ behavior: 'smooth' });
    return;
  } else {
    settlementSearch.classList.remove('error');
  }
});

/**
 * DOM-селекторы для блока "Address for Courier"
 */
const courierSettlementSearch = document.querySelector(selectors.courierSettlementSearch);
const courierSettlementSelection = document.querySelector(selectors.courierSettlementSelection);
const courierStreetSearch = document.querySelector(selectors.courierStreetSearch);
const courierStreetSelection = document.querySelector(selectors.courierStreetSelection);
const postalCodeInput = document.querySelector(selectors.postalCode);

/**
 * Обработка поиска населённого пункта для курьера
 */
courierSettlementSearch.addEventListener('input', async (event) => {
  const query = event.target.value.trim();
  if (query.length < 2) return; // Запрос короче 2 символов не обрабатываем

  // Вызываем уже имеющийся метод fetchSettlements
  const settlements = await fetchSettlements(query);

  // Рендерим результаты в select #courier-settlement-selection
  // renderDropdownOptions(
  //   courierSettlementSelection,
  //   settlements,
  //   'Ref', // value для <option>
  //   ['Description', 'AreaDescription'], // текст (Description, AreaDescription)
  // );

  updateDropdown(courierSettlementDropdown, settlements, 'Ref', ['SettlementTypeDescription', 'Description', 'AreaDescription', 'RegionsDescription']);
});

/**
 * Обработка выбора населённого пункта (select) для курьера
 */
courierSettlementSelection.addEventListener('change', (e) => {
  // Скрываем селект улиц, сбрасываем введённое в поиск улиц
  // courierStreetSelection.classList.add('hidden');
  // courierStreetSearch.value = '';

  const selectedRef = e.target.value; // Ref выбранного населённого пункта
  state.selectedSettlement = selectedRef;

  // Заполняем инпут курьерского населённого пункта фразой "Обрано: ...",
  // чтобы пользователь видел, что населённый пункт выбран
  courierSettlementSearch.value = `Обрано: ${e.target.selectedOptions[0].innerText}`;

  // Ищем в state.fetchedSettlements объект, соответствующий выбранному Ref,
  // и пытаемся установить почтовый индекс, если он есть
  const foundSettlement = state.fetchedSettlements.find((item) => item.Ref === selectedRef);
  if (foundSettlement && foundSettlement.IndexCOATSU1) {
    postalCodeInput.value = foundSettlement.IndexCOATSU1;
  } else {
    // Если в ответе нет почтового кода, оставляем поле пустым или прячем его
    postalCodeInput.value = '';
  }
});

// ПОИСК УЛИЦ ОТКЛЮЧЁН: AddressGeneral.getSettlements returns different city ref than Address.getCities which is required for Address.getStreet
// /**
//  * Обработка поиска улицы в выбранном населённом пункте
//  */
// courierStreetSearch.addEventListener('input', async (event) => {
//     const query = event.target.value.trim();
//     if (query.length < 2) return;

//     // Проверяем, выбран ли населённый пункт
//     const cityRef = state.selectedSettlement;
//     if (!cityRef) {
//         courierSettlementSearch.classList.add('error');
//         courierSettlementSelection.classList.add('error');
//         courierSettlementSearch.scrollIntoView({ behavior: 'smooth' });
//         return;
//     } else {
//         courierSettlementSearch.classList.remove('error');
//         courierSettlementSelection.classList.remove('error');
//     }

//     // Получаем список улиц для выбранного населённого пункта
//     const streets = await fetchStreets(query, cityRef);

//     // Рендерим результаты в select #courier-street-selection
//     renderDropdownOptions(
//         courierStreetSelection,
//         streets,
//         'Ref',                 // value для <option>
//         'StreetsTypeTranslated' // или 'Description' — зависит от ответа Nova Poshta
//     );

//     // Часто в ответе Nova Poshta для улиц бывает массив с полями StreetDescription,
//     // StreetsType, StreetsTypeCode и т.д. Подставляйте ключи так, как вам нужно
//     // для вывода.
// });

// /**
//  * Обработка выбора улицы (select) для курьера
//  */
// courierStreetSelection.addEventListener('change', (e) => {
//     state.selectedStreetForCourier = e.target.value;
//     courierStreetSearch.value = `Обрано: ${e.target.selectedOptions[0].innerText}`;
// });

/**
 * Обработка выбора типа доставки
 *
 * Показывает/скрывает блоки с адресами для почты и курьера
 */
const postOfficeAddressWindow = document.querySelector(selectors.postOfficeAddressWindow);
const courierAddressWindow = document.querySelector(selectors.courierAddressWindow);
const shippingType = document.querySelectorAll(selectors.shippingType);
shippingType.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.value === 'post-office') {
      postOfficeAddressWindow.classList.remove('hidden');
      courierAddressWindow.classList.add('hidden');
    } else {
      postOfficeAddressWindow.classList.add('hidden');
      courierAddressWindow.classList.remove('hidden');
    }

    state.selectedDelivery = event.target.value;
  });
});

const templateExample = `https://petschoice.club/cart/41864347975754:1?checkout[email]=customer@example.com&checkout[shipping_address][city]=Lviv&checkout[shipping_address][first_name]=Nikita&checkout[shipping_address][last_name]=Shechenko&checkout[shipping_address][address1]=Ломоносова,55,кв6&checkout[shipping_address][zip]=03022&checkout[shipping_address][country]=Ukraine&checkout[shipping_address][phone]=+380995586745`;

const variantsWithQty = {
  41864347975754: 1,
  41864348041290: 2,
};

const testParams = {
  variantsWithQty,
  email: 'example@gmail.com',
  city: 'Lviv',
  firstName: 'Nikita',
  lastName: 'Shechenko',
  address: 'Ломоносова,55,кв6',
  zip: '03022',
  country: 'Ukraine',
  phone: '+380995586745',
};

const result = createPrefilLink(testParams);

const elementsWithAttachedListeners = [];

function attachTriggerListeners(e = null) {
  if (e && e.type !== 'variant:add') {
    setTimeout(() => {
      attachTriggerListeners();
    }, 500);
    return;
  }
  /**
   * Turn on prefill form when click on checkout buttons
   */
  const checkoutBtns = document.querySelectorAll(selectors.checkoutBtn);
  const buyNowBtns = document.querySelectorAll(selectors.buyNowBtn);
  checkoutBtns?.forEach((btn) => {
    if (elementsWithAttachedListeners.find((el) => el === btn)) return;
    btn.addEventListener('click', checkoutHandler);
    elementsWithAttachedListeners.push(btn);
  });

  buyNowBtns?.forEach((btn) => {
    if (elementsWithAttachedListeners.find((el) => el === btn)) return;
    btn.addEventListener('click', checkoutHandler);
    elementsWithAttachedListeners.push(btn);
  });
}

function removeActiveClasses() {
  document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));
}

// settlementSearch
settlementSearch.addEventListener('focus', () => {
  if (settlementDropdown.children.length > 0) {
    removeActiveClasses();
    settlementDropdown.classList.add('active');
  }
});

settlementDropdown.addEventListener('click', (e) => {
  if (e.target.dataset.value) {
    settlementSearch.value = e.target.textContent;
    state.selectedSettlement = e.target.dataset.value;
    settlementDropdown.classList.remove('active');
    settlementSearch.classList.remove('error');
    settlementSearch.setAttribute('disabled', 'disabled');
    settlementSearchIcon.style.display = 'none';
    settlementSearchClearIcon.style.display = 'block';
  }
});

settlementSearchClearIcon.addEventListener('click', () => {
  state.selectedSettlement = null;
  settlementSearch.value = '';
  settlementSearch.removeAttribute('disabled');
  settlementSearchClearIcon.style.display = 'none';
  settlementSearchIcon.style.display = 'block';
});

// searchPostOffice
searchPostOffice.addEventListener('focus', () => {
  if (postOfficeDropdown.children.length > 0) {
    removeActiveClasses();
    postOfficeDropdown.classList.add('active');
  }
});

postOfficeDropdown.addEventListener('click', (e) => {
  if (e.target.dataset.value) {
    searchPostOffice.value = e.target.textContent;
    state.selectedPostoffice = e.target.dataset.value;
    postOfficeDropdown.classList.remove('active');
    searchPostOffice.classList.remove('error');
    searchPostOffice.setAttribute('disabled', 'disabled');
    postOfficeSearchIcon.style.display = 'none';
    postOfficeSearchClearIcon.style.display = 'block';
  }
});

postOfficeSearchClearIcon.addEventListener('click', () => {
  state.selectedPostoffice = null;
  searchPostOffice.value = '';
  searchPostOffice.removeAttribute('disabled');
  postOfficeSearchClearIcon.style.display = 'none';
  postOfficeSearchIcon.style.display = 'block';
});

// courierSettlementSearch
courierSettlementSearch.addEventListener('focus', () => {
  if (courierSettlementDropdown.children.length > 0) {
    removeActiveClasses();
    courierSettlementDropdown.classList.add('active');
  }
});

courierSettlementDropdown.addEventListener('click', (e) => {
  if (e.target.dataset.value) {
    courierSettlementSearch.value = e.target.textContent;
    state.selectedSettlement = e.target.dataset.value;
    courierSettlementDropdown.classList.remove('active');
    courierSettlementSearch.classList.remove('error');
    courierSettlementSearch.setAttribute('disabled', 'disabled');
    courierSettlementSearchIcon.style.display = 'none';
    courierSettlementClearIcon.style.display = 'block';
  }
});

courierSettlementClearIcon.addEventListener('click', () => {
  state.selectedSettlement = null;
  courierSettlementSearch.value = '';
  courierSettlementSearch.removeAttribute('disabled');
  courierSettlementClearIcon.style.display = 'none';
  courierSettlementSearchIcon.style.display = 'block';
});

inputsWrappers.forEach(inputWrapper => {
  inputWrapper.addEventListener('click', () => {
    const radioInput = inputWrapper.querySelector('input[type="radio"]');

    if (radioInput && !radioInput.checked) {
      radioInput.checked = true;
      radioInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
});

firstNameInput.addEventListener('input', () => {
  firstNameInput.value = firstNameInput.value.replace(/[^\u0400-\u04FF]/g, '');
  firstNameInput.classList.remove('error');
  handleErrorMessage();
});

lastNameInput.addEventListener('input', () => {
  lastNameInput.value = lastNameInput.value.replace(/[^\u0400-\u04FF]/g, '');
  lastNameInput.classList.remove('error');
  handleErrorMessage();
});

emailImput.addEventListener('input', () => {
  emailImput.classList.remove('error');
  handleErrorMessage();
});

/**
 * Handle phone input. Add +380 to the beginning of the phone number
 */
phoneInput.addEventListener('input', (event) => {
  let value = event.target.value;
  if (value === '') return;

  if (value === '+' || value === '38' || value === '0') {
    value = '+380';
  }

  if (!value.startsWith('+380')) {
    if (value.startsWith('+')) {
      value = '+380' + value.slice(1).replace(/^38|0/, '');
    } else if (value.startsWith('38')) {
      value = '+380' + value.slice(2);
    } else if (value.startsWith('0')) {
      value = '+380' + value.slice(1);
    } else {
      value = '+380' + value;
    }
  }

  event.target.value = value;

  phoneInput.classList.remove('error');
  handleErrorMessage();
});

function validatePrefillForm() {
  const firstNameField = document.querySelector(selectors.firstName);
  const lastNameField = document.querySelector(selectors.lastName);
  const phoneField = document.querySelector(selectors.phone);
  const emailField = document.querySelector(selectors.email);
  const settlementSearchField = document.querySelector(selectors.settlementSearch);
  const searchPostOfficeField = document.querySelector(selectors.searchPostOffice);
  const courierSettlementSearchField = document.querySelector(selectors.courierSettlementSearch);
  const errorMessage = document.querySelector(selectors.errorMessage);

  const firstName = firstNameField?.value.trim();
  const lastName = lastNameField?.value.trim();
  const phoneNumber = phoneField?.value.trim();
  const emailAddress = emailField?.value.trim();
  const settlementSearch = settlementSearchField?.value.trim();
  const searchPostOffice = searchPostOfficeField?.value.trim();
  const courierSettlementSearch = courierSettlementSearchField?.value.trim();

  [firstNameField, lastNameField, phoneField, emailField, settlementSearchField, searchPostOfficeField, courierSettlementSearchField, errorMessage].forEach(field => {
    if (field) field.classList.remove('error');
  });

  let isValid = true;

  // const cyrillicRegex = /^[\u0400-\u04FF]+$/;
  if (!firstName) {
    firstNameField?.classList.add('error');
    isValid = false;
  }

  if (!lastName) {
    lastNameField?.classList.add('error');
    isValid = false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailAddress)) {
    emailField?.classList.add('error');
    isValid = false;
  }

  const phoneRegex = /^\+38\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    phoneField?.classList.add('error');
    isValid = false;
  }

  if (state.selectedDelivery === 'post-office' && !settlementSearch) {
    settlementSearchField?.classList.add('error');
    isValid = false;
  }

  if (state.selectedDelivery === 'post-office' && !searchPostOffice) {
    searchPostOfficeField?.classList.add('error');
    isValid = false;
  }

  if (state.selectedDelivery === 'courier' && !courierSettlementSearch) {
    courierSettlementSearchField?.classList.add('error');
    isValid = false;
  }

  if (!isValid) {
    errorMessage.classList.add('error');
  }

  return isValid;
}

function handleErrorMessage() {
  const firstNameField = document.querySelector(selectors.firstName);
  const lastNameField = document.querySelector(selectors.lastName);
  const phoneField = document.querySelector(selectors.phone);
  const emailField = document.querySelector(selectors.email);
  const settlementSearchField = document.querySelector(selectors.settlementSearch);
  const searchPostOfficeField = document.querySelector(selectors.searchPostOffice);
  const courierSettlementSearchField = document.querySelector(selectors.courierSettlementSearch);
  const errorMessage = document.querySelector(selectors.errorMessage);

  const isErrorPresent = [firstNameField, lastNameField, phoneField, emailField, settlementSearchField, searchPostOfficeField, courierSettlementSearchField].some(element => {
    return element?.classList.contains('error');
  });
  
  if (isErrorPresent) {
    errorMessage?.classList.add('error');
  } else {
    errorMessage?.classList.remove('error');
  }
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.settlement-search__wrapper')) {
    settlementDropdown.classList.remove('active');
  }
});

attachTriggerListeners();

document.addEventListener('cart:refresh', attachTriggerListeners);
document.addEventListener('cart:change', attachTriggerListeners);
document.addEventListener('variant:add', attachTriggerListeners);
document.addEventListener('facet:update', attachTriggerListeners);
