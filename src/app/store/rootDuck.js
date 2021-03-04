import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import { authReducer } from './ducks/authReducer';
import { loadingReducer } from "./ducks/loadingReducer"
import { errorReducer } from './ducks/errorReducer'
import layoutReducer from "./ducks/layoutReducer"
import authAction from "../sagas/authAction"
// import { metronic } from '../../_metronic';
import { itemReducer } from "./ducks/itemReducer";
import itemAction from "../sagas/item.Action";
import totalReducer from "./ducks/totalReducer"
import totalAction from "../sagas/total.Action"
import { orderReducer } from './ducks/orderReducer';
import orderAction from '../sagas/orderAction';
import { cartReducer } from './ducks/cardReducer';
import cartAction from '../sagas/cardAction';
import { rateReducer } from './ducks/ratingReducer';
import ratingAction from '../sagas/rateAction';
import { categoryReducer } from './ducks/categoryReducer';
import categoryAction from '../sagas/categoryAction';
export const rootReducer = combineReducers({
  authReducer: authReducer,
  loadingReducer: loadingReducer,
  errorReducer: errorReducer,
  itemReducer: itemReducer,
  totalReducer: totalReducer,
  orderReducer: orderReducer,
  cartReducer: cartReducer,
  rateReducer: rateReducer,
  categoryReducer: categoryReducer,
  // i18n: metronic.i18n.reducer,
  // builder: metronic.builder.reducer,
  layoutReducer: layoutReducer

});
export function* rootSaga() {
  yield all([
    authAction(),
    totalAction(),
    itemAction(),
    orderAction(),
    cartAction(),
    ratingAction(),
    categoryAction()
  ]);
}

