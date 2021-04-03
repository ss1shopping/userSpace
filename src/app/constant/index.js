

export const auth = {
  loading: "LOADING",
  loading_success: "LOADING_SUCCESS",
  loading_failure: "LOADING_FAILURE"
}
export const error = {
  error: "newError",
  error_clear: "clear_error",

}
export const itemActionTypes = {
  loadingitem: "[ACTION LOADING ITEM]",
  loadingItemSuccess: "[ACTION LOADING SUCCESSFUL]",
  Error: '[Error] Action',
  DeleteError: '[Delte Error] Action',
  addItem: "[ACTION UPLOAD ITEM]",
  addItemSuccess: "[ACTION UPLOAD ITEAM SUCCESSFUL]",

  ItemChoseToEdit: "[item choose to edit]",
  updateItem: "[update Item]",
  updateItemSuccesful: "[update item succcesful]",

  uploadItem: "[upload item]",
  uploadItemSuccess: "[upload item successful]",
  addImage: "[add image ]",
  addImageSuccessful: "[add image successful]",

  deleteItem: "[delete item]",
  deleteItemSuccessful: "[delete item successful]",
  countpage: "[count page]",
  resetItem: "[reset item]",

  getItem: "[get item detail]",
  getItemSuccessful: "[get item successful]",

  searchItem: '[search item]',
  searchItemSuccessful: "[search item successful]",

  itemToUpload: "[item to upload]",
  setTierVariation: "[set tier variation]",
  setModel: '[set model of item]',
  setModel1: '[set model1 of item]',
  setTotalModel: '[set total model]',
  setprice: "[set price]",
  setQuantity: "[set quantity]"
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
  activeAccount: '[Active account]',
  activeAccountSuccess: '[Active account Success]',
  ActiveAccountFailure: '[Active account Failure]',
  refreshToken: "[Refresh Token]",
  refreshTokenSuccessFul: "[Refresh Token Success]",
  refreshTokenFailure: "[Refresh Token Faliure]",
  Loadingcart: "[Loading Cart]",
  LoadingcartSuccess: "[Loading cart Succesful]",
  ResetPassword: '[resetPassword]',
  ResetpasswordCorrectemail: "[resetpassword correct email]",
  resetpasswordInCorectemail: "[resetpassword incorrect email]",
  ChangeNewpassword: '[Change new password]',
  ChangeNewpasswordSuccessful: "[Change new password correct]",
  ChangeNewpasswordFailure: "[Change new password incorrect]",

  getCurrentUser: "[getCurrentUser]",
  getCurrentUserSuccessful: "[getCurrentUserSuccessful]",

  Updateuser: "[update user]",
  UpdateUserSuccessFull: "[update user successful]"
};
export const totalActionTypes = {
  loadingInforChart: '[Action Loading Infor Chart]',
  loadingInforChartSuccessful: `[Action loading Infor Chart Success]`,
  loadingInforChartFailure: `[Action Loading Infor Chart Fail]`,
  loadingAllListOrder: `[Action Loading All list order]`,
  loadingAllLIstOrderSuccessful: "[Action Loading All list order succesfull]",
  loadingAllListOrderFailure: "[Action Loading All All list order failure]",
  loadinglistOfHistoryOfUser: "[Action loading list of history User]",
  loadinglistOfHistoryOfUserSuccuessFull: "[Action loading list if history user Successful]",
  loadinglistOfHistoryOfUserfailure: "[Action loading list histoey User Failure]",
  deleteOrder: "[DeleteOrder]",
  deleteOrderSuccessful: "[DeleteOrder SuccessFul]",
  deleteOrderfail: "[DeleteOrder failure]",
  exportBilling: 'Export Billing',
  exportBillingSuccessful: "[export billing successful]",
  exportBillingFailure: '[export billing failure]',
  cancelledBilling: '[Cancelled Billing ]',
  cancelledBillingSuccessFul: "[Cancelled Billing Succesfful]",
  cancelledBillingFailure: '[cancelled Biiling Failure]',
  finishBilling: '[finish billing]',
  finishBillingSuccessful: "[finish billing SuccessFul]",
  finishBillingFailure: "[finish billing Failure]"

}
export const orderActionTypes = {
  getAllOrder: "[get all order]",
  getAllOrderSuccess: "[getall order success]",
  fail: "[fail]",
  setlink: "[set link]",
  isCancelled: "[is cancelled]",
  setkeyword: "[set keyword]",
  updateOrder: "[update order]",
  updateOrderSuccessFull: "[update order successfull]",
  canceledOrder: "[cancelled order]",
  cancelledOrderSuccess: "[cancelled order success]",
  checkout: '[checkout]',
  checkoutSuccessfull: "[checkout successful]",
  getAllOrderUser: "[get all order user]",
  getAllOrderUserSuccessful: "[get all order user successful]"
}
export const layoutActionTypes = {
  changeNumber: "[change number layout]",
  changeTranport: "[change tranport]",
  changeOrder: '[change order]',
  changeItem: "[cahnge item]"
}
export const cartActionTypes = {
  loadingCart: "[loading cart]",
  loadingcartSuccessful: "[loading cart successfull]",
  fail: "[fail]",
  addtocart: "[add to cart]",
  addtocartSuccessful: '[add to cart successful]',
  updateCart: "[update cart]",
  updateCartSuccessful: "[update CartSuccessfull]",
  emtpyCart: "[empty cart ]",
  emtpyCartSuccessful: "[empty cart successful]",
  deleteCart: "[delete cart]",
  deleteCartSuccessful: "[delete cart successful]",
  setAttributes: "[ set attribute]",
  setcart: "[set cart]",
  setSelectItem: "[set select item]",
  setAgainSelecItem: '[set again item]',
  setTotalMoney: "[set total money]",
  setNewCart: "[set new cart]"

}
export const ratingActionTypes = {
  getRating: '[get Rating]',
  getRatingSuccessfull: "[get Rating Successful]",
  createRating: "[create rating]",
  createRatingSuccess: '[create Rating Successful]',
  deleteRating: "[delete Rating]",
  deleteRatingSuccess: '[delete Rating successful]',
  fail: '[fail]',
  changeRate: "[change rating]",
  setTotalRating: "[ set total rating]"
}
export const categoryActionTypes = {

  getCategory: "[get category]",
  getCategorySuccessFul: '[get category successful]',
  fail: "[category fail]",
  chooseCategoryToAdd: "[choose category]"
}