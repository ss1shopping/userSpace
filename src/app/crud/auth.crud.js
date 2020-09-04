import { API_URLS } from "../constant/api/apiConstants";
import initApi from "./apiConfig/apiConfig";

export function login(data) {
   return initApi(false).post(API_URLS.LOGIN, data)
   
  }

export function register(data) {
 
   return initApi(false).post(API_URLS.REGISTER, data)
}
export function activeAccount(token){
 return initApi(false).get(API_URLS.CHECK_ACCTIVE_ACCOUNT(token))
}
export function checkAuth() {
  return initApi().get(API_URLS.CHEK_AUTH_USER);
}
export function GenNewToken(refreshToken){
  return initApi().post(API_URLS.REFRES_TOKEN,refreshToken)
}

export function requestPassword(email) {
  return initApi().post(API_URLS.RESET_PASSWORD, { email });
}

export function refreshToken(refresh_token) {
  return initApi().post(API_URLS.REFRES_TOKEN, { refresh_token });
}
