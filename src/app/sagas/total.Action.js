import { call, put, takeEvery } from "redux-saga/effects"
import { totalActionTypes } from "../constant"
import {getinforchart} from "../crud/total.crud"
import { totalActions } from "../store/ducks/totalReducer"
function* loadinforChart({payload}){
    const {kind}=payload
    console.log(kind);
    console.log(payload);
    try {
        const result= yield call(getinforchart,{kind})
        console.log(result);
        yield put(totalActions.loadingInforChartSuccess(result.data))
     } catch (err) {
         const error = err.response ? err.response.data.msg : err.stack;
         console.log(err);
          yield put(totalActions.loadingInforChartFailure(error))
     }
     
}

function* totalAction(){
yield takeEvery(totalActionTypes.loadingInforChart,loadinforChart)
   
    }
 export  default totalAction