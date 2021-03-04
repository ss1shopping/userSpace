import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function getAllOrders(data) {
  return initApi(true).get(API_URLS.GETALLORDER(data))
}
export function getAllOrdersUser(data) {
  console.log(data);
  return initApi(true).get(API_URLS.GET_ALL_ORDER_USER(data))
}
export function updateOrder(data) {
  return initApi(true).put(API_URLS.UPDATE_ORDER, data)
}
export function listOrderUser(data) {
  return initApi(true).get(API_URLS.UPDATE_ORDER, data)
}
export function cancelledOrder(data) {
  return initApi(true).put(API_URLS.UPDATE_ORDER, data)
}
export function checkout(data) {
  return initApi(true).post(API_URLS.CHECK_OUT, data)
}