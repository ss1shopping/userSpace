import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";
export function getinforchart(data) {
    console.log(data);
    return initApi(true).get(API_URLS.GET_INFOR_CHART(data))
   }
export function getAllListOder(data){
    return initApi(true).get(API_URLS.GET_ALL_LIST_ORDER(data))
}

export function getAllHistory(data){
 
    return initApi(true).get(API_URLS.LIST_HISTORY_OF_USER(data))
}
export function getHistoryofUser(data){
    return initApi(true).get(API_URLS.LIST_HISTORY_OF_USER(data))
}
export function deleteOrder(data){
    
  return initApi(true).post(API_URLS.DELETE_HISTORY,data)
}
export function exportBilling(data){
    return initApi(true).put(API_URLS.EXPORT_BIllING(data))
}
export function cancelledBilling(data){
    return initApi(true).put(API_URLS.CANCELLING_BILLING(data))
}
export function finishBilling(data){
    return initApi(true).put(API_URLS.FISHISH_BILLING(data))
}

