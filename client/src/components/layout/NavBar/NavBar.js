import React, {Fragment, useState} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import classes from './NavBar.module.scss';
import {logout} from '../../../actions/auth';
import NavToggleButton from './NavToggleButton/NavToggleButton';
import UserProfile from './UserProfile/UserProfile'

const NavBar = ({
  auth: {
    isAuthenticated,
    loading,
    user
  },
  logout,
  history,
  location
}) => {
  const [showMenu, toggleMenu] = useState(false);
  let containerClass = classes['container'];
  if(location.pathname === '/') containerClass = classes['container'] + ' ' + classes['main-color'];
  let navClass = classes['navbar'];
  if(showMenu){
  navClass = `${classes['navbar']} ${classes['show-nav']}`
  }



  const guestNav = (<Fragment>

    <NavLink activeClassName={classes['active']} exact={true} to='/' className={classes['navbar__item']}>
      Main
    </NavLink>
    <NavLink activeClassName={classes['active']} exact={true} to='/forum' className={classes['navbar__item']}>
      Posts
    </NavLink>
    <NavLink activeClassName={classes['active']} exact={true} to='/people' className={classes['navbar__item']}>
      People
    </NavLink>

  </Fragment>);

  const authNav = (<Fragment>
    <NavLink activeClassName={classes['active']} exact={true} to='/forum' className={classes['navbar__item']}>
      Posts
    </NavLink>
    <NavLink activeClassName={classes['active']} exact={true} to='/chat-room' className={classes['navbar__item']}>
      Chat Room
    </NavLink>
    <NavLink activeClassName={classes['active']} exact={true} to='/profile' className={classes['navbar__item']}>
      Profile
    </NavLink>
    <NavLink activeClassName={classes['active']} exact={true} to='/people' className={classes['navbar__item']}>
      People
    </NavLink>
    {
      showMenu ?  ( <NavLink activeClassName={classes['active']} exact={true} to='/' onClick={logout} className={classes['navbar__item']}>
            Logout
          </NavLink>) : null
    }


  </Fragment>)



  return (

    <>
    { location.pathname === '/chat-room' ? null :
    <>
    <nav className={containerClass}>
    <NavLink exact={true} to='/' className={classes['icon']}>{'{G}'}roup</NavLink>
    <div className={classes['nav-toggle-button']}>
      <NavToggleButton toggle={toggleMenu} show={showMenu}/>
    </div>
    <ul className={navClass}>
      {
        isAuthenticated && user
          ? authNav
          : guestNav
      }
    </ul>

    {
      isAuthenticated && user
        ? (
          <div className={classes['user']}>
            <UserProfile logout={logout} user={user}/>
          </div>)
        : null
    }
  </nav>
  </>
}
</>
  )
}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps, {logout})(withRouter(NavBar));
