import {auth} from "../../constant/index"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const initialAuthState = {
  test: false,
  user: undefined,
  error: null,
}
export const errorReducer = 
 
  (state = initialAuthState, action) => {
  switch (action.type) {
    case auth.loading_failure:
      return action.error
    case auth.loading:
    case auth.loading_success:
     return null
      
      
  
    default:
      return state;
  }
}
