import { call, put, takeEvery } from "redux-saga/effects"
import { totalActionTypes } from "../constant/index"
import {getinforchart,getAllListOder,getAllHistory,deleteOrder,exportBilling,cancelledBilling,finishBilling,} from "../crud/total.crud"
import { authActions } from "../store/ducks/authReducer"
import {loadingCart} from "../crud/auth.crud";
import { totalActions } from "../store/ducks/totalReducer"
function* loadinforChart({payload}){
    const {kind}=payload
    console.log(kind);
   
    try {
        const result= yield call(getinforchart,{kind})
        console.log(result);
        yield put (totalActions.loadingInforChartSuccess(result.data))
     } catch (err) {
         const error = err.response ? err.response.data.msg : err.stack;
         console.log(err);
          yield put(totalActions.loadingInforChartFailure(error))
     }
     
}
function* loadingAllOrder({payload}){
    const {limit,page,status}=payload
    
    try {
        console.log(status);
        const result =yield call(getAllListOder,{limit,page,status})
        console.log(result);
        yield put(totalActions.loadingListOrderSuccessful(result.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        console.log(err);
         yield put(totalActions.loadingListOrderFailure(error))
    }
}
function* loadingHistory({payload}){
  const {limit,page}=payload
    try {
        const response=yield call(getAllHistory,{limit,page})
        // const res=yield call(loadingCart)
        // yield put (authActions.loadingCartSuccess(res.data))
        yield put(totalActions.loadingListHistoryofUserSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.loadingListHistoryofUserfailure(error))
    }
}

function* deleteorder({payload}){
    const {id}=payload
    console.log("action",id);
    try {
        const response =yield call(deleteOrder,{id})
        yield put(totalActions.deleteOrderSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.deleleteOrderFailure(error))
    }
}
function* exportBiiling({payload}){
    const {id}=payload
    try {
        const response= yield call(exportBilling,{id})
        console.log(response);
        yield put (totalActions.exportBillingSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.exportBillingFailure(error))
    }
}
function* cancellingBilling({payload}){
    const {id}=payload
    try {
        const response= yield call(cancelledBilling,{id})
        yield put (totalActions.cancellingBillingSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.cancelledBillingFailure(error))
    }
}
function* finishbilling({payload}){
    const {id}=payload
    console.log("id",id);
    try {
        const response=yield call(finishBilling,{id})
        yield put(totalActions.finishBillingSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.finishBillingFailure(error))
    }
}
function* totalAction(){
yield takeEvery(totalActionTypes.loadingInforChart,loadinforChart)
yield takeEvery(totalActionTypes.loadingAllListOrder,loadingAllOrder)
yield takeEvery(totalActionTypes.loadinglistOfHistoryOfUser,loadingHistory)
yield takeEvery(totalActionTypes.deleteOrder,deleteorder)
yield takeEvery(totalActionTypes.exportBilling,exportBiiling)
yield takeEvery(totalActionTypes.cancelledBilling,cancellingBilling)
yield takeEvery(totalActionTypes.finishBilling,finishbilling)
    }
 export default totalAction