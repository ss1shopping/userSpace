import { call, put, takeEvery } from "redux-saga/effects"
import { totalActionTypes } from "../constant/index"
import {getinforchart,getAllListOder,getAllHistory} from "../crud/total.crud"
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
    const {limit,page}=payload
    try {
        const result =yield call(getAllListOder,{limit,page})
        console.log(result);
        yield put(totalActions.loadingListOrderSuccessful(result.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        console.log(err);
         yield put(totalActions.loadingListOrderFailure(error))
    }
}
function* loadingHistory(){
  
    try {
        const response=yield call(getAllHistory)
        // const res=yield call(loadingCart)
        // yield put (authActions.loadingCartSuccess(res.data))
        yield put(totalActions.loadingListHistoryofUserSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put (totalActions.loadingListHistoryofUserfailure(error))
    }
}
function* totalAction(){
yield takeEvery(totalActionTypes.loadingInforChart,loadinforChart)
yield takeEvery(totalActionTypes.loadingAllListOrder,loadingAllOrder)
yield takeEvery(totalActionTypes.loadinglistOfHistoryOfUser,loadingHistory)
    }
 export default totalAction