import { takeEvery, put, call } from 'redux-saga/effects';
import { orderActionTypes } from '../constant';
import { cancelledOrder, getAllOrders, updateOrder, checkout, getAllOrdersUser } from "../crud/order.crud"
import { orderActions } from '../store/ducks/orderReducer';
function* getAllOrder({ payload }) {
  let { page, keyword, status, isCancelled } = payload

  try {
    let result;
    let url = ""
    if (!page) {
      url = `?page=${page}`
    } else {
      url = `?page=${page}`
    }
    if (isCancelled === null || undefined) {
      url = url + `&isCancelled=false`
    } else {
      url = url + `&isCancelled=${isCancelled}`
    }
    if (keyword) {
      url = url + `&keyword=${keyword}`
    }
    if (status) {
      url = url + `&status=${status}`
    }
    result = yield call(getAllOrders, { url })
    console.log("order",result);
    yield put(orderActions.getAllOrderSuccess(result.data.data))
  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(orderActions.fail(error));

  }
}
function* getAllOrderUser({ payload }) {
  let { page, userId } = payload

  try {
    let result;
    let url = ""
    if (!page) {
      url = `?page=1`
    } else {
      url = `?page=${page}`
    }
    url = url + `&userId=${userId}`

    result = yield call(getAllOrdersUser, { url })
    console.log(result);
    yield put(orderActions.getAllOrderSuccess(result.data.data))
  } catch (err) {
    console.log(err);
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(orderActions.fail(error));

  }
}
function* updateorder({ payload }) {
  let { id, status } = payload
  try {
    let result = yield call(updateOrder, { id, status })
    yield put(orderActions.updateOrderSuccess(result.data.order))

  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(orderActions.fail(error));
  }
}
function* cancelledorder({ payload }) {
  let { id } = payload
  try {
    let result = yield call(cancelledOrder, { id })
    yield put(orderActions.cancelledOrderSuccessfull(result.data))

  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(orderActions.fail(error));
  }
}
function* checkoutOrder({ payload }) {
  let { carts, phone, address ,shopId} = payload
  try {
    let result = yield call(checkout, { carts, phone, address,shopId })
    yield put(orderActions.checkoutSuccessful(result.data))

  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    console.log(err.response);
    yield put(orderActions.fail(error));
  }
}

function* orderAction() {
  yield takeEvery(orderActionTypes.getAllOrder, getAllOrder)
  yield takeEvery(orderActionTypes.updateOrder, updateorder)
  yield takeEvery(orderActionTypes.canceledOrder, cancelledorder)
  yield takeEvery(orderActionTypes.checkout, checkoutOrder)
  yield takeEvery(orderActionTypes.getAllOrderUser, getAllOrderUser)
}
export default orderAction