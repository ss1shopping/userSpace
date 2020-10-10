import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {totalActionTypes } from "../../constant/index"
const initialAuthState = {
   pending:false,
   error:null,
   notice:null,
  totalMonth1: 0,
  totalMonth2: 0,
  totalMonth3: 0,
  totalMonth4: 0,
  nameMonth1: "Oct",
  nameMonth2: "Sep",
  nameMonth3: "Aug",
  nameMonth4: "Jul"
}
export const totalReducer = persistReducer(
    { storage, key: 'total', whitelist: [] },
    (state = initialAuthState, action) => {
      switch (action.type) {
         case totalActionTypes.loadingInforChart:
         return{
             ...state,pending:!state.pending,
         }
         case totalActionTypes.loadingInforChartSuccessful:
             return{
                 ...state, totalMonth1: action.payload.totalMonth1,
                 totalMonth2: action.payload.totalMonth2,
                 totalMonth3:  action.payload.totalMonth3,
                 totalMonth4:  action.payload.totalMonth4,
                 nameMonth1:  action.payload.nameMonth1,
                 nameMonth2: action.payload.nameMonth2,
                 nameMonth3: action.payload.nameMonth3,
                 nameMonth4: action.payload.nameMonth4,
                 pending:!state.pending
             }
        case totalActionTypes.loadingInforChartFailure:
            return{
                ...state,error:action.payload,pending:!state.pending
            }
          
        default:
          return state;
      }
      })
export const totalActions={
      loadingInforChart:(kind)=>({type:totalActionTypes.loadingInforChart,payload:{kind}}),
      loadingInforChartSuccess:(payload)=>({type:totalActionTypes.loadingInforChartSuccessful,payload}),
      loadingInforChartFailure:(payload)=>({type:totalActionTypes.loadingInforChartFailure,payload})
}