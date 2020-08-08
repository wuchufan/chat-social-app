import React from 'react';
import classes from './NavItem.module.scss';
import { NavLink } from 'react-router-dom';

const NavItem = ({click,to,children,icon,rotateIcon}) => {

  let iconClass = `${icon} ${classes['icon']}`;
  if(rotateIcon) {
    iconClass = `${iconClass} ${classes['rotate']}`
    };

  return (
    <li className={classes['container']}>

    <NavLink onClick={click} to={to} className={classes['navbar__item']}>
    <span role='button' className={classes['button__outer']}>

        <i className={iconClass}></i>
    </span>
    <span className={classes['tool-tip']}>
      <span className={classes['tool-tip--inner']}>
        {children}
      </span>
      </span>
    </NavLink>
    </li>
  );
}



export default NavItem;
