import { FastField } from "formik"
import { layoutActionTypes } from "../../constant/index"
var oldstate = {
  //  DarkmodeStatus:false,
  //  WidthLayout:"100%",
  //  DisplayNavbar:"none",
  //  DisplaySymbol:"block",
  //  DisplaySymbol1:"block",
  //  Width:null,
  //  opacity:{opacity:"1"},
  //  WidthNavbar:"",
  //  ref:null,
  //  outClickNavbar:false
  number: 4,
  numberOrder: 1,
  numberProduct: 2,
  layout:{category:{status:false,number:1},tranport:{status:false,number:1},order:{status:true,number:1},product:{status:false,number:1}},
  tranport: false,
  order: true,
  product: false,
  category:false,
  banner:false,
  numberVariation1:0,
  numberVariation2:0,
  statusVariation1:false,
  statusVariation2:false
}


export default function layoutReducer(state = oldstate, action) {

  switch (action.type) {
    // case "DARKMODE":
    //   return{
    //     ...state,DarkmodeStatus:!state.DarkmodeStatus
    //   }
    //   case "CHANGE_lAYOUT":
    //   return{
    //     ...state,WidthLayout:action.layout,
    //     DisplayNavbar:action.navbar,
    //     DisplaySymbol:action.symbol,
    //     WidthNavbar:action.widthnavbar,
    //     opacity:action.opacity,
    //     outClickNavbar:action.outClickNavbar
    //   }
    //   case"CHANG_LAYOUT1":
    //   return{
    //     ...state,DisplaySymbol1:action.payload,opacity:action.opacity
    //   }
    //   case  "RESET_LAYOUT":
    //     return{
    //       ...state,WidthLayout:action.layout, DisplaySymbol1:action.payload,DisplaySymbol:action.symbol,DisplayNavbar:action.navbar,outClickNavbar:false
    //     }
    //     case "SET_WIDTH":
    //     return{
    //       ...state,Width:action.setWidth
    //     }
    //     case "SET_REF":
    //       return{
    //         ...state,ref:action.setref
    //       }
    case layoutActionTypes.changeBanner:
      return {
        ...state, banner: action.payload
      }
    case layoutActionTypes.changeCategory:
      return {
        ...state, category: action.payload
      }
    case layoutActionTypes.changelayout:
      return {
        ...state, layout: action.payload
      }
    case layoutActionTypes.changeNumber:
      return {
        ...state, number: action.payload
      }
    case layoutActionTypes.changeItem:
      return {
        ...state, product: action.payload
      }
    case layoutActionTypes.changeOrder:
      return {
        ...state, order: action.payload
      }
    case layoutActionTypes.changeTranport:
      return {
        ...state, tranport: action.payload
      }
    case layoutActionTypes.changeNumberOrder:
      return {
        ...state, numberOrder: action.payload
      }
    case layoutActionTypes.changeNumberProduct:
      return {
        ...state, numberProduct: action.payload
      }
	case layoutActionTypes.changeNumberVariation1:
	return{
		...state,numberVariation1:action.payload
	}
	case layoutActionTypes.changeNumberVariation2:
	return{
		...state,numberVariation2:action.payload
	}
	case layoutActionTypes.changeStatusVariation1:
	return{
		...state,statusVariation1:action.payload
	}
	case layoutActionTypes.changeStatusVariation2:
	return{
		...state,statusVariation2:action.payload
	}
	
    default:
      return state
  }


}
export const layoutActions = {
  changeLayout: (payload) => ({ type: layoutActionTypes.changelayout, payload }),
  changeBanner: (payload) => ({ type: layoutActionTypes.changeBanner, payload }),
  changeCategory: (payload) => ({ type: layoutActionTypes.changeCategory, payload }),
  changeNumber: (payload) => ({ type: layoutActionTypes.changeNumber, payload }),
  changeProduct: (payload) => ({ type: layoutActionTypes.changeItem, payload }),
  changeOrder: (payload) => ({ type: layoutActionTypes.changeOrder, payload }),
  changeTranport: (payload) => ({ type: layoutActionTypes.changeTranport, payload }),
  changeNumberProduct: (payload) => ({ type: layoutActionTypes.changeNumberProduct, payload }),
  changeNumberOrder: (payload) => ({ type: layoutActionTypes.changeNumberOrder, payload }),
  changeNumberVariation1:(payload)=>({type:layoutActionTypes.changeNumberVariation1,payload}),
  changeNumberVariation2:(payload)=>({type:layoutActionTypes.changeNumberVariation2,payload}),
  changeStatusVariation1:(payload)=>({type:layoutActionTypes.changeStatusVariation1,payload}),
  changeStatusVariation2:(payload)=>({type:layoutActionTypes.changeStatusVariation2,payload})
}
