import { takeEvery, put, call} from 'redux-saga/effects';
import {crawlerData} from "../crud/crawler.crud"
import {crawler} from "../store/ducks/crawlerReducer"
function* feachData () {
  try {
     const data=yield call(crawlerData)
  yield put(crawler.success(data.data.data))
  console.log("sucesss");
  
  } catch (err) {
    const error = err.response ? err.response.data.message : err.stack;
    yield put(crawler.errors(error))
     console.log("failed");
  }

}
function* test (){
  try {
    yield put (crawler.test())
    console.log("action");
    
  } catch (error) {
   console.log(error);
    
  }
}


function* crawlerSaga(){
  yield takeEvery("feachData",feachData)
   yield takeEvery("hihi",test)
}
export default crawlerSaga;