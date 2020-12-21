import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {itemActionTypes ,authActionTypes} from "../../constant/index"
import itemAction from '../../sagas/item.Action';
const initialAuthState = {
  isPending: false,
  itemtoEdit:"",
  item: [],
  message:null,
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
  errorLoadingTotalInfor:null,
  messageAddtocart:null,
  cart:[],
  urlImage:[],
  itemInCart:[],
  page:1,
  
 
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
                ...state,isPending:!state.isPending,item:state.item.concat(action.payload)
            }
        case itemActionTypes.uploadItem:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.uploadItemSuccess:
            return{
                ...state,isPending:!state.isPending,notice:action.payload,msg:action.payload.msg
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
        case itemActionTypes.ItemChoseToEdit:
            return{
                ...state,itemtoEdit:action.payload
            }
        case itemActionTypes.updateItem:
            return{
                ...state,isPending:!state.isPending,
            }
        case itemActionTypes.updateItemSuccesful:
            return{
                ...state,isPending:!state.isPending,message:action.payload.msg
            }
        case itemActionTypes.addtoCart:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.addtocartSuccessFul:
            return{
                ...state,isPending:!state.isPending,messageAddtocart:action.payload.msg,cart:action.payload.updateCart.cart
            }
        case itemActionTypes.removeTocartSuccessful:
            return{
                ... state,isPending:!state.isPending,messageRemoveTocart:action.payload.msg,cart:action.payload.updateCart.cart
            }
        case itemActionTypes.removeTocart:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.uploadItemSuccess:{
            return{
                ...state ,isPending:!state.isPending,message:action.payload.msg
            }
        }
        case itemActionTypes.addImage:{
            return{
                ...state,isPending:!state.isPending
            }
        }
        case itemActionTypes.addImageSuccessful:{
            return{
                ...state,isPending:!state.isPending,urlImage:[...state.urlImage,action.payload.path]
            }
        }
        case "deleteUrlImage":{
            return{
                ...state,urlImage:[]
            }
        }
        case authActionTypes.LoadingcartSuccess:{
            return {...state,cart:action.payload.cart,itemInCart:action.payload.itemInCart}
          }
          case authActionTypes.Loadingcart:{
            return {...state,isPending:!state.isPending}
          }
        case itemActionTypes.checkout:
            return{
                ...state,isPending:!state.isPending,
            }
        case itemActionTypes.checkoutSuccessful:
            return{
                ...state,checkout:action.payload.result
            }
        case itemActionTypes.deleteItem:
            return{
                ...state,isPending:!state.isPending
            }
        case itemActionTypes.deleteItemSuccessful:
            return{
                ...state,isPending:!state.isPending,message:action.payload.msg
            }
        case itemActionTypes.countpage:{
            return{
                ...state,page:action.page
            }
        }
        case itemActionTypes.resetItem:{
            return{
                ...state,item:[]
            }
        
        }
    
        
      default:
        return state;
    }
    })


export const itemActions={
    loadingitem:(limit,page,sortBy,order)=>({type:itemActionTypes.loadingitem,payload:{limit,page,sortBy,order}}),
    loadingsuccess:(payload)=>({type:itemActionTypes.loadingItemSuccess,payload}),
    loadingfailure:(payload)=>({type:itemActionTypes.error,payload}),
    error:(payload)=>({type:itemActionTypes.Error,payload}),
    uploaditem:(name,price,quantity,description,image)=>({type:itemActionTypes.uploadItem,
    payload:{name,price,quantity,description,image}}),
    uploaditemsuccess:(payload)=>({type:itemActionTypes.uploadItemSuccess,payload}),
    loadingInfor:(payload)=>({type:itemActionTypes.loadTotal,payload}),
    loadingInforSuccessfull:(payload)=>({type:itemActionTypes.loadTotalSuccessfull,payload}),
    loadingInforFailure:(payload)=>({type:itemActionTypes.loadTotalFailure,payload}),
    itemChooseToEdit:(payload)=>({type:itemActionTypes.ItemChoseToEdit,payload}),
    updateItem:(id,name,price,quantity,description,history)=>({type:itemActionTypes.updateItem,payload:{id,name,price,quantity,description,history}}),
    updateItemSuccesfull:(payload)=>({type:itemActionTypes.updateItemSuccesful,payload}),
    addtocart:(id)=>({type:itemActionTypes.addtoCart,payload:{id}}),
    addtocartSuccessFul:(payload)=>({type:itemActionTypes.addtoCartSuccessFul,payload}),
    removetocart:(id)=>({type:itemActionTypes.removeTocart,payload:{id} }),
    removeTocartSuccessful:(payload)=>({type:itemActionTypes.removeTocartSuccessful,payload}),
    addImage:(formData)=>({type:itemActionTypes.addImage,payload:{formData}}),
    addImageSuccessful:(payload)=>({type:itemActionTypes.addImageSuccessful,payload}),
    deleteUrlImage:()=>({type:"deleteUrlImage"}),
    updateView:(id)=>({type:itemActionTypes.updateView,payload:{id}}),
    checkout:(phone,address,id)=>({type:itemActionTypes.checkout,payload:{phone,address,id}}),
    checkoutSuccessful:(payload)=>({type:itemActionTypes.checkoutSuccessful,payload}),
    deleteItem:(iditem)=>({type:itemActionTypes.deleteItem,payload:{iditem}}),
    deleteitemSuccesful:(payload)=>({type:itemActionTypes.deleteItemSuccessful,payload}),
    countpage:(page)=>({type:itemActionTypes.countpage,page}),
    resetItem:()=>({type:itemActionTypes.resetItem}),

    
    
}