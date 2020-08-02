import {
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL
} from '../actions/types';


const initialState = {
  loading:true,
  errorMessage:null,
  profiles:null
}

export default function(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case GET_ALL_USERS_FAIL:
    return {
      ...state,
      loading:false,
      errorMessage:payload
    }

    case GET_ALL_USERS_SUCCESS:
    return {
      ...state,
      loading:false,
      profiles:payload
    }

    default:
    return state;
  }

}
