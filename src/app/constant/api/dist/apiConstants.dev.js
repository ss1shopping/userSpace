"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URLS = exports.API_URL = void 0;
//export const API_URL = "https://server.bmtec.dev7.sibers.com";
var API_URL = "";
exports.API_URL = API_URL;
var API_URLS = {
  REGISTER: '/users',
  LOGIN: '/users/login',
  CHECK_ACCTIVE_ACCOUNT: function CHECK_ACCTIVE_ACCOUNT(token) {
    return "/users/login/".concat(token);
  },
  REFRES_TOKEN: '/users/refresh',
  CHEK_AUTH_USER: '/api/current',
  RESET_PASSWORD: '/api/reset-password',
  GET_ITEM: '/shopping',
  ADD_ITEM: '/shopping',
  UPDATE_ITEM: "/shopping",
  DELETE_ITEM: "/shopping",
  ADD_IMAGE_ITEM: "/shopping/upload",
  DELETE_IMAGE_ITEM: "/shopping/upload",
  SAVE_PRODUCTS: '/api/projects/checkout',
  GET_QUOTES_DATA: '/api/quotes',
  GET_ORDERS_DATA: '/api/orders',
  GET_SAVE_AS_QUOTE: function GET_SAVE_AS_QUOTE(projectId) {
    return "/api/projects/".concat(projectId, "/save-as-quote");
  },
  GET_ORDER_DETAILED: function GET_ORDER_DETAILED(orderId) {
    return "/api/orders/".concat(orderId);
  },
  GET_CHECKOUT: function GET_CHECKOUT(projectId) {
    return "/api/projects/".concat(projectId);
  },
  GET_PRODUCTS_SVG: function GET_PRODUCTS_SVG(productsId) {
    return "/api/products/".concat(productsId, "/svg");
  },
  GET_SAVE_CHANGE_PRODUCT: function GET_SAVE_CHANGE_PRODUCT(productsId) {
    return "/api/products/".concat(productsId);
  },
  GET_ORDER_TYPES: '/api/orders/types/all',
  CHANGE_ORDER_TYPE: function CHANGE_ORDER_TYPE(orderId) {
    return "/api/orders/".concat(orderId, "/change-type");
  },
  // tu tao
  CRAWLER_DATA: "/crawler/getdata"
};
exports.API_URLS = API_URLS;