import {
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAIL,
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_FAIL,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  POST_LOADING
} from '../actions/types';

const initialState = {
  posts:null,
  loading:false,
  errorMessage:null,
  post:null
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

    case GET_ONE_POST_SUCCESS:
    return{
      ...state,
      post:payload,
      loading:false
    }

    case GET_ONE_POST_FAIL:
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

    case SUBMIT_COMMENT_SUCCESS:
    return{
      ...state,
      loading:false
    }

    case SUBMIT_COMMENT_FAIL:
    return{
      loading:false,
      errorMessage:payload
    }

    default:
    return state;
  }
}
