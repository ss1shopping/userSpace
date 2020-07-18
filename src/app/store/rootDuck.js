import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import  {authReducer} from './ducks/authReducer';
import {loadingReducer} from "./ducks/loadingReducer"
import  {errorReducer} from './ducks/errorReducer'
import layoutReducer from "./ducks/layoutReducer"
import authAction from "../sagas/authAction"

import { metronic } from '../../_metronic';



export  const rootReducer = combineReducers({
authReducer:authReducer,
loadingReducer:loadingReducer,
errorReducer:errorReducer,
i18n: metronic.i18n.reducer,
  builder: metronic.builder.reducer,
  layoutReducer:layoutReducer
  
});
export function* rootSaga () {
  yield all([
   authAction(),

  ]);
}

