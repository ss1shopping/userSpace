import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";

export function getdata() {
   return initApi(false).get(API_URLS.GET_ITEM)
  }
export function addItem(data){
  return initApi(true).post(API_URLS.ADD_ITEM,data)
}
export function addImage(data){
  return initApi(false).post(API_URLS.ADD_ITEM)
}
export function deleteImageItem(data){
  return initApi(false).delete(API_URLS.DELETE_IMAGE_ITEM)
}
export function updateItem(data){
  return initApi(false).patch(API_URLS.UPDATE_ITEM)
}
export function deleteItem(data){
  return initApi(false).post(API_URLS.DELETE_ITEM)
}