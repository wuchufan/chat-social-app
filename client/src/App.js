import React,{ Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Landing from './components/layout/Landing/Landing';
import Profile from './components/layout/Profile/Profile';
import EditProfile from './components/layout/Profile/EditProfile/EditProfile';

// import Auth from './components/layout/Auth/Auth';
import ChatRoom from './components/layout/ChatRoom/ChatRoom';
import { loadUser } from './actions/auth';
import setAuthState from './uti/setAuthState';

//redux
import store from './store';
import { Provider } from 'react-redux';

import './App.module.scss';

if(localStorage.token){
  setAuthState(localStorage.token);
}

const App = () => {
  useEffect(()=>{
      store.dispatch(loadUser());
  },[]);

  return (
<Provider store={store}>
  <Router>
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/chat-room' component={ChatRoom}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <PrivateRoute exact path='/profile/edit-profile' component={EditProfile}/>
        <Route exact path='/' component={Landing}/>
      </Switch>
    </Fragment>
  </Router>
</Provider>
  );
}

export default App;
