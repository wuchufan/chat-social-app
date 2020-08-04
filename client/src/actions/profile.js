import axios from 'axios';
import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  PROFILE_EDIT_SUCCESS,
  PROFILE_EDIT_FAIL,

} from './types';


export const getCurrentProfile = () => async dispatch =>{
  try{

  const profile = await axios.get('/api/profile/me');
  dispatch({
    type:GET_PROFILE_SUCCESS,
    payload:profile.data
  });

  } catch (error){
    dispatch({
      type:GET_PROFILE_FAIL,
      payload:error.response

    })
  }
}


export const editProfile = (formData) => async dispatch =>{
  const config = {
    "Content-Type":"application/json"
  }
  // console.log(123);
  try{
    const profile = await axios.post('/api/profile', formData, config);
    dispatch({
      type:PROFILE_EDIT_SUCCESS,
      payload:profile.data
    });
  } catch(error){
    dispatch({
      type:PROFILE_EDIT_FAIL,
      payload:error.response
    })
  }
}
