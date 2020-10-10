import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";
export function getinforchart(data) {
    console.log(data);
    return initApi(false).get(API_URLS.GET_INFOR_CHART(data))
   }
 