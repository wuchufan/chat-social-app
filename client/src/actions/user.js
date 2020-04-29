import axios from 'axios';
import {
  USERNAME_EDIT_SUCCESS,
  USERNAME_EDIT_FAIL
} from './types';

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
      payload:error.response.data.msg
    })

  }

}
