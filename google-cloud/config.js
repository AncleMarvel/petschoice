require('dotenv').config();

const config = {
  nodeEnv: 'production',
  isLocal: false,
  shopify: {
    shopName: '419319-9b',
    apiKey: '972180233377888806965f6177a56941',
    password: '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',
    apiVersion: '2025-01',
    locationId: '79243968733',
  },
  novapost: {
    apiKey: 'a4f8704e04f9ea609b1bd830e1875d7f',
    auth: {
      development: {
        username: 'web',
        password: 'web'
      },
      production: {
        username: 'api_arkhipenko',
        password: '(MZG22tue+8'
      }
    },
    xml: {
      development: {
        organization: 'NPL_A1',
        warehouse: ''
      },
      production: {
        organization: 'АРХИПЕНКО НАТАЛІЯ ОЛЕКСАНДРІВНА ФОП',
        warehouse: 'KyivSkhid'
      }
    },
    urls: {
      development: 'https://api-nps.np.work/wms_test/ws/depositorExchane.1cws',
      production: 'https://api-nps.np.work/wms/ws/depositorExchane.1cws'
    }
  }
}

module.exports = config;
