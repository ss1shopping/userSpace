


const initialState={
   phimChieuRap:"",
    error:"",
    pending:false,
    test:true
}
export default function crawlerReducer(state=initialState,action){
  switch (action.type) {
    case "crawler[Action]":
      return{
      ...state,pending:!state.pending
    }
    case "crawler[Success]":
      return{
        ...state,phimChieuRap:action.payload,pending:true
      }
      case "crawler[Error]":
        return {
          ...state,error:action.payload,pending:false
        }
      case "crawler[Test]":
        return {
          ...state,test:!state.test
        }
  
    default:
       return state;
  }
}
export const crawler={
  crawler_data:()=>({
    type:"crawler[Action]"
  }),
  success:(payload)=>({
    type:"crawler[Success]",payload}),
  errors:(payload)=>({
    type:"crawler[Error]",payload
  }),
  test:()=>({
    type:"crawler[Test]"
  })
}