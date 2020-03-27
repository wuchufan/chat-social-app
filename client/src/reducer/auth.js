 import {
   REGISTER_SUCCESS,
   LOGIN_SUCCESS,
   REGISTER_FAIL,
   LOGIN_FAIL,
   USER_LOADED,
   AUTH_ERROR,
   LOG_OUT
 } from '../actions/types';


const initialState = {
  isAuthenticated:null,
  loading:true,
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
      errMessage:null
    }

    case LOGIN_SUCCESS:
    localStorage.setItem('token',payload.token)
    return{
      ...state,
      isAuthenticated:true,
      loading:false,
      errMessage:null
    }

    case REGISTER_FAIL:
    localStorage.removeItem('token');
    return {
      ...state,
      isAuthenticated:false,
      errMessage:payload,
      loading:false
    }

    case LOGIN_FAIL:
    localStorage.removeItem('token');
    return{
      ...state,
      isAuthenticated:false,
      loading:false,
      errMessage:payload
    }

    case LOG_OUT:
    localStorage.removeItem('token');
    return{
      ...state,
      isAuthenticated:false,
      loading:false,
      errMessage:null
    }
    default:
    return state
  }
}
