import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import users from './user';


export default combineReducers({
  auth,
  profile,
  users
});
