import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { itemActionTypes, authActionTypes } from "../../constant/index"
import itemAction from '../../sagas/item.Action';
const initialAuthState = {
    isPending: false,
    itemtoEdit: "",
    itemToUpload: {},
    detailItem: null,
    item: [],
    searchItem: [],
    message: null,
    error: null,
    notice: null,
    urlImage: [],
    itemInCart: [],
    page: 1,
    category: null,

}
export const itemReducer = persistReducer(
    { storage, key: 'item', whitelist: [] },
    (state = initialAuthState, action) => {
        switch (action.type) {
            case itemActionTypes.loadingitem:
                return {
                    ...state, isPending: !state.isPending
                }
            case itemActionTypes.loadingItemSuccess:
                return {
                    ...state, isPending: !state.isPending,
                    item: action.payload,
                    //item: state.item.concat(action.payload)
                }
            case itemActionTypes.uploadItem:
                return {
                    ...state, isPending: !state.isPending
                }
            case itemActionTypes.uploadItemSuccess:
                return {
                    ...state, isPending: !state.isPending, notice: action.payload, msg: action.payload.msg
                }
            case itemActionTypes.Error:
                return {
                    ...state, error: action.payload, isPending: false
                }
            case itemActionTypes.deleleerror:
                return {
                    ...state, error: null
                }
            case itemActionTypes.ItemChoseToEdit:
                return {
                    ...state, detailItem: action.payload
                }
            case itemActionTypes.getItem:
                return {
                    ...state, isPending: !state.isPending
                }
            case itemActionTypes.getItemSuccessful:
                return {
                    ...state, detailItem: action.payload, isPending: !state.isPending
                }
            case itemActionTypes.itemToUpload:
                return {
                    ...state, itemToUpload: action.payload
                }
            case itemActionTypes.updateItem:
                return {
                    ...state, isPending: !state.isPending,
                }
            case itemActionTypes.updateItemSuccesful:
                return {
                    ...state, isPending: !state.isPending, message: action.payload.msg
                }
            case itemActionTypes.uploadItemSuccess: {
                return {
                    ...state, isPending: !state.isPending, message: action.payload.msg
                }
            }
            case itemActionTypes.addImage: {
                return {
                    ...state, isPending: !state.isPending
                }
            }
            case itemActionTypes.addImageSuccessful: {
                return {
                    ...state, isPending: !state.isPending, urlImage: [...state.urlImage, action.payload.path]
                }
            }
            case "deleteUrlImage": {
                return {
                    ...state, urlImage: []
                }
            }
            case itemActionTypes.deleteItem:
                return {
                    ...state, isPending: !state.isPending
                }
            case itemActionTypes.deleteItemSuccessful:
                return {
                    ...state, isPending: !state.isPending, message: action.payload.msg
                }

            case itemActionTypes.resetItem: {
                return {
                    ...state, item: []
                }
            }
            case itemActionTypes.getCategory:
                return {
                    ...state, isPending: !state.isPending
                }
            case itemActionTypes.getCategorySuccessFul:
                return {
                    ...state, isPending: !state.isPending, category: action.payload
                }
            case itemActionTypes.searchItem:
                return {
                    ...state, isPending: state.isPending
                }
            case itemActionTypes.searchItemSuccessful:
                return {
                    ...state, isPending: !state.isPending, searchItem: action.payload
                }

            default:
                return state;
        }
    })


export const itemActions = {
    loadingitem: (page, sortBy, shopId, name) => ({ type: itemActionTypes.loadingitem, payload: { page, sortBy, shopId, name } }),
    loadingsuccess: (payload) => ({ type: itemActionTypes.loadingItemSuccess, payload }),
    loadingfailure: (payload) => ({ type: itemActionTypes.error, payload }),
    error: (payload) => ({ type: itemActionTypes.Error, payload }),
    uploaditem: (priceMin, priceMax, name, desc, caetegory, shopId, attributes, model, tier_variations) => ({
        type: itemActionTypes.uploadItem,
        payload: { priceMin, priceMax, name, desc, caetegory, shopId, attributes, model, tier_variations }
    }),
    uploaditemsuccess: (payload) => ({ type: itemActionTypes.uploadItemSuccess, payload }),
    loadingInfor: (payload) => ({ type: itemActionTypes.loadTotal, payload }),
    loadingInforSuccessfull: (payload) => ({ type: itemActionTypes.loadTotalSuccessfull, payload }),
    loadingInforFailure: (payload) => ({ type: itemActionTypes.loadTotalFailure, payload }),

    itemChooseToEdit: (payload) => ({ type: itemActionTypes.ItemChoseToEdit, payload }),
    getItem: (id) => ({ type: itemActionTypes.getItem, payload: { id } }),
    getItemSuccess: (payload) => ({ type: itemActionTypes.getItemSuccessful, payload }),

    itemToUpload: (payload) => ({ type: itemActionTypes.itemToUpload, payload }),
    updateItem: (id, name, price, quantity, description, history) => ({ type: itemActionTypes.updateItem, payload: { id, name, price, quantity, description, history } }),
    updateItemSuccesfull: (payload) => ({ type: itemActionTypes.updateItemSuccesful, payload }),

    addImage: (formData) => ({ type: itemActionTypes.addImage, payload: { formData } }),
    addImageSuccessful: (payload) => ({ type: itemActionTypes.addImageSuccessful, payload }),
    deleteUrlImage: () => ({ type: "deleteUrlImage" }),

    deleteItem: (iditem) => ({ type: itemActionTypes.deleteItem, payload: { iditem } }),
    deleteitemSuccesful: (payload) => ({ type: itemActionTypes.deleteItemSuccessful, payload }),

    getCategory: () => ({ type: itemActionTypes.getCategory }),
    getCategorySuccessful: (payload) => ({ type: itemActionTypes.getCategorySuccessFul, payload }),

    searchItem: (keyword) => ({ type: itemActionTypes.searchItem, payload: { keyword } }),
    searchItemSuccessful: (payload) => ({ type: itemActionTypes.searchItemSuccessful, payload }),



}