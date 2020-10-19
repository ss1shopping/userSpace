
import {totalActionTypes } from "../../constant/index"
const initialAuthState = {
   pending:false,
   error:null,
   notice:null,
  totalMonth1: 0,
  totalMonth2: 0,
  totalMonth3: 0,
  totalMonth4: 0,
  nameMonth1: "JAJ",
  nameMonth2: "SLD",
  nameMonth3: "SLO",
  nameMonth4: "Jul",
  listOrder:null,
  errorGetlistOrder:null,
}
 const  totalReducer=(state = initialAuthState, action) => {
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
        case totalActionTypes.loadingAllListOrder:
            return{
                ...state,pending:!state.pending
            }
        case totalActionTypes.loadingAllLIstOrderSuccessful:
            return{
                ...state,pending:!state.pending,listOrder:action.payload
            }
        case totalActionTypes.loadingAllListOrderFailure:
            return{
                ...state,pending:!state.pending,errorGetlistOrder:action.payload
            }
        default:
          return state;
      }
      }
      export default totalReducer;
export const totalActions={
      loadingInforChart:(kind)=>({type:totalActionTypes.loadingInforChart,payload:{kind}}),
      loadingInforChartSuccess:(payload)=>({type:totalActionTypes.loadingInforChartSuccessful,payload}),
      loadingInforChartFailure:(payload)=>({type:totalActionTypes.loadingInforChartFailure,payload}),
      loadingListOrder:()=>({type:totalActionTypes.loadingAllListOrder}),
      loadingListOrderSuccessful:(payload)=>({type:totalActionTypes.loadingAllLIstOrderSuccessful,payload}),
      loadingListOrderFailure:(payload)=>({type:totalActionTypes.loadingAllLIstOrderSuccessful,payload})
}