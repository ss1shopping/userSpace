"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authActionTypes = exports.itemActionTypes = exports.error = exports.auth = void 0;
var auth = {
  loading: "LOADING",
  loading_success: "LOADING_SUCCESS",
  loading_failure: "LOADING_FAILURE"
};
exports.auth = auth;
var error = {
  error: "newError",
  error_clear: "clear_error"
};
exports.error = error;
var itemActionTypes = {
  loadingitem: "[ACTION LOADING ITEM]",
  loadingItemSuccess: "[ACTION LOADING SUCCESSFUL]",
  Error: '[Error] Action',
  DeleteError: '[Delte Error] Action',
  uploadItem: "[ACTION UPLOAD ITEM]",
  uploadItemSuccess: "[ACTION UPLOAD ITEAM SUCCESSFUL]"
};
exports.itemActionTypes = itemActionTypes;
var authActionTypes = {
  Login: '[Login] Action',
  LoginSuccess: '[Login Success] Action',
  CheckAuth: '[Check Auth] Action',
  CheckAuthSucces: '[Check Auth Success] Action',
  CheckAuthError: '[Check Auth Error] Action',
  Logout: '[Logout] Action',
  Register: '[Register] Action',
  RegisterSuccess: '[Register Success] Action',
  UserLoaded: '[Load User] Auth API',
  Error: '[Error] Action',
  DeleteError: '[Delte Error] Action',
  ResetPasswword: '[Reset Password] Action',
  activeAccount: '[Active account]',
  activeAccountSuccess: '[Active account Success]',
  ActiveAccountFailure: '[Active account Failure]',
  refreshToken: "[Refresh Token]",
  refreshTokenSuccessFul: "[Refresh Token Success]",
  refreshTokenFailure: "[Refresh Token Faliure]"
};
exports.authActionTypes = authActionTypes;