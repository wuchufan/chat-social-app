import React from 'react';
import { NavLink, Switch,Route } from 'react-router-dom';
import classes from './Landing.module.scss';
import PropTypes from 'prop-types';

const Landing = props =>{
  return (
    <section className={classes['landing']}>
      <div className={classes['container']}>
        <NavLink to='/auth/sign-up' exact className={classes['button']}>Sign Up</NavLink>
        <NavLink to='/auth/sign-in' exact className={classes['button']}>Sign In</NavLink>
      </div>
    </section>
  )
}

export default Landing;
