import axios from 'axios';
import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  POST_LOADING,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL
} from './types';


export const getAllPosts = () => async (dispatch) =>{
  try{
    dispatch({
      type:POST_LOADING
    });
    const posts = await axios.get('/api/post');
    dispatch({
      type:GET_ALL_POSTS_SUCCESS,
      payload:posts.data
    })


  } catch(err){
    dispatch({
      type:GET_ALL_POSTS_FAIL,
      payload:err.response ? err.response : err
    })
  }
}


export const submitPost = (formData, history = null) => async (dispatch) =>{

  const config = {
    "Content-Type":"application/json"
  }

  try{
    dispatch({
      type:POST_LOADING
    });
    const submit = await axios.post('/api/post',formData,config);

    dispatch({
      type:EDIT_POST_SUCCESS
    });
    if(history) history.push({pathname:'/forum'});

  } catch(err){
    dispatch({
      type:EDIT_POST_FAIL,
      payload:err.response ? err.response : err
    });

  }
}
