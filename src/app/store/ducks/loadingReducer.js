
import {auth} from "../../constant/index"
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialAuthState = {
  test: false,
  user: undefined,
  error: null,
}
export const loadingReducer =(state=initialAuthState,action)=>{
      switch (action) {
        case auth.loading:{
               return { ...state, test: !state.test };
        }
          
          
      
        default:
        return state
      }
  }