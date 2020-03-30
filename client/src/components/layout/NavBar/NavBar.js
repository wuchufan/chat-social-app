import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './NavBar.module.scss';
import { logout } from '../../../actions/auth';





const NavBar = ({auth:{ isAuthenticated, loading, user }, logout, history})=>{

  const guestNav = (
      <Fragment>
          <NavLink activeClassName={classes['active']} to='/' className={classes['navbar__item']}>
            Main
          </NavLink>
          <NavLink to='/people' className={classes['navbar__item']}>
            People
          </NavLink>
        </Fragment>);

  const authNav = (
    <Fragment>

          <NavLink to='/chat-room' className={classes['navbar__item']}>
            Chat Room
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
      <div className={classes['icon']}>{'{G}'}roup</div>
      <ul className={classes['navbar']}>
        {isAuthenticated && user ? authNav : guestNav}
      </ul>
    </nav>
  )
}

const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps, { logout })(NavBar);
