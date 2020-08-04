import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  PROFILE_EDIT_FAIL,
  PROFILE_EDIT_SUCCESS,
  CLEAR_PROFILE
} from '../actions/types';


const initialState = {
  profile:null,
  errorMessage:null,
  loading:true
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case GET_PROFILE_SUCCESS:
    return {
      ...state,
      profile:payload,
      loading:false,
      errorMessage:null
    }

    case GET_PROFILE_FAIL:
    return {
      ...state,
      errorMessage:payload,
      loading:false
    }
    case PROFILE_EDIT_SUCCESS:
    return{
      ...state,
      profile:payload,
      errorMessage:null,
      loading:false
    }
    case PROFILE_EDIT_FAIL:
    return{
      ...state,
      errorMessage:payload,
      loading:false
    }

    case CLEAR_PROFILE:
    return{
      profile:null,
      errorMessage:null,
      loading:true
    }

    default:
    return state
  }
}
