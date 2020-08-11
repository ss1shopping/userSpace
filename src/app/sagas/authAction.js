import { takeEvery, put, call} from 'redux-saga/effects';
import {login} from "../crud/auth.crud";
import {setStorage} from "../../_metronic/utils/utils";
import {authActions} from "../store/ducks/authReducer";
import {authActionTypes} from "../constant/index";
function* fetchLogin ({ payload }) {
  const {
    email, password,setSubmitting,history
    
  } = payload;

  try {
    const result = yield call(login, { email, password });
     yield put(authActions.loginSuccess(result.data.user));
      yield setSubmitting(false);
       yield setStorage('token', result.data.token);
       yield setStorage("refreshtoken",result.data.refreshToken)
        yield history.push("/profile");
      console.log(result);
  } catch (err) {
    console.log(err);
    
    const error = err.response ? err.response.data.message : err.stack;
    yield put(authActions.error(error));
    yield setSubmitting(false);
  }
    
      
 
}
function* authSagas () {
  yield takeEvery(authActionTypes.Login, fetchLogin);
 
}

export default authSagas;