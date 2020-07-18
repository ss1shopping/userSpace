import {auth} from "../constant/index"
import { takeEvery, put, call,take } from 'redux-saga/effects';
 function* fetchLogin () {
    yield console.log("hihi");
 }
function* authSagas () {
  yield takeEvery(auth.loading, fetchLogin);
 
}

export default authSagas;