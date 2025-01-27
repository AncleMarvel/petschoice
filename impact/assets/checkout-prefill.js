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
function createPrefilLink({ variantsWithQty, email, city, firstName, lastName, address, zip, country, phone }) {
    let variants = '';

    for (const variantId in variantsWithQty) {
        if (variantsWithQty.hasOwnProperty(variantId)) {
            const qty = variantsWithQty[variantId];
            variants += `${variantId}:${qty},`;
        }
    }

    variants = variants.slice(0, -1);

    return `https://petschoice.club/cart/${variants}?checkout[email]=${email}&checkout[shipping_address][city]=${city}&checkout[shipping_address][first_name]=${firstName}&checkout[shipping_address][last_name]=${lastName}&checkout[shipping_address][address1]=${address}&checkout[shipping_address][zip]=${zip}&checkout[shipping_address][country]=${country}&checkout[shipping_address][phone]=${phone}`;
}

const selectors = {
    prefillOverlay: "#prefill-overlay",
    prefillContainer: "#prefill-container",

    prefillForm: "#prefill-form",
    closeBtn: "#close-prefill-form",

    firstName: "#first-name",
    lastName: "#last-name",
    email: "#email",
    phone: "#phone",

    shippingType: '[name="shipping-type"]',

    searchPostOffice: "#search-post-office",
    postOfficeSelection: "#post-office",
    settlementSearch: "#settlement-search",
    settlementSelection: "#settlement-selection",

    area: "#area",
    city: "#city",
    street: "#street",
    house: "#house",
    flat: "#flat",
    postalCode: "#postal-code",
    country: "#country",

    checkoutBtn: '[type="submit"][name="checkout"]',
    buyNowBtn: '[data-shopify="payment-button"].shopify-payment-button',
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

    togglePrefillOverlay();
}

function prefillSubmitHandler(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = document.querySelector(selectors.prefillForm);
    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    const prefillLink = createPrefilLink(data);

    window.location.href = prefillLink;
}

/**
 * Handle submit prefill form
 */
const prefillForm = document.querySelector(selectors.prefillForm);
prefillForm.addEventListener('submit', prefillSubmitHandler);

/**
 * Turn on prefill form when click on checkout buttons
 */
const checkoutBtns = document.querySelectorAll(selectors.checkoutBtn);
const buyNowBtns = document.querySelectorAll(selectors.buyNowBtn);
checkoutBtns?.forEach(btn => {
    btn.addEventListener('click', checkoutHandler);
});

buyNowBtns?.forEach(btn => {
    btn.addEventListener('click', checkoutHandler);
});

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
 * Handle phone input. Add +380 to the beginning of the phone number
 */
const phoneInput = document.querySelector(selectors.phone);
phoneInput.addEventListener('input', (event) => {
    const value = event.target.value;
    if (!value.startsWith('+380')) {
        event.target.value = '+380' + value;
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
        return result.data;
    } else {
        console.error('Ошибка при получении населенных пунктов:', result.errors);
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
    dropdown.innerHTML = '<option value="" selected disabled hidden>Выберите</option>';
    items.forEach((item) => {
        const option = document.createElement('option');
        option.value = item[valueKey];
        if (Array.isArray(textKeys)) {
            option.textContent = textKeys.map(key => item[key]).join(', ');
        } else {
            option.textContent = item[textKeys];
        }
        dropdown.appendChild(option);
    });
}

/**
 * Handle settlement search input
 */
settlementSearch.addEventListener('input', async (event) => {
    const query = event.target.value.trim();
    if (query.length < 2) return; // Игнорируем запросы короче 2 символов

    const settlements = await fetchSettlements(query);
    renderDropdownOptions(settlementSelection, settlements, 'Ref', ['Description', 'AreaDescription']);
});

/**
 * Handle post office search input
 */
searchPostOffice.addEventListener('input', async (event) => {
    const query = event.target.value.trim();
    const settlementRef = settlementSelection.value; // REF выбранного населенного пункта

    if (!settlementRef || query.length < 2) return; // Проверяем выбран ли населенный пункт

    const postOffices = await fetchPostOffices(settlementRef, query);
    renderDropdownOptions(postOfficeSelection, postOffices, 'Ref', 'Description');
});

/**
 * Handle settlement selection change
 * Сбрасывает список отделений при смене населенного пункта
 */
settlementSelection.addEventListener('change', () => {
    postOfficeSelection.innerHTML = '<option value="" selected disabled hidden>Виберіть відділення</option>';
    searchPostOffice.value = '';
});

/**
 * Show post office selection when input focused
 */
searchPostOffice.addEventListener('focus', async () => {
    postOfficeSelection.classList.remove('hidden');
    postOfficeSelection.click();
});

/**
 * Show settlement selection when input focused
 */
settlementSearch.addEventListener('focus', async () => {
    settlementSelection.classList.remove('hidden');
    settlementSelection.click();
});

/**
 * Скрываем подсказки, если клик вне элемента
 */
document.addEventListener('click', (event) => {
    if (!event.target.closest(selectors.postOfficeSelection) && !event.target.closest(selectors.searchPostOffice)) {
        postOfficeSelection.classList.add('hidden');
    }

    if (!event.target.closest(selectors.settlementSelection) && !event.target.closest(selectors.settlementSearch)) {
        settlementSelection.classList.add('hidden');
    }
});

const templateExample = `https://petschoice.club/cart/41864347975754:1?checkout[email]=customer@example.com&checkout[shipping_address][city]=Lviv&checkout[shipping_address][first_name]=Nikita&checkout[shipping_address][last_name]=Shechenko&checkout[shipping_address][address1]=Ломоносова,55,кв6&checkout[shipping_address][zip]=03022&checkout[shipping_address][country]=Ukraine&checkout[shipping_address][phone]=+380995586745`;

const variantsWithQty = {
    41864347975754: 1,
    41864348041290: 2
}

const testParams = {
    variantsWithQty,
    email: 'example@gmail.com',
    city: 'Lviv',
    firstName: 'Nikita',
    lastName: 'Shechenko',
    address: 'Ломоносова,55,кв6',
    zip: '03022',
    country: 'Ukraine',
    phone: '+380995586745'
}

const result = createPrefilLink(testParams);