import { takeEvery, put, call} from 'redux-saga/effects';
import {itemActions} from "../store/ducks/itemReducer";
import {getdata,addItem,loadingTotalInformation} from "../crud/item.crud";
import { itemActionTypes } from '../constant/index';

function* featchItem({payload}){
    let {page,limit}=payload
try {
   if(!page){
       page=1;
   }if(!limit){
       limit=1;
   }
    const result=yield call(getdata,{page,limit})
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
function* loadingTotalInfor(payload){
    const {day,month,year}=payload.payload

    try {
       const result=yield call(loadingTotalInformation,{day,month,year}) 
    
         yield put(itemActions.loadingInforSuccessfull(result.data))

    } catch (err) {
        const error=err.response ? err.response.data.msg:err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}

function* itemAction(){
yield takeEvery(itemActionTypes.loadingitem,featchItem)
yield takeEvery(itemActionTypes.uploadItem,uploadItem)
yield takeEvery(itemActionTypes.loadTotal,loadingTotalInfor)
}
export  default itemAction