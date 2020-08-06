import initApi from "./apiConfig/apiConfig";
import { API_URLS } from "../constant/api/apiConstants";
export function crawlerData () {
  return initApi(false).get(API_URLS.CRAWLER_DATA)
}