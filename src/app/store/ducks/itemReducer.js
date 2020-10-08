import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {itemActionTypes } from "../../constant/index"
const initialAuthState = {
  isPending: false,
  item: undefined,
  error: null,
  notice:null,
  totalSold:null,
  totalView:null,
  totalIncome:null,
  totalUser:null,
  isPendingTotalInfor:false,
  percentageSold:null,
  percentageView:null,
  percentageIncome:null,
  percentageUser:null,
  errorLoadingTotalInfor:null
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
        case itemActionTypes.loadTotal:
            return{
                ...state,isPendingTotalInfor:!state.isPendingTotalInfor
            }
        case itemActionTypes.loadTotalSuccessfull:
            return{
                ...state,totalSold:action.payload.TotalSold,
                totalIncome:action.payload.TotalIncome,
                totalView:action.payload.TotalView,
                totalUser:action.payload.TotalUser,
                percentageIncome:action.payload.percentageIncome,
                percentageSold:action.payload.percentageSold,
                percentageView:action.payload.percentageView,
                percentageUser:action.payload.percentageUser,
                isPendingTotalInfor:!state.isPendingTotalInfor
            }
        case itemActionTypes.loadTotalFailure:
            return{
                ...state,errorLoadingTotalInfor:action.payload
            }
      default:
        return state;
    }
    })


export const itemActions={
    loadingitem:(offset,limit)=>({type:itemActionTypes.loadingitem,payload:{offset,limit}}),
    loadingsuccess:(payload)=>({type:itemActionTypes.loadingItemSuccess,payload}),
    loadingfailure:(payload)=>({type:itemActionTypes.error,payload}),
    error:(payload)=>({type:itemActionTypes.Error,payload}),
    uploaditem:(city,price,description,quantity,image)=>({type:itemActionTypes.uploadItem,
    payload:{city,price,description,quantity,image}}),
    uploaditemsuccess:(payload)=>({type:itemActionTypes.uploadItemSuccess,payload}),
    loadingInfor:(payload)=>({type:itemActionTypes.loadTotal,payload}),
    loadingInforSuccessfull:(payload)=>({type:itemActionTypes.loadTotalSuccessfull,payload}),
    loadingInforFailure:(payload)=>({type:itemActionTypes.loadTotalFailure,payload})
}