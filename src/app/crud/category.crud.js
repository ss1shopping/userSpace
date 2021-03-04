import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function getCategories() {
  return initApi(true).get(API_URLS.GET_CATEGORY)
}