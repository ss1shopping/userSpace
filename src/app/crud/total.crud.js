import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";
export function getinforchart(data) {
    console.log(data);
    return initApi(true).get(API_URLS.GET_INFOR_CHART(data))
   }
export function getAllListOder(data){
    return initApi(true).get(API_URLS.GET_ALL_LIST_ORDER(data))
}

export function getAllHistory(){
 
    return initApi(true).get(API_URLS.LIST_HISTORY)
}