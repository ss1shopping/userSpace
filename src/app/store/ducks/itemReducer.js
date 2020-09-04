import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {itemActionTypes } from "../../constant/index"
const initialAuthState = {
  isPending: false,
  item: undefined,
  error: null,
  notice:null
}
export const itemReducer = persistReducer(
  { storage, key: 'item', whitelist: [] },
  (state = initialAuthState, action) => {
    switch (action.type) {
        case itemActionTypes.loadingitem:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.loadingItemSuccess:
            return {
                ...state,isPending:!state.isPending,item:action.payload
            }
        case itemActionTypes.uploadItem:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.uploadItemSuccess:
            return{
                ...state,isPending:!state.isPending,notice:action.payload
            }
         case itemActionTypes.Error:
             return{
                 ...state,error:action.payload,isPending:false
             }   
        case itemActionTypes.deleleerror:
            return{
                ...state,error:null
            }
      default:
        return state;
    }
    })


export const itemActions={
    loadingitem:()=>({type:itemActionTypes.loadingitem}),
    loadingsuccess:(payload)=>({type:itemActionTypes.loadingItemSuccess,payload}),
    loadingfailure:(payload)=>({type:itemActionTypes.error,payload}),
    error:(payload)=>({type:itemActionTypes.Error,payload}),
    uploaditem:(city,price,description,quantity,image)=>({type:itemActionTypes.uploadItem,
    payload:{city,price,description,quantity,image}}),
    uploaditemsuccess:(payload)=>({type:itemActionTypes.uploadItemSuccess,payload})
}