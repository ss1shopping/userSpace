
import { cartActionTypes } from "../../constant/index"
const initialAuthState = {
  pending: false,
  cart: [],
  totalMoney: 0,
  listOrder: [],
  selectItem: [],
  statusAddnewItem: false,
  attrs: { number: 1, checked: false, shopName: "", value: {} },
  error: ""
}
export const cartReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case cartActionTypes.loadingCart:
      return {
        ...state, pending: !state.pending
      }
    case cartActionTypes.loadingcartSuccessful:
      return {
        ...state, pending: !state.pending, cart: action.payload
      }
    case cartActionTypes.fail:
      return {
        ...state, pending: !state.pending, error: action.payload
      }
    case cartActionTypes.setAttributes:
      return {
        ...state, attrs: action.payload
      }
    case cartActionTypes.setcart:
      return {
        ...state, cart: action.payload
      }
    case cartActionTypes.addtocart:
      return {
        ...state, pending: !state.pending,
      }
    case cartActionTypes.addtocartSuccessful:
      return {
        ...state, pending: !state.pending, statusAddnewItem: !state.statusAddnewItem
      }
    case cartActionTypes.setSelectItem:
      return {
        ...state, selectItem: state.selectItem.concat(action.payload)
      }
    case cartActionTypes.setAgainSelecItem:
      return {
        ...state, selectItem: action.payload
      }
    case cartActionTypes.setTotalMoney:
      return {
        ...state, totalMoney: action.payload
      }
    case cartActionTypes.setNewCart:
      return {
        ...state, cart: action.payload
      }
    default:
      return state;
  }
}

export const cartActions = {
  loadingCart: () => ({ type: cartActionTypes.loadingCart }),
  loadingcartSuccessful: (payload) => ({ type: cartActionTypes.loadingcartSuccessful, payload }),
  fail: (payload) => ({ type: cartActionTypes.fail, payload }),
  setAttribute: (payload) => ({ type: cartActionTypes.setAttributes, payload }),
  setCart: (payload) => ({ type: cartActionTypes.setcart, payload }),
  addtocart: (itemId, number, modelId) => ({ type: cartActionTypes.addtocart, payload: { itemId, number, modelId } }),
  addtocartSuccessful: (payload) => ({ type: cartActionTypes.addtocartSuccessful, payload }),
  setSelectItem: (payload) => ({ type: cartActionTypes.setSelectItem, payload }),
  setAgainSelecItem: (payload) => ({ type: cartActionTypes.setAgainSelecItem, payload }),
  setTotalMoney: (payload) => ({ type: cartActionTypes.setTotalMoney, payload }),
  setNewCart: (payload) => ({ type: cartActionTypes.setNewCart, payload }),

}
