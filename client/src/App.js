import React,{ Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/layout/Landing/Landing';
import NavBar from './components/layout/NavBar/NavBar';
import Auth from './components/layout/Auth/Auth';

//redux
import store from './store';
import { Provider } from 'react-redux';


import './App.module.scss';

const App = () => {
  return (
<Provider store={store}>
  <Router>
    <Fragment>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/auth' component={Auth}/>
      </Switch>

    </Fragment>
  </Router>
</Provider>
  );
}

export default App;
