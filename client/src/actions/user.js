import axios from 'axios';
import {
  USERNAME_EDIT_SUCCESS,
  USERNAME_EDIT_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAIL,
  DELETE_ACCOUNT_FAIL,
  LOG_OUT
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
