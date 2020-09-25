import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  POST_LOADING
} from '../actions/types';

const initialState = {
  posts:null,
  loading:false,
  errorMessage:null
}


export default function(state = initialState, action){
  const { type, payload } = action;


  switch(type){
    case GET_ALL_POSTS_SUCCESS:
    return{
      ...state,
      posts:payload,
      loading:false
    }
    case GET_ALL_POSTS_FAIL:
    return{
      ...state,
      errorMessage:payload,
      loading:false
    }
    
    case POST_LOADING:
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
