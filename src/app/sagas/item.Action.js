import { takeEvery, put, call } from 'redux-saga/effects';
import { itemActions } from "../store/ducks/itemReducer";
import { getdata, addItem, getItem, updateItem, addImage, updateView, deleteItem } from "../crud/item.crud";
import { loadingCart } from "../crud/auth.crud";
import { itemActionTypes } from '../constant/index';
import { getStorage } from "../../_metronic/utils/utils"
import { authActions } from '../store/ducks/authReducer';
function* featchItem({ payload }) {
    let { page, sortBy, order } = payload
    console.log(page);
    try {
        let url = ""
        //    if(!page){
        //       url="?page=1"
        //     yield put (itemActions.resetItem())
        //    }else{
        //        url=`?page=${page}`
        //    }
        !page ? url = "?page=1" : url = `?page=${page}`
        sortBy ? url = url + `sort=_id` : url = url + `sort=${sortBy}`
        order ? url = url + `order=ASC` : url = url + `order=${order}`
        let shopId = getStorage("shopId")
        url = url + `shopId=${shopId}`
        //    if(page===1){
        //     yield put (itemActions.resetItem())
        //    }
        console.log("action>", sortBy);
        const result = yield call(getdata, { url })
        yield put(itemActions.loadingsuccess(result.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
    }
}
function* additem(payload) {
    const { name, price, quantity, description, image } = payload.payload

    try {
        const result = yield call(addItem, { name, price, quantity, description, image })
        console.log(result);
        yield put(itemActions.uploaditemsuccess(result.data))

    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
        console.log(error);

    }
}

function* updateitem({ payload }) {
    const { id, name, price, quantity, description, history } = payload;
    try {
        const result = yield call(updateItem, { id, name, price, quantity, description })
        console.log(result);
        yield put(itemActions.updateItemSuccesfull(result.data))
        history.push("/dashboard/item")
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}


function* addImages(payload) {
    const formData = payload.payload
    try {
        const response = yield call(addImage, formData)
        console.log(response);
        yield put(itemActions.addImage(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}

function* updateview(payload) {
    const id = payload.payload
    try {
        const response = yield call(updateView, id)
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error));
    }
}

function* getitem({ payload }) {
    const { id } = payload
    console.log("action", payload);
    try {
        const response = yield call(getItem, { id })
        console.log(response);
        yield put(itemActions.getItemSuccess(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error))
    }
}
function* deleleitem({ payload }) {
    const { iditem } = payload
    try {
        const response = yield call(deleteItem, { iditem })
        yield put(itemActions.deleteitemSuccesful(response.data))

    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error))
    }
}

function* itemAction() {
    yield takeEvery(itemActionTypes.loadingitem, featchItem)
    yield takeEvery(itemActionTypes.uploadItem, additem)
    yield takeEvery(itemActionTypes.getItem, getitem)
    yield takeEvery(itemActionTypes.updateItem, updateitem)
    yield takeEvery(itemActionTypes.addImage, addImages)
    yield takeEvery(itemActionTypes.deleteItem, deleleitem)
}
export default itemAction