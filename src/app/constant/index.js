

 export const auth={
  loading:"LOADING",
  loading_success:"LOADING_SUCCESS",
  loading_failure:"LOADING_FAILURE"
}
export const error={
 error:"newError",
 error_clear:"clear_error",
 
}
export const itemActionTypes={
  loadingitem:"[ACTION LOADING ITEM]",
  loadingItemSuccess:"[ACTION LOADING SUCCESSFUL]",
  Error: '[Error] Action',
  DeleteError: '[Delte Error] Action',
  uploadItem:"[ACTION UPLOAD ITEM]",
  uploadItemSuccess:"[ACTION UPLOAD ITEAM SUCCESSFUL]",
  loadTotal:"[Action Loading all infor]",
  loadTotalSuccessfull:"[Action loading infor successful]",
  loadTotalFailure:"[Action loading  infor fail]",
  
  
}
export const authActionTypes = {
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
  activeAccount:'[Active account]',
  activeAccountSuccess:'[Active account Success]',
  ActiveAccountFailure:'[Active account Failure]',
  refreshToken:"[Refresh Token]",
  refreshTokenSuccessFul:"[Refresh Token Success]",
  refreshTokenFailure:"[Refresh Token Faliure]"
};
export const totalActionTypes={
  loadingInforChart:'[Action Loading Infor Chart]',
  loadingInforChartSuccessful:`[Action loading Infor Chart Success]`,
  loadingInforChartFailure:`[Action Loading Infor Chart Fail]`
}
