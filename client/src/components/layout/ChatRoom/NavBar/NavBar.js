import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logout } from '../../../../actions/auth';
import NavItem from './NavItem/NavItem';

const NavBar = ({ logout }) => {

  return (
      <ul style={{
        width:'100%'
      }} className={classes['container-2']}>

      <NavItem icon={'far fa-id-card'} to={'/profile'}>Profile</NavItem>
      <NavItem rotateIcon={true} icon={'fas fa-sign-out-alt'} to={'/'} click={logout}>Log out</NavItem>

      </ul>
  );
}


export default connect(null,{ logout})(NavBar);
