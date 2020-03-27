import React,{ Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute';
import Landing from './components/layout/Landing/Landing';
import NavBar from './components/layout/NavBar/NavBar';
import Auth from './components/layout/Auth/Auth';
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
      <NavBar/>
      <Switch>
        <PrivateRoute exact path='/chat-room' component={ChatRoom}/>
        <Route exact path='/' component={Landing}/>
        <Route path='/auth' component={Auth}/>
      </Switch>
    </Fragment>
  </Router>
</Provider>
  );
}

export default App;
