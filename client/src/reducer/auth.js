 import {
   REGISTER_SUCCESS,
   LOGIN_SUCCESS,
   REGISTER_FAIL,
   LOGIN_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOG_OUT,
   USERNAME_EDIT_SUCCESS,
   USERNAME_EDIT_FAIL,
   CLEAR_ERR_MESSAGE,
   AUTH_LOADING,
   UPDATE_AVATAR_SUCCESS,
   UPDATE_AVATAR_FAIL
 } from '../actions/types';


const initialState = {
  isAuthenticated:null,
  loading:true,
  authLoading:null,
  errMessage:null,
  user:null
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch (type){
    case USER_LOADED:
    return{
      ...state,
      isAuthenticated:true,
      loading:false,
      user:payload
    }
    case AUTH_ERROR:
    return{
      ...state,
      isAuthenticated:false,
      loading:false
    }
    case REGISTER_SUCCESS:
    localStorage.setItem('token',payload.token)
    return {
      ...state,
      isAuthenticated:true,
      loading:false,
      errMessage:null,
      authLoading:false
    }

    case LOGIN_SUCCESS:

    localStorage.setItem('token',payload.token)
    return{
      ...state,
      isAuthenticated:true,
      loading:false,
      errMessage:null,
      authLoading:false
    }


    case REGISTER_FAIL:
    localStorage.removeItem('token');
    return {
      ...state,
      isAuthenticated:false,
      errMessage:payload,
      loading:false,
      authLoading:false
    }

    case LOGIN_FAIL:
    localStorage.removeItem('token');
    return{
      ...state,
      isAuthenticated:false,
      loading:false,
      errMessage:payload,
      authLoading:false
    }

    case LOG_OUT:
    localStorage.removeItem('token');
    return{
      ...state,
      isAuthenticated:false,
      loading:false,
      errMessage:null,
      user:null
    }

    case USERNAME_EDIT_SUCCESS:
    return{
      ...state,
      loading:false,
      user:payload
    }

    case USERNAME_EDIT_FAIL:
    return {
      ...state,
      loading:false,
      errMessage:payload
    }

    case UPDATE_AVATAR_SUCCESS:
    return{
      ...state,
      loading:false,
      user:payload
    }

    case UPDATE_AVATAR_FAIL:
    return{
      ...state,
      loading:false,
      errMessage:payload
    }

    case CLEAR_ERR_MESSAGE:
    return {
      ...state,
      errMessage:null
    }

    case AUTH_LOADING:
    return {
      ...state,
      authLoading:true
    }

    default:
    return state
  }
}
