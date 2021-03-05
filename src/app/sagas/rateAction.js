import { takeEvery, put, call } from 'redux-saga/effects';
import { ratingActionTypes } from '../constant';
import { getRating, createRating } from "../crud/rate.crud"
import { rateActions } from '../store/ducks/ratingReducer';

function* getListRating({ payload }) {
  const { page, itemId, starRate } = payload
  try {
    let url = "";
    page ? url = `?page=${page}` : url = "?page=1"
    itemId ? url = url + `&itemId=${itemId}` : url = url + `&itemId=${itemId}`
    starRate ? url = url + `&starRate=${starRate}` : url = url
    let result = yield call(getRating, { url })
    console.log(result.data.data);
    yield put(rateActions.getRatingSuccess(result.data.data))

  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(rateActions.fail(error));
  }
}
function* createNewRating({ payload }) {
  const { itemId, starRate, review } = payload
  console.log(payload);
  try {
    // let url = "";
    // page ? url = `?page=${page}` : url = "?page=1"
    let result = yield call(createRating, { itemId, review, starRate })
    yield put(rateActions.createRatingSuccess(result.data))

  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(rateActions.fail(error));
  }
}
function* ratingAction() {
  yield takeEvery(ratingActionTypes.getRating, getListRating)
  yield takeEvery(ratingActionTypes.createRating, createNewRating)

}
export default ratingAction