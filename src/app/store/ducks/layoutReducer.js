
var oldstate={
     DarkmodeStatus:false,
     WidthLayout:"100%",
     DisplayNavbar:"none",
     DisplaySymbol:"block",
     DisplaySymbol1:"block",
     Width:null,
     opacity:{opacity:"1"},
     WidthNavbar:"",
     ref:null,
     outClickNavbar:false

}


export default function itemReducer(state=oldstate,action){

      switch (action.type) {
            case "DARKMODE":
              return{
                ...state,DarkmodeStatus:!state.DarkmodeStatus
              }
              case "CHANGE_lAYOUT":
              return{
                ...state,WidthLayout:action.layout,
                DisplayNavbar:action.navbar,
                DisplaySymbol:action.symbol,
                WidthNavbar:action.widthnavbar,
                opacity:action.opacity,
                outClickNavbar:action.outClickNavbar
              }
              case"CHANG_LAYOUT1":
              return{
                ...state,DisplaySymbol1:action.payload,opacity:action.opacity
              }
              case  "RESET_LAYOUT":
                return{
                  ...state,WidthLayout:action.layout, DisplaySymbol1:action.payload,DisplaySymbol:action.symbol,DisplayNavbar:action.navbar,outClickNavbar:false
                }
                case "SET_WIDTH":
                return{
                  ...state,Width:action.setWidth
                }
                case "SET_REF":
                  return{
                    ...state,ref:action.setref
                  }
                  case "OUTER_CLICK_NARBAR":
                    return{
                      ...state,outClickNavbar:!state.outClickNavbar
                    }

              
          default:
          return state
      }


}
