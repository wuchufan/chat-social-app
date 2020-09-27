import React,{ Fragment, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Route components
import PrivateRoute from './components/routing/PrivateRoute';
import Landing from './components/layout/Landing/Landing';
import Profile from './components/layout/Profile/Profile';
import EditProfile from './components/layout/Profile/EditProfile/EditProfile';
import ChatRoom from './components/layout/ChatRoom/ChatRoom';
import People from './components/layout/People/People';
import Forum from './components/layout/Forum/Forum';
import ForumPost from './components/layout/ForumPost/ForumPost';
import CreatePost from './components/layout/Forum/CreatePost/CreatePost';


import { loadUser } from './actions/auth';
import setAuthState from './uti/setAuthState';

//redux
import store from './store';
import { Provider } from 'react-redux';

//increase visitor count
import increaseVisitCount from './uti/increaseVisitCount';

//css
import './App.module.scss';


if(localStorage.token){
  setAuthState(localStorage.token);
}

const App = () => {

  useEffect(()=>{
      store.dispatch(loadUser());
  },[]);

  useEffect(()=>{
    increaseVisitCount();
  },[]);

  return (
<Provider store={store}>
  <Router>
    <Fragment>
      <Switch>
        <PrivateRoute exact path='/chat-room' component={ChatRoom}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <PrivateRoute exact path='/profile/edit-profile' component={EditProfile}/>
        <PrivateRoute exact path='/forum/create-post' component={CreatePost}/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/people' component={People}/>
        <Route exact path='/forum' component={Forum}/>
        <Route path='/forum/:id' component={ForumPost}/>
      </Switch>
    </Fragment>
  </Router>
</Provider>
  );
}

export default App;
