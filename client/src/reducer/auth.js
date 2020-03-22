 import {
   REGISTER_SUCCESS,
   LOGIN_SUCCESS,
   REGISTER_FAIL,
   LOGIN_FAIL
 } from '../actions/types';


const initialState = {
  isAuthenticated:null
}

export default function(state = initialState, action){
  const { type, payload } = action;
  switch (type){
    case REGISTER_SUCCESS:
    return {
      ...state,
      isAuthenticated:true
    }

    case LOGIN_SUCCESS:
    return{
      ...state,
      isAuthenticated:true
    }

    case REGISTER_FAIL:
    return {
      ...state,
      isAuthenticated:false
    }

    case LOGIN_FAIL:
    return{
      ...state,
      isAuthenticated:false
    }


    default:
    return state
  }
}
