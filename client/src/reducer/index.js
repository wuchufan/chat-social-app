import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
import user from './user';


export default combineReducers({
  auth,
  profile,
  user
});
