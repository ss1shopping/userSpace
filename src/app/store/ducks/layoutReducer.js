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
  tranport: false,
  order: true,
  product: false
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


    default:
      return state
  }


}
export const layoutActions = {
  changeNumber: (payload) => ({ type: layoutActionTypes.changeNumber, payload }),
  changeProduct: (payload) => ({ type: layoutActionTypes.changeItem, payload }),
  changeOrder: (payload) => ({ type: layoutActionTypes.changeOrder, payload }),
  changeTranport: (payload) => ({ type: layoutActionTypes.changeTranport, payload })
}
