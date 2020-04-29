import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../../../actions/auth';

const NavBar = ({ logout }) => {
  return (
      <ul style={{
        width:'100%'
      }}>
        <li className={classes['container']}>

        <NavLink to='/profile' className={classes['navbar__item']}>
        <span role='button' className={classes['button__outer']}>

          <span className={classes['tool-tip']+' '+classes['tool-tip--profile']}></span>
            <i className={`far fa-id-card ${classes['icon']}`}></i>
        </span>
        </NavLink>
        </li>

        <li className={classes['container']}>

        <NavLink to='/' onClick={logout} className={classes['navbar__item']}>
        <span role='button' className={classes['button__outer']}>
          <span className={classes['tool-tip']+' '+ classes['tool-tip--logout']}></span>
            <i className={`fas fa-sign-out-alt ${classes['icon']} ${classes['rotate']}`}></i>
        </span>
        </NavLink>
        </li>
      </ul>
  );
}


export default connect(null,{ logout})(NavBar);
