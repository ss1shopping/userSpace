import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function getCategories() {
  return initApi(false).get(API_URLS.GET_CATEGORY)
}
export function getListRecomendCategories(data) {
  return initApi(false).get(API_URLS.GET_LIST_RECOMMEND(data))
}