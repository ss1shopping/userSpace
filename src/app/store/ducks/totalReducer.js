
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
  listHistoryOfUser:null,
  errorLIstHistoryOfUser:null,
  msgDeleteOrder:null,
  msg:null
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
                ...state,pending:!state.pending,listOrder:action.payload.history
            }
        case totalActionTypes.loadingAllListOrderFailure:
            return{
                ...state,pending:!state.pending,errorGetlistOrder:action.payload
            }
        case totalActionTypes.loadinglistOfHistoryOfUser:
            return{
                ...state,pending:!state.pending
            }
        case totalActionTypes.loadinglistOfHistoryOfUserSuccuessFull:
            return{
                ...state,pending:!state.pending,listHistoryOfUser:action.payload.history
            }
        case totalActionTypes.loadinglistOfHistoryOfUserfailure:{
            return{
                ...state ,pending:!state.pending,errorLIstHistoryOfUser:action.payload
            }
        }
        case totalActionTypes.deleteOrder:{
            return{
                ...state,pending:!state.pending,
            }
        }
        case totalActionTypes.deleteOrderSuccessful:{
            return{
                ...state,pending:!state.pending,msgDeleteOrder:action.payload.msg
            }
        }
        case totalActionTypes.deleteOrderfail:{
            return{
                ...state,pending:!state.pending,msgDeleteOrder:action.payload
            }
        }
        case totalActionTypes.exportBilling:{
            return {
                ...state, pending:!state.pending
            }
        }
        case totalActionTypes.exportBillingSuccessful:{
            return{
                ...state,pending:!state.pending,msg:action.payload.msg
            }
        }
        case totalActionTypes.exportBillingFailure:
        return{
            ...state,pending:!state.pending,msg:action.payload
        }
        case totalActionTypes.cancelledBilling:
            return{
                ...state,pending:!state.pending
            }
        case totalActionTypes.cancelledBillingSuccessFul:
            return{
                ...state,pending:!state.pending,msg:action.payload.msg
            }
        case totalActionTypes.cancelledBillingFailure:
            return{
                ...state,pending:!state.pending,msg:action.payload
            }
        case totalActionTypes.finishBilling:
            return{
                ...state,pending:!state
            }
        case totalActionTypes.finishBillingSuccessful:
            return{
                ...state,pending:!state.pending,msg:action.payload.msg
            }
        case totalActionTypes.finishBillingFailure:
            return{
                ...state,pending:!state.pending,msg:action.payload
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
      loadingListOrder:(limit,page,status)=>({type:totalActionTypes.loadingAllListOrder,payload:{limit,page,status}}),
      loadingListOrderSuccessful:(payload)=>({type:totalActionTypes.loadingAllLIstOrderSuccessful,payload}),
      loadingListOrderFailure:(payload)=>({type:totalActionTypes.loadingAllLIstOrderSuccessful,payload}),
      loadingListHistoryofUser:(limit,page)=>({type:totalActionTypes.loadinglistOfHistoryOfUser,payload:{limit,page}}),
      loadingListHistoryofUserSuccessful:(payload)=>({type:totalActionTypes.loadinglistOfHistoryOfUserSuccuessFull,payload}),
      loadingListHistoryofUserfailure:(payload)=>({type:totalActionTypes.loadinglistOfHistoryOfUserfailure,payload}),
      deleteOrder:(id)=>({type:totalActionTypes.deleteOrder,payload:{id}}),
      deleteOrderSuccessful:(payload)=>({type:totalActionTypes.deleteOrderSuccessful,payload}),
      deleleteOrderFailure:(payload)=>({type:totalActionTypes.deleteOrderfail,payload}),
      exportBilling:(id)=>({type:totalActionTypes.exportBilling,payload:{id}}),
      exportBillingSuccessful:(payload)=>({type:totalActionTypes.exportBillingSuccessful,payload}),
      exportBillingFailure:(payload)=>({type:totalActionTypes.exportBillingFailure,payload}),
      cancellingBilling:(id)=>({type:totalActionTypes.cancelledBilling,payload:{id}}),
      cancellingBillingSuccessful:(payload)=>({type:totalActionTypes.cancelledBillingSuccessFul,payload}),
      cancelledBillingFailure:(payload)=>({type:totalActionTypes.cancelledBillingFailure,payload}),
      finishBilling:(id)=>({type:totalActionTypes.finishBilling,payload:{id}}),
      finishBillingSuccessful:(payload)=>({type:totalActionTypes.finishBillingSuccessful,payload}),
      finishBillingFailure:(payload)=>({type:totalActionTypes.finishBillingFailure,payload})
}