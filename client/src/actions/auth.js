import axios from 'axios';
import setAuthState from '../uti/setAuthState';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
  CLEAR_ERR_MESSAGE,
  AUTH_LOADING,
  CLEAR_PROFILE
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
      payload:err

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
    dispatch(isAuthenticating());
    const res = await axios.post('/api/auth',{username,email,password},config);

    dispatch({
      type:REGISTER_SUCCESS,
      payload:res.data
    });
      dispatch(loadUser());
  }catch(error){

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
    dispatch(isAuthenticating());
    const res = await axios.post('/api/auth/login',{email,password},config);

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

//check if authenticating
export const isAuthenticating = () => dispatch =>{

  dispatch({
    type:AUTH_LOADING
  })
}



//clear error messages

export const clearErrMessage = () => dispatch =>{
  dispatch({
    type:CLEAR_ERR_MESSAGE
  })
}
