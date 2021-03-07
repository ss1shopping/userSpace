
import { ratingActionTypes } from "../../constant/index"
const initialAuthState = {
  pending: false,
  rating: [],
  error: "",
  statusCreateRatingSuccess: false,
  starRate: null,
  totalNumberRate: 0
}
export const rateReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ratingActionTypes.getRating:
      return {
        ...state, pending: !state.pending
      }
    case ratingActionTypes.getRatingSuccessfull:
      return {
        ...state, pending: !state.pending, rating: action.payload
      }
    case ratingActionTypes.createRating:
      return {
        ...state, pending: !state.pending
      }
    case ratingActionTypes.createRatingSuccess:
      return {
        ...state, pending: !state.pending, statusCreateRatingSuccess: !state.statusCreateRatingSuccess
      }
    case ratingActionTypes.fail:
      return {
        ...state, pending: !state.pending, error: action.payload
      }
    case ratingActionTypes.changeRate:
      return {
        ...state, starRate: action.payload
      }
    case ratingActionTypes.setTotalRating:
      return {
        ...state, totalNumberRate: action.payload
      }
    default:
      return state
  }
}

export const rateActions = {
  createRating: (itemId, starRate, review) => ({ type: ratingActionTypes.createRating, payload: { itemId, starRate, review } }),
  createRatingSuccess: (payload) => ({ type: ratingActionTypes.createRatingSuccess, payload }),
  getRating: (page, itemId, starRate) => ({ type: ratingActionTypes.getRating, payload: { page, itemId, starRate } }),
  getRatingSuccess: (payload) => ({ type: ratingActionTypes.getRatingSuccessfull, payload }),
  fail: (payload) => ({ type: ratingActionTypes.fail, payload }),
  changerate: (payload) => ({ type: ratingActionTypes.changeRate, payload }),
  setTotalRating: (payload) => ({ type: ratingActionTypes.setTotalRating, payload })
}