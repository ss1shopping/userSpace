import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {authActionTypes} from "../../constant/index"
const initialAuthState = {
  isPending: false,
  user: undefined,
  error: null,
  notice:null
}
export const authReducer = persistReducer(
  { storage, key: 'userAuth1', whitelist: [] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case authActionTypes.Login: {
        return { ...state, isPending: !state.isPending };
      }

      case authActionTypes.LoginSuccess: {
        return { ...state, user: action.payload, isPending: !state.isPending };
      }

      case authActionTypes.CheckAuth:
        return {
          ...state,
          isPending: true,
        };
      case authActionTypes.activeAccount:
        return {
          ...state,isPending:!state.isPending
        }
      case authActionTypes.activeAccountSuccess:
        return {
          ...state,isPending:!state.isPending,notice:action.payload
        }
        case authActionTypes.activeAccountFailure:
          return{
            ...state,isPending:!state.isPending,error:action.payload
          }
      case authActionTypes.CheckAuthSucces:
        return {
          ...state,
          isPending: false,
          user: action.payload,
        };

      case authActionTypes.CheckAuthError:
        return {
          ...state,
          user: initialAuthState.user,
          error: action.payload,
          isPending: false,
        };

      case authActionTypes.Register: {
        return { ...state, isPending: !state.isPending };
      }

      case authActionTypes.RegisterSuccess: {
        return { ...state, user: action.payload.user, isPending: !state.isPending, notice:action.payload.msg};
      }


      case authActionTypes.Error: {
        return { ...state, error: action.payload, isPending: false };
      }

      case authActionTypes.DeleteError: {
        return { ...state, error: null };
      }

      default:
        return state;
    }
  }
);

export const authActions = {
  login: (email, password,setSubmitting,history) => ({
    type: authActionTypes.Login,
    payload: {
      email, password,setSubmitting,history
    }
  }),
  loginSuccess: (payload) => ({ type: authActionTypes.LoginSuccess, payload }),
  registerUser: (newUser,setSubmitting, history) => ({
    type: authActionTypes.Register, payload: { newUser, setSubmitting,history }
  }),
  registerSuccess: (payload) => ({ type: authActionTypes.RegisterSuccess, payload }),
  activeAccount:(token)=>({
    type:authActionTypes.activeAccount,payload:{token}
  }),
  activeAccountSuccess:(payload)=>({type:authActionTypes.activeAccountSuccess,payload}),
  activeAccountFailure:(payload)=>({type:authActionTypes.activeAccountFailure,payload}),
  logout: () => ({ type: authActionTypes.Logout }),
  checkAuth: (history) => ({ type: authActionTypes.CheckAuth, payload: { history } }),
  checkAuthSuccess: (payload) => ({ type: authActionTypes.CheckAuthSucces, payload }),
  checkAuthError: (payload) => ({ type: authActionTypes.CheckAuthError, payload }),
  pendingStatus: () => ({ type: authActionTypes.Pending }),
  requestUser: (payload) => ({ type: authActionTypes.UserRequested, payload }),
  error: (payload) => ({ type: authActionTypes.Error, payload }),
  deleteError: () => ({ type: authActionTypes.DeleteError }),
  resetPassword: (email, history) => ({
    type: authActionTypes.ResetPasswword, payload: { email, history }
  }),
}