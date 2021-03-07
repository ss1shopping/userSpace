import { takeEvery, put, call } from 'redux-saga/effects';
import { categoryActionTypes } from '../constant';
import { getCategories } from '../crud/category.crud';
import { categoryActions } from '../store/ducks/categoryReducer';
function* getCategory() {

  try {
    const response = yield call(getCategories)
    yield put(categoryActions.getCategorySuccessful(response.data))
  } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack
    yield put(categoryActions.fail(error));
  }
}

function* categoryAction() {

  yield takeEvery(categoryActionTypes.getCategory, getCategory)
}
export default categoryAction