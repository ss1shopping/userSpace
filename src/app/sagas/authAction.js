import { takeEvery, put, call} from 'redux-saga/effects';
import {login,register,activeAccount,GenNewToken} from "../crud/auth.crud";
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
       yield setStorage('token', result.data.token,result.data.expToken);
       yield setStorage("refreshtoken",result.data.refreshToken,result.data.expRefreshToken)
       if(result.data.user.role===1){
        yield history.push("/dashboard");
       }else{
        yield history.push("/");
       }
      console.log(result);
  } catch (err) {
    console.log(err);
    
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(authActions.error(error));
    yield setSubmitting(false);
  }
}
  function* fetchRegister ({ payload }) {
      const { newUser, setSubmitting, history } = payload;
   
  try {
   
    console.log(newUser,history);
   const dataNewUser = yield call(register, newUser);
     console.log(dataNewUser);
    yield put(authActions.registerSuccess(dataNewUser.data));
    // yield setStorage('token', dataNewUser.data.token);
    // yield setStorage('refreshToken', dataNewUser.data.refreshtoken);
    yield history.push("/confirm-account");
  }
  catch (err) {
   const error = err.response ? err.response.data.msg : err.stack;
    yield put(authActions.error(error));
     yield setSubmitting(false);
  }
}
function* fetchactiveAccount({payload}){
  const {token}=payload
  try {
     const response=yield call(activeAccount,token)
     yield put(authActions.activeAccountSuccess(response.data.msg))
  } catch (error) {
    const err =error.response?error.response.data.msg :error.stack
    yield put(authActions.activeAccountFailure(err))
  }
 
}
function* fetchRefreshToken({payload}){
  const {refreshToken}=payload;
 
  try {
    const result=yield call(GenNewToken,{refreshToken})
    yield put(authActions.refreshTokenSuccessful(result))
    yield setStorage("token",result.data.access_token,result.data.expires_in)
  } catch (error) {
     const err =error.response?error.response.data.msg :error.stack
   yield put(authActions.error(error));
  }
}
 

function* authSagas () {
  yield takeEvery(authActionTypes.Login, fetchLogin);
  yield takeEvery(authActionTypes.Register, fetchRegister);
  yield takeEvery(authActionTypes.activeAccount,fetchactiveAccount)
  yield takeEvery(authActionTypes.refreshToken,fetchRefreshToken)
}

export default authSagas;