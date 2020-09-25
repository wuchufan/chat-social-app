import axios from 'axios';
import {
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAIL
} from './types';

export const submitPost = (formData, history = null) => async (dispatch) =>{

  const config = {
    "Content-Type":"application/json"
  }

  try{
    dispatch({
      type:EDIT_POST_LOADING
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
