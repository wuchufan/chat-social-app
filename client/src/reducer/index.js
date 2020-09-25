import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import users from './user';
import post from './post';


export default combineReducers({
  auth,
  profile,
  users,
  post
});
