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
    tier_variations: [],
    model: [],
    model1: [],
    totalModel: [],
    price: {},
    quantity: {},
    keyword: ""
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
            case itemActionTypes.loadImage:
                return {
                    ...state, urlImage: action.payload
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
            case itemActionTypes.setTierVariation:
                return {
                    ...state, tier_variations: action.payload
                }
            case itemActionTypes.setModel:
                return {
                    ...state, model: action.payload
                }
            case itemActionTypes.setModel1:
                return {
                    ...state, model1: action.payload
                }
            case itemActionTypes.setTotalModel:
                return {
                    ...state, totalModel: action.payload
                }
            case itemActionTypes.setprice:
                return {
                    ...state, price: action.payload
                }
            case itemActionTypes.setQuantity:
                return {
                    ...state, quantity: action.payload
                }
            case itemActionTypes.setKeyword:
                return {
                    ...state, keyword: action.payload
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
    uploaditem: (priceMin, priceMax, name, desc, category, shopId, attributes, model, tier_variations) => ({
        type: itemActionTypes.uploadItem,
        payload: { priceMin, priceMax, name, desc, category, shopId, attributes, model, tier_variations }
    }),
    uploaditemsuccess: (payload) => ({ type: itemActionTypes.uploadItemSuccess, payload }),
    loadingInfor: (payload) => ({ type: itemActionTypes.loadTotal, payload }),
    loadingInforSuccessfull: (payload) => ({ type: itemActionTypes.loadTotalSuccessfull, payload }),
    loadingInforFailure: (payload) => ({ type: itemActionTypes.loadTotalFailure, payload }),

    itemChooseToEdit: (payload) => ({ type: itemActionTypes.ItemChoseToEdit, payload }),
    getItem: (id) => ({ type: itemActionTypes.getItem, payload: { id } }),
    getItemSuccess: (payload) => ({ type: itemActionTypes.getItemSuccessful, payload }),

    itemToUpload: (payload) => ({ type: itemActionTypes.itemToUpload, payload }),
    updateItem: (id, name, priceMin, priceMax, desc, attributes, category, discount) => ({ type: itemActionTypes.updateItem, payload: { id, name, priceMin, priceMax, desc, attributes, category, discount } }),
    updateItemSuccesfull: (payload) => ({ type: itemActionTypes.updateItemSuccesful, payload }),

    addImage: (formData) => ({ type: itemActionTypes.addImage, payload: { formData } }),
    addImageSuccessful: (payload) => ({ type: itemActionTypes.addImageSuccessful, payload }),
    deleteUrlImage: () => ({ type: "deleteUrlImage" }),

    deleteItem: (iditem) => ({ type: itemActionTypes.deleteItem, payload: { iditem } }),
    deleteitemSuccesful: (payload) => ({ type: itemActionTypes.deleteItemSuccessful, payload }),

    getCategory: () => ({ type: itemActionTypes.getCategory }),
    getCategorySuccessful: (payload) => ({ type: itemActionTypes.getCategorySuccessFul, payload }),

    searchItem: (keyword, category, sortPrice, rangePrice, rating, page, limit) => ({ type: itemActionTypes.searchItem, payload: { keyword, category, sortPrice, rangePrice, rating, page, limit } }),
    searchItemSuccessful: (payload) => ({ type: itemActionTypes.searchItemSuccessful, payload }),

    setTier_variations: (payload) => ({ type: itemActionTypes.setTierVariation, payload }),
    setModel: (payload) => ({ type: itemActionTypes.setModel, payload }),
    setModel1: (payload) => ({ type: itemActionTypes.setModel1, payload }),
    setTotalModel: (payload) => ({ type: itemActionTypes.setTotalModel, payload }),
    setprice: (payload) => ({ type: itemActionTypes.setprice, payload }),
    setQuantity: (payload) => ({ type: itemActionTypes.setQuantity, payload }),

    updateModel: (model) => ({ type: itemActionTypes.updateModel, payload: { model } }),
    updateModelSuccesful: (payload) => ({ type: itemActionTypes.updateModelSuccessful, payload }),
    updateTier_variation: (tier_variations) => ({ type: itemActionTypes.updateTier_variation, payload: { tier_variations } }),
    updateTier_variationSuccesful: (payload) => ({ type: itemActionTypes.updateTier_variationSuccesful, payload }),

    loadImage: (payload) => ({ type: itemActionTypes.loadImage, payload }),
    setKeyword: (payload) => ({ type: itemActionTypes.setKeyword, payload })
}