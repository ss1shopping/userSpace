//https://servertien.herokuapp.com
export const API_URL = "http://localhost:4000";

export const API_URLS = {
  REGISTER: '/users',
  LOGIN: '/users/login',
  CHECK_ACCTIVE_ACCOUNT: (token) => `/users/login/${token}`,
  REFRES_TOKEN: '/users/refresh',
  CHEK_AUTH_USER: '/api/current',
  RESET_PASSWORD: '/users/login/forgotpassword',
  Change_Password: (data) => `/users/login/forgotpassword/confirm/${data.token}`,
  LOADING_CART: "/users/loadingcart",
  GET_ITEMS: (data) => `/item/get` + `${data.url}`,
  ADD_ITEM: '/item',
  UPDATE_ITEM: "/item",
  DELETE_ITEM: "/item/delete",
  ADD_IMAGE_ITEM: "/item/uploadImage",
  DELETE_IMAGE_ITEM: "/shopping/upload",

  UPDATE_VIEW: "/item/update-view",
  GET_ITEM: (data) => `/item/get-one/${data.id}`,
  ADD_TO_CART: "/cart/add",
  UPDATE_CART: "/cart/update",
  REMOVE_TO_CART: (data) => `/cart/remove/${data.url}`,
  EMPTY_CART: `/cart/empty-cart`,
  GET_CART: `/cart/get`,
  // LIST_HISTORY: "/history",
  GET_ALL_ORDER_USER: (data) => `/order/getall/user/order` + `${data.url}`,
  GETALLORDER: (data) => `/order/getAll` + `${data.url}`,
  UPDATE_ORDER: "order/change-status",
  // GET_ALL_ORDER_USER: "order/getall/user/order",
  CANCELLED_ORDER: "order/canceled-order",
  CHECK_OUT: "/order/checkout",

  GET_CATEGORY: "/category/get",

  GET_LIST_RATING: (data) => "/review/get" + `${data.url}`,
  CREATE_RATING: "/review/create",
  DELETE_RATING: (data) => `review/delete/${data.id}`,
  // LIST_HISTORY_OF_USER: (data) => `/history/user/limit=${data.limit}/page=${data.page}`,
  // EXPORT_BIllING: (data) => `/history/export/${data.id}`,
  // CANCELLING_BILLING: (data) => `history/cancelled/${data.id}`,
  // FISHISH_BILLING: (data) => `history/finish/${data.id}`,
  // DELETE_HISTORY: "/history/delete",


  GET_ORDER_DETAILED: (orderId) => `/api/orders/${orderId}`,
  GET_CHECKOUT: (projectId) => `/api/projects/${projectId}`,
  GET_PRODUCTS_SVG: (productsId) => `/api/products/${productsId}/svg`,
  GET_SAVE_CHANGE_PRODUCT: (productsId) => `/api/products/${productsId}`,


  GET_TOTAL_INFOR: (data) => `/total/getallinfor/day=${data.day}/month=${data.month}/year=${data.year}`,
  GET_INFOR_CHART: (data) => `total/getallinfor/kind=${data.kind}`,
  GET_ALL_LIST_ORDER: (data) => `/history/limit=${data.limit}/page=${data.page}/status=${data.status}`,
};
