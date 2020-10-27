import axios from 'axios';
import {
  USERNAME_EDIT_SUCCESS,
  USERNAME_EDIT_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  DELETE_ACCOUNT_FAIL,
  LOG_OUT,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAIL
} from './types';

//get all users
export const getAllUsers = () => async dispatch =>{
  try{
    const res = await axios.get('/api/user');
    const profiles = res.data.msg;


    dispatch({
      type:GET_ALL_USERS_SUCCESS,
      payload:profiles
    })

  } catch(err){
    dispatch({
      type:GET_ALL_USERS_FAIL,
      payload:err
    })
  }
}


export const editUserAvatar = (newAvatar) => async dispatch =>{
  const config = {
    'Content-Type': 'multipart/form-data'
  }

  try{
    const res = await axios.put('/api/user/avatar',newAvatar,config);

    dispatch({
      type:UPDATE_AVATAR_SUCCESS,
      payload:res.data
    })

  } catch(err){
    dispatch({
      type:UPDATE_AVATAR_FAIL,
      payload:err
    })

  }
}

//edit username

export const editUsername = ({newUserName}) => async dispatch =>{

  const config = {
    "Content-Type" : "application/json"
  }

  try{

    const res = await axios.put('/api/user',{newUserName},config);

    dispatch({
      type:USERNAME_EDIT_SUCCESS,
      payload:res.data
    });

  } catch (error){
    dispatch({
      type:USERNAME_EDIT_FAIL,
      payload:error
    })

  }
}


export const deleteAccount = () => async dispatch =>{
  try{
    await axios.put('/api/user/delete-account');
    dispatch({
      type:LOG_OUT
    });
  }catch(err){
    dispatch({
      type:DELETE_ACCOUNT_FAIL,
      payload:err
    })
  }
}
