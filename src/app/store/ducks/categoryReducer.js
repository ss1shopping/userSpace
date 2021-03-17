
import { categoryActionTypes } from "../../constant/index"
const initialAuthState = {
  pending: false,
  category: null,
  error: null,
  chooseCategoryToAdd: []
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
      case categoryActionTypes.chooseCategoryToAdd:
        return {
          ...state, chooseCategoryToAdd: action.payload
        }
      default:
        return state;
    }
  }
export const categoryActions = {
  getCategory: () => ({ type: categoryActionTypes.getCategory }),
  getCategorySuccessful: (payload) => ({ type: categoryActionTypes.getCategorySuccessFul, payload }),
  fail: (payload) => ({ type: categoryActionTypes.fail, payload }),
  chooseCategoryToAdd: (payload) => ({ type: categoryActionTypes.chooseCategoryToAdd, payload })
}
