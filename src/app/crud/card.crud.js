import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function AddToCart(data) {
  return initApi(true).post(API_URLS.ADD_TO_CART, data)
}
export function UpdateCart(data) {
  return initApi(true).put(API_URLS.UPDATE_CART, data)
}
export function RemoveToCart(data) {
  return initApi(true).delete(API_URLS.REMOVE_TO_CART(data))
}
export function emtpyCart(data) {
  return initApi(true).delete(API_URLS.EMPTY_CART, data)
}
export function getCart(data) {
  return initApi(true).get(API_URLS.GET_CART, data)
}
