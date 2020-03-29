import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../../../actions/auth';

const NavBar = ({ logout }) => {
  return (
    <nav>
      <ul className={'container'}>
        <NavLink to='/' onClick={logout} className={classes['navbar__item']}>
          log out
        </NavLink>
      </ul>
    </nav>
  );
}


export default connect(null,{ logout})(NavBar);
