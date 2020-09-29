import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import  {authReducer} from './ducks/authReducer';
import {loadingReducer} from "./ducks/loadingReducer"
import  {errorReducer} from './ducks/errorReducer'
import layoutReducer from "./ducks/layoutReducer"
import authAction from "../sagas/authAction"
<<<<<<< HEAD

=======
>>>>>>> 97be28223e444206cf8bf31fd7a67303ee9d14b8
import { metronic } from '../../_metronic';
import {itemReducer} from "./ducks/itemReducer";
import  itemAction from "../sagas/item.Action";


export  const rootReducer = combineReducers({
authReducer:authReducer,
loadingReducer:loadingReducer,
errorReducer:errorReducer,
itemReducer:itemReducer,
<<<<<<< HEAD

i18n: metronic.i18n.reducer,
  // builder: metronic.builder.reducer,
=======
i18n: metronic.i18n.reducer,
  
>>>>>>> 97be28223e444206cf8bf31fd7a67303ee9d14b8
  layoutReducer:layoutReducer
  
});
export function* rootSaga () {
  yield all([
   authAction(),
<<<<<<< HEAD
  //  crawlerAction(),
=======
  
>>>>>>> 97be28223e444206cf8bf31fd7a67303ee9d14b8
   itemAction()
  ]);
}

