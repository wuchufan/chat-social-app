import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavBar.module.scss';
import { logout } from '../../../actions/auth';





const NavBar = ({auth:{ isAuthenticated, loading }, logout})=>{

  const guestNav = (
      <Fragment>
          <NavLink to='/' className={classes['navbar__item']}>
            Main
          </NavLink>
          <NavLink to='/people' className={classes['navbar__item']}>
            People
          </NavLink>
        </Fragment>);

  const authNav = (
    <Fragment>
          <NavLink to='/people' className={classes['navbar__item']}>
            People
          </NavLink>
          <NavLink to='/chat-room' className={classes['navbar__item']}>
            Chat Room
          </NavLink>
          <NavLink to='/posts' className={classes['navbar__item']}>
            Posts
          </NavLink>
          <NavLink to='/dashboard' className={classes['navbar__item']}>
            dashboard
          </NavLink>
        <NavLink to='/' onClick={logout} className={classes['navbar__item']}>
          log out
        </NavLink>
        </Fragment>)



  return (
    <nav className={classes['container']}>
      <ul className={classes['navbar']}>
        {isAuthenticated ? authNav : guestNav}
      </ul>
    </nav>
  )
}

const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps, { logout })(NavBar);
