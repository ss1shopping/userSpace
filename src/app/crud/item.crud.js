import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";

export function getdata(data) {
  
   return initApi(false).get(API_URLS.GET_ITEM(data))
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
  return initApi(false).put(API_URLS.UPDATE_ITEM,data)
}
export function deleteItem(data){
  return initApi(false).post(API_URLS.DELETE_ITEM)
}
export function loadingTotalInformation(data){
  return initApi(false).get(API_URLS.GET_TOTAL_INFOR(data))
}