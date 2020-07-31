//export const API_URL = "https://server.bmtec.dev7.sibers.com";
export const API_URL = "";

export const API_URLS = {
  REGISTER: '/api/register',
  LOGIN: '/users/login',
  REFRES_TOKEN: '/api/token/refresh',
  CHEK_AUTH_USER: '/api/current',
  RESET_PASSWORD: '/api/reset-password',
  CONVERT_DXF: '/api/to-svg',
  MATERIAL_DATA: '/api/product/options',
  SAVE_PRODUCTS: '/api/projects/checkout',
  GET_QUOTES_DATA: '/api/quotes',
  GET_ORDERS_DATA: '/api/orders',
  GET_SAVE_AS_QUOTE: (projectId) => `/api/projects/${projectId}/save-as-quote`,
  GET_ORDER_DETAILED: (orderId) => `/api/orders/${orderId}`,
  GET_CHECKOUT: (projectId) => `/api/projects/${projectId}`,
  GET_PRODUCTS_SVG: (productsId) => `/api/products/${productsId}/svg`,
  GET_SAVE_CHANGE_PRODUCT: (productsId) => `/api/products/${productsId}`,
  GET_ORDER_TYPES: '/api/orders/types/all',
  CHANGE_ORDER_TYPE: (orderId) => `/api/orders/${orderId}/change-type`,
};
