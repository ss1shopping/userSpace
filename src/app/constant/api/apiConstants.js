//   https://servertien.herokuapp.com
export const API_URL = "http://localhost:4000";

export const API_URLS = {
  REGISTER: '/users',
  LOGIN: '/users/login',
  CHECK_ACCTIVE_ACCOUNT:(token)=>`/users/login/${token}`,
  REFRES_TOKEN: '/users/refresh',
  CHEK_AUTH_USER: '/api/current',
  RESET_PASSWORD: '/api/reset-password',
  GET_ITEM: (data)=> `/item/limit=${data.limit}/page=${data.page}`, 
  ADD_ITEM:'/shopping',
  UPDATE_ITEM:"/item",
  DELETE_ITEM:"/shopping",
  ADD_IMAGE_ITEM:"/shopping/upload",
  DELETE_IMAGE_ITEM:"/shopping/upload",
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
  // tu tao
  CRAWLER_DATA:"/crawler/getdata",
  GET_TOTAL_INFOR:(data)=>`/total/getallinfor/day=${data.day}/month=${data.month}/year=${data.year}`,
  GET_INFOR_CHART:(data)=>`total/getallinfor/kind=${data.kind}`,
  GET_ALL_LIST_ORDER:"/history",
};
