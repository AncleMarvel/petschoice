require('dotenv').config();

const config = {
  nodeEnv: process.env.NODE_ENV || 'production',
  isLocal: process.env.IS_LOCAL || 'true',
  shopify: {
    shopName: process.env.SHOPIFY_SHOP_NAME,
    apiKey: process.env.SHOPIFY_API_KEY,
    password: process.env.SHOPIFY_API_PASSWORD,
    apiVersion: process.env.SHOPIFY_API_VERSION,
    locationId: process.env.SHOPIFY_LOCATION_ID,
  },
  novapost: {
    apiKey: process.env.NOVAPOST_API_KEY,
    auth: {
      development: {
        username: process.env.NOVAPOST_AUTH_USERNAME_DEV || 'web',
        password: process.env.NOVAPOST_AUTH_PASSWORD_DEV || 'web'
      },
      production: {
        username: process.env.NOVAPOST_AUTH_USERNAME_PROD,
        password: process.env.NOVAPOST_AUTH_PROD_PASSWORD_PROD
      }
    },
    xml: {
      development: {
        organization: process.env.NOVAPOST_ORGANIZATION_DEV || 'NPL_A1',
        warehouse: process.env.NOVAPOST_WAREHOUSE_DEV || ''
      },
      production: {
        organization: process.env.NOVAPOST_ORGANIZATION_PROD,
        warehouse: process.env.NOVAPOST_WAREHOUSE_PROD
      }
    },
    urls: {
      development: process.env.NOVAPOST_URL_DEV || 'https://api-nps.np.work/wms_test/ws/depositorExchane.1cws',
      production: process.env.NOVAPOST_URL_PROD || 'https://api-nps.np.work/wms/ws/depositorExchane.1cws'
    }
  }
}

module.exports = config;
