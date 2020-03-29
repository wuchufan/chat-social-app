import React from 'react';
import classes from './NavBar.module.scss';
import logoutIcon from '../../../../assets/img/svg/logout.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../../../actions/auth';

const NavBar = ({ logout }) => {
  return (
      <ul className={classes['container']}>
        <NavLink to='/' onClick={logout} className={classes['navbar__item']}>
        <span role='button' className={classes['logout']}>
            <i className={`fas fa-sign-out-alt ${classes['icon']}`}></i>
        </span>
        </NavLink>
      </ul>
  );
}


export default connect(null,{ logout})(NavBar);
