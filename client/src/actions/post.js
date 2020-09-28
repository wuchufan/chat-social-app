import axios from 'axios';
import {
  GET_ONE_POST_SUCCESS,
  GET_ONE_POST_FAIL,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  POST_LOADING,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAIL
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


export const getOnePost = (params) => async (dispatch) =>{
  try{
    dispatch({
      type:POST_LOADING
    });
    const post = await axios.get(`/api/post/${params}`)
    dispatch({
      type:GET_ONE_POST_SUCCESS,
      payload:post.data
    })

  }catch(err){
    dispatch({
      type:GET_ONE_POST_FAIL,
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

export const submitComment = (formData) => async (dispatch) =>{
  const config = {
    "Content-Type" : "application/json"
  }


  try{

    dispatch({
      type:POST_LOADING
    });
    const submit = await axios.post('/api/post/comment',formData,config);

    dispatch({
      type:SUBMIT_COMMENT_SUCCESS

    });

    dispatch(getOnePost(formData.postId));

  } catch(err){
    dispatch({
      type:SUBMIT_COMMENT_FAIL,
      payload:err.response ? err.response:err
    })
  }
}
