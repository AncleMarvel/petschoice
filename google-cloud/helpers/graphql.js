const getAllStocks = (after) => `query inventoryItems($first: Int! ${ after ? ',$after: String!' : '' }, $locationId: ID!) {
  inventoryItems(first: $first ${ after ? ', after: $after' : '' }) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        sku
        inventoryLevel(locationId: $locationId) {
          quantities(names: ["available"]) {
            quantity
          }
        }
      }
    }
  }
}`;

const getAllOrders = (after) => `query getOpenedOrders($first: Int! ${after ? ',$after: String!' : ''}) {
  orders(first: $first ${after ? ', after: $after' : ''}, query: "status:open") {
    edges {
      cursor
      node {
        name
        id
        legacyResourceId
        createdAt
      }
    }
    pageInfo {
      hasNextPage
    }
  }
}`;

const inventoryAdjust = `mutation inventoryAdjustQuantities($input: InventoryAdjustQuantitiesInput!) {
  inventoryAdjustQuantities(input: $input) {
    userErrors {
      field
      message
    }
    inventoryAdjustmentGroup {
      createdAt
      reason
      referenceDocumentUri
      changes {
        name
        delta
      }
    }
  }
}`;

const getShopMetafield = `query getMetafield($namespace: String!, $key: String!){
	shop {
    metafield(namespace: $namespace, key: $key) {
      value
      legacyResourceId
    }
  }
}`;

const getOrderMetafield = `query getMetafield($namespace: String!, $key: String!, $id: ID!){
	order(id: $id) {
    metafield(namespace: $namespace, key: $key) {
      value
      legacyResourceId
    }
  }
}`;

const getFulfillmentOrders = `query GetFulfillmentOrders($id: ID!) {
  order(id: $id) {
    fulfillmentOrders(first: 10) {
      edges {
        node {
          id
          lineItems(first: 50) {
            edges {
              node {
                id
                lineItem {
                  quantity
                }
              }
            }
          }
        }
      }
    }
  }
}`;

const fulfillmentCreate = `mutation fulfillmentCreate($fulfillment: FulfillmentInput!, $message: String) {
  fulfillmentCreate(fulfillment: $fulfillment, message: $message) {
    fulfillment {
      status
    }
    userErrors {
      field
      message
    }
  }
}`;

const orderCancel = `mutation orderCancel($notifyCustomer: Boolean, $orderId: ID!, $reason: OrderCancelReason!, $refund: Boolean!, $restock: Boolean!, $staffNote: String) {
  orderCancel(notifyCustomer: $notifyCustomer, orderId: $orderId, reason: $reason, refund: $refund, restock: $restock, staffNote: $staffNote) {
    job {
      done
      id
    }
    orderCancelUserErrors {
      code
      field
      message
    }
    userErrors {
      field
      message
    }
  }
}`;

module.exports = {
  getAllStocks,
  getAllOrders,
  inventoryAdjust,
  getShopMetafield,
  getOrderMetafield,
  fulfillmentCreate,
  getFulfillmentOrders,
  orderCancel
}