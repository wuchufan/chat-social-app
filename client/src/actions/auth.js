import axios from 'axios';
import setAuthState from '../uti/setAuthState';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT
} from './types';


//load user authentication state
export const loadUser = () => async dispatch=>{
  if(localStorage.token){
    setAuthState(localStorage.token)
  }
  try{
    const res = await axios.get('/api/auth');

    dispatch({
      type:USER_LOADED,
      payload:res.data
    });

  } catch(err){
    dispatch({
      type:AUTH_ERROR,
      payload:err.response.data

    });
  }

}



//register user
export const register = ({username, email, password}) => async dispatch =>{
  const config = {
    headers:{
      "Content-Type":"application/json"
    }
  }
  try{

    const res = await axios.post('/api/user',{username,email,password},config);
    dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data
    });
      dispatch(loadUser());
  }catch(error){
    console.log(error);
    dispatch({
      type:REGISTER_FAIL,
      payload:error.response.data.msg
    })
  }
}

//login user
export const login = ({email, password}) => async dispatch =>{
  const config = {
    headers:{
      "Content-Type":"application/json"
    }
  }
  try{

    const res = await axios.post('/api/auth',{email,password},config);



    dispatch({
      type:LOGIN_SUCCESS,
      payload:res.data
    });
      dispatch(loadUser());

  }catch(error){

    dispatch({
      type:LOGIN_FAIL,
      payload:error.response.data.msg
    })
  }
}

//logout user

export const logout = () => dispatch =>{
  dispatch({
    type:LOG_OUT
  });
}
