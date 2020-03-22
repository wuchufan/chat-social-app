import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.scss';


const NavBar = props =>{
  return (
    <nav className={classes['container']}>
      <ul className={classes['navbar']}>
        <NavLink to='/people' className={classes['navbar__item']}>
          People
        </NavLink>
        <NavLink to='/chat-room' className={classes['navbar__item']}>
          Chat Room
        </NavLink>
        <NavLink to='/posts' className={classes['navbar__item']}>
          Posts
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar;
