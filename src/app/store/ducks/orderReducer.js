import { orderActionTypes } from "../../constant/index"
const initialAuthState = {
  pending: false,
  error: "",
  orders: [],
  link: "",
  order: "",
  isCancelled: false,
  orderUpdate: "",
  checkout: false,
}
export const orderReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case orderActionTypes.getAllOrder:
      return {
        ...state, pending: !state.pending,
      }
    case orderActionTypes.getAllOrderSuccess:
      return {
        ...state, pending: !state.pending, orders: action.payload
      }
    case orderActionTypes.getAllOrderUser:
      return {
        ...state, pending: !state.pending
      }
    case orderActionTypes.fail:
      return {
        ...state, pending: !state.pending, error: action.payload
      }
    case orderActionTypes.setlink:
      return {
        ...state, link: action.payload
      }
    case orderActionTypes.setkeyword:
      return {
        ...state, keyword: action.payload
      }
    case orderActionTypes.isCancelled:
      return {
        ...state, isCancelled: action.payload
      }
    case orderActionTypes.updateOrder:
      return {
        ...state, pending: !state.pending
      }
    case orderActionTypes.updateOrderSuccessFull:
      return {
        ...state, pending: !state.pending, orderUpdate: action.payload
      }
    case orderActionTypes.canceledOrder:
      return {
        ...state, pending: !state.pending
      }
    case orderActionTypes.cancelledOrderSuccess:
      return {
        ...state, pending: !state.pending, orderUpdate: action.payload
      }
    case orderActionTypes.checkout:
      return {
        ...state, pending: !state.pending
      }
    case orderActionTypes.checkoutSuccessfull:
      return {
        ...state, pending: !state.pending, checkout: !state.checkout
      }
    default:
      return state
  }
}
export const orderActions = {
  getAllOrder: (page, keyword, status, isCancelled) => ({ type: orderActionTypes.getAllOrder, payload: { page, keyword, status, isCancelled } }),
  getAllOrderSuccess: (payload) => ({ type: orderActionTypes.getAllOrderSuccess, payload }),
  fail: (payload) => ({ type: orderActionTypes.fail, payload }),
  setlink: (payload) => ({ type: orderActionTypes.setlink, payload }),
  setkeyword: (payload) => ({ type: orderActionTypes.setkeyword, payload }),
  setIsCancelled: (payload) => ({ type: orderActionTypes.isCancelled, payload }),
  updateOrder: (id, status) => ({ type: orderActionTypes.updateOrder, payload: { id, status } }),
  updateOrderSuccess: (payload) => ({ type: orderActionTypes.updateOrderSuccessFull, payload }),
  cancelledOrder: (id) => ({ type: orderActionTypes.canceledOrder, payload: { id } }),
  cancelledOrderSuccessfull: (payload) => ({ type: orderActionTypes.cancelledOrderSuccess, payload }),
  checkout: (carts, phone, address,shopId) => ({ type: orderActionTypes.checkout, payload: { carts, phone, address,shopId } }),
  checkoutSuccessful: (payload) => ({ type: orderActionTypes.checkoutSuccessfull, payload }),
  getAllOrdersUser: (page, userId) => ({ type: orderActionTypes.getAllOrderUser, payload: { page, userId } })
}