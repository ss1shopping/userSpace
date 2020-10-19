import { takeEvery, put, call} from 'redux-saga/effects';
import {itemActions} from "../store/ducks/itemReducer";
import {getdata,addItem,loadingTotalInformation,updateItem} from "../crud/item.crud";
import { itemActionTypes } from '../constant/index';

function* featchItem({payload}){
    let {page,limit}=payload
    console.log(page,limit);
try {
   if(!page){
       page=1;
   }if(!limit){
       limit=1;
   }
    const result=yield call(getdata,{limit,page})
   yield put (itemActions.loadingsuccess(result.data))
} catch (err) {
    
    const error = err.response ? err.response.data.msg : err.stack;
    yield put(itemActions.error(error));
}
}
function* additem(payload){
    const {city,price,description,quantity,image}=payload
    console.log(payload);
    try {
       const result =yield call(addItem,{city,price,description,quantity,image})
       console.log(result);
       yield put (itemActions.addditemsuccess(result.data)) 
       
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
function* updateitem(payload){
    const{name,price,quantity,description,history}=payload;
    try {
       const result=yield call(updateItem,{name,price,quantity,description}) 
       console.log(result);
       yield put (itemActions.updateItemSuccesfull(result.data))
       history.push("/dashboard/item")
    } catch (err) {
        const error=err.response ? err.response.data.msg:err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}

function* itemAction(){
yield takeEvery(itemActionTypes.loadingitem,featchItem)
yield takeEvery(itemActionTypes.addItem,additem)
yield takeEvery(itemActionTypes.loadTotal,loadingTotalInfor)
yield takeEvery(itemActionTypes.updateItem,updateitem)
}
export  default itemAction