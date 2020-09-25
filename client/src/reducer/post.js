import {
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  EDIT_POST_LOADING
} from '../actions/types';

const initialState = {
  loading:false,
  errorMessage:null
}


export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case EDIT_POST_LOADING:
    return{
      ...state,
      loading:true
    }


    case EDIT_POST_SUCCESS:
    return {
      ...state,
      loading:false
    }

    case EDIT_POST_FAIL:
    return{
      ...state,
      loading:false,
      errorMessage:payload
    }

    default:
    return state;
  }
}
