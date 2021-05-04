import { takeEvery, put, call } from 'redux-saga/effects';
import { itemActions } from "../store/ducks/itemReducer";
import { getdata, addItem, getItem, updateItem, addImage, searchItem, updateView, updateTier_variation, updateModel, deleteItem } from "../crud/item.crud";
import { loadingCart } from "../crud/auth.crud";
import { itemActionTypes } from '../constant/index';
import { getStorage } from "../../_metronic/utils/utils"
import { authActions } from '../store/ducks/authReducer';
import { rateActions } from '../store/ducks/ratingReducer';
function* featchItem({ payload }) {
    let { page, sortBy, shopId, name } = payload

    try {
        let url = "";
        let null1 = true;
        !page ? url = "?page=1" : url = `?page=${page}`
        sortBy ? url = url + `&sort=${sortBy}` : url = url + `&sort=_id`
        // order ? url = url + `&order=${order}` : url = url + `&order=_ASC`
        // let shopId = getStorage("shopId")
        shopId ? url = url + `&shopId=${shopId}` : null1 = true
        name ? url = url + `&name=${name}` : null1 = true
        const result = yield call(getdata, { url })
        console.log("action>", result);
        yield put(itemActions.loadingsuccess(result.data.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
    }
}
function* additem({ payload }) {
    const { priceMin, priceMax, name, desc, category, shopId, attributes, model, tier_variations } = payload

    try {
        const result = yield call(addItem, { priceMin, priceMax, name, desc, category, shopId, attributes, model, tier_variations })
        console.log(result);
        yield put(itemActions.uploaditemsuccess(result.data))

    } catch (err) {
        console.log(err.response);
        const error = err.response ? err.response.data.msg : err.stack;
        yield put(itemActions.error(error));
        console.log(error);

    }
}

function* updateitem({ payload }) {
    const { id, name, priceMin, priceMax, desc, attributes, category, discount } = payload;
    try {
        const result = yield call(updateItem, { id, name, priceMin, priceMax, desc, attributes, category, discount })
        console.log(result);
        yield put(itemActions.updateItemSuccesfull(result.data))
        // history.push("/dashboard/item")
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}


function* addImages({ payload }) {
    const formData = payload
    try {
        const response = yield call(addImage, formData)
        console.log(response);
        yield put(itemActions.addImage(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.loadingInforFailure(error))
    }
}



function* getitem({ payload }) {
    const { id } = payload

    try {

        const response = yield call(getItem, { id })

        yield put(itemActions.getItemSuccess(response.data))
        // yield put(rateActions.getRating(1, response.data._id))

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
function* searchitem({ payload }) {
    const { keyword, category, sortPrice, rangePrice, rating, page, limit } = payload
    console.log(payload);
    try {
        let url = ""
        let null1 = true
        keyword ? url = `?keyword=${keyword}` : url = `?keyword=""`
        category ? url = url + `&category=${JSON.stringify(category)}` : null1 = true
        rangePrice ? url = url + `&rangePrice=${JSON.stringify(rangePrice)}` : null1 = true
        sortPrice ? url = url + `&sortPrice=${sortPrice}` : null1 = true
        page ? url = url + `&page=${page}` : url = url + `&page=1`
        const response = yield call(searchItem, { url })

        yield put(itemActions.searchItemSuccessful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error));
    }
}

function* updatemodel({ payload }) {
    const { model } = payload
    try {
        const response = yield call(updateModel, model)
        yield put(itemActions.updateModelSuccesful(response.data))
    } catch (err) {
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error));
    }
}

function* updateTier_Variation({ payload }) {
    const { tier_variations } = payload
    try {
        const response = yield call(updateTier_variation, tier_variations)
        yield put(itemActions.updateTier_variationSuccesful(response.data))
    } catch (err) {
        console.log(err.response);
        const error = err.response ? err.response.data.msg : err.stack
        yield put(itemActions.error(error));
    }
}
function* itemAction() {
    yield takeEvery(itemActionTypes.loadingitem, featchItem)
    yield takeEvery(itemActionTypes.uploadItem, additem)
    yield takeEvery(itemActionTypes.getItem, getitem)
    yield takeEvery(itemActionTypes.updateItem, updateitem)
    yield takeEvery(itemActionTypes.addImage, addImages)
    yield takeEvery(itemActionTypes.deleteItem, deleleitem)
    yield takeEvery(itemActionTypes.searchItem, searchitem)
    yield takeEvery(itemActionTypes.updateModel, updatemodel)
    yield takeEvery(itemActionTypes.updateTier_variation, updateTier_Variation)
}
export default itemAction