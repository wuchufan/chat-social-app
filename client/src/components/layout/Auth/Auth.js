import React from 'react';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Switch, Route } from 'react-router-dom';
import classes from './Auth.module.scss';


const Auth = props => {
  return (
  <section className={classes['landing']}>
      <div className={classes['container']}>
        <Switch>
          <Route exact path='/auth/sign-in' component={SignIn}/>
          <Route exact path='/auth/sign-up' component={SignUp}/>
        </Switch>
      </div>
  </section>)
}

export default Auth;
