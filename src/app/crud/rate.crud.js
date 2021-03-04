import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function getRating(data) {
  return initApi(false).get(API_URLS.GET_LIST_RATING(data))
}
export function createRating(data) {
  return initApi(true).post(API_URLS.CREATE_RATING, data)
}
export function getAllOrders(data) {
  return initApi(true).get(API_URLS.GETALLORDER(data))
}