import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import  {authReducer} from './ducks/authReducer';
import {loadingReducer} from "./ducks/loadingReducer"
import  {errorReducer} from './ducks/errorReducer'
import layoutReducer from "./ducks/layoutReducer"
import authAction from "../sagas/authAction"
// import { metronic } from '../../_metronic';
import {itemReducer} from "./ducks/itemReducer";
import  itemAction from "../sagas/item.Action";
import {totalReducer} from "./ducks/totalReducer"
import totalAction from "../sagas/item.Action"
export  const rootReducer = combineReducers({
authReducer:authReducer,
loadingReducer:loadingReducer,
errorReducer:errorReducer,
itemReducer:itemReducer,
totalReducer:totalReducer,

// i18n: metronic.i18n.reducer,
  // builder: metronic.builder.reducer,
  layoutReducer:layoutReducer
  
});
export function* rootSaga () {
  yield all([
   authAction(),
   totalAction(),
   itemAction()
  ]);
}

