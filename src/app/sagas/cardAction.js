import { getCart, AddToCart, RemoveToCart } from "../crud/card.crud"
import { takeEvery, put, call } from 'redux-saga/effects';
import { cartActions } from "../store/ducks/cardReducer";
import { cartActionTypes } from "../constant";
function* getCarts() {
  try {
    const result = yield call(getCart)
    yield put(cartActions.loadingcartSuccessful(result.data))
  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(cartActions.fail(error));
  }
}
function* addtoCart({ payload }) {
  const { number, modelId, itemId } = payload
  try {
    const result = yield call(AddToCart, { number, modelId, itemId })
    yield put(cartActions.addtocartSuccessful(result.data))
  } catch (err) {
    console.log(err.response);
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(cartActions.fail(error));
  }
}
function* deleteCart({ payload }) {
  let { carts } = payload
  try {
    let url = JSON.stringify([carts])
    const result = yield call(RemoveToCart, { url })
    yield put(cartActions.deleteCartSuccessful(result.data))
  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(cartActions.fail(error));
  }
}


function* cartAction() {
  yield takeEvery(cartActionTypes.loadingCart, getCarts)
  yield takeEvery(cartActionTypes.addtocart, addtoCart)
  yield takeEvery(cartActionTypes.deleteCart, deleteCart)
}
export default cartAction