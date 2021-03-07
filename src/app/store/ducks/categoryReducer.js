
import { categoryActionTypes } from "../../constant/index"
const initialAuthState = {
  pending: false,
  category: null,
  error: null
}
export const categoryReducer =

  (state = initialAuthState, action) => {
    switch (action.type) {
      case categoryActionTypes.getCategory:
        return {
          ...state, pending: !state.pending
        }
      case categoryActionTypes.getCategorySuccessFul:
        return {
          ...state, category: action.payload, pending: !state.pending
        }
      case categoryActionTypes.fail:
        return {
          ...state, pending: !state.pending, error: action.payload
        }
      default:
        return state;
    }
  }
export const categoryActions = {
  getCategory: () => ({ type: categoryActionTypes.getCategory }),
  getCategorySuccessful: (payload) => ({ type: categoryActionTypes.getCategorySuccessFul, payload }),
  fail: (payload) => ({ type: categoryActionTypes.fail, payload })
}
