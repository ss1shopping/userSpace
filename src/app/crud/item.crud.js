import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";
import { stringify } from 'querystring'
const config = {
  header: { "content-type": "multiple/form-data" }
}
export function getdata(data) {
	const operations = stringify(data);
  return initApi(false).get(`${API_URLS.GET_ITEMS}?${operations}`)
}
export function searchItem(data) {

  return initApi(false).get(API_URLS.SEARCH_ITEM(data))
}
export function addItem(data) {
  return initApi(true).post(API_URLS.ADD_ITEM, data)
}
export function addImage(data) {
  return initApi(true).post(API_URLS.ADD_IMAGE_ITEM, data, config)
}
export function deleteImageItem(data) {
  return initApi(true).post(API_URLS.DELETE_IMAGE_ITEM)
}
export function updateItem(data) {
  return initApi(true).put(API_URLS.UPDATE_ITEM, data)
}
export function deleteItem(data) {

  return initApi(true).delete(API_URLS.DELETE_ITEM(data))
}
export function getItem(data) {
  return initApi(true).get(API_URLS.GET_ITEM(data))
}
export function updateModel(data) {
  return initApi(true).put(API_URLS.UPDATE_MODEL, data)
}
export function updateTier_variation(data) {
  return initApi(true).put(API_URLS.UPDATE_TIER_VARIATIOM, data)
}


export function updateView(data) {
  return initApi(false).post(API_URLS.UPDATE_VIEW, data)
}
