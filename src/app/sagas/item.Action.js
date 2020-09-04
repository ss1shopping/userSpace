import { takeEvery, put, call} from 'redux-saga/effects';
import {itemActions} from "../store/ducks/itemReducer";
import {getdata,addItem} from "../crud/item.crud";
import { itemActionTypes } from '../constant/index';

function* featchItem(){
try {
    const result=yield call(getdata)
    console.log(result);
   yield put (itemActions.loadingsuccess(result.data))
} catch (err) {
    
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(itemActions.error(error));
}
}
function* uploadItem(payload){
    const {city,price,description,quantity,image}=payload
    console.log(payload);
    try {
       const result =yield call(addItem,{city,price,description,quantity,image})
       console.log(result);
       yield put (itemActions.uploaditemsuccess(result.data)) 
       
    } catch (err) {
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(itemActions.error(error));
    console.log(error);
        
    }
}


function* itemAction(){
yield takeEvery(itemActionTypes.loadingitem,featchItem)
yield takeEvery(itemActionTypes.uploadItem,uploadItem)
}
export  default itemAction