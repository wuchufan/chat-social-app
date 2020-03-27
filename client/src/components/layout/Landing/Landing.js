import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import classes from './Landing.module.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ auth:{ isAuthenticated }}) =>{

  if(isAuthenticated) return <Redirect to='/dashboard'/>


  return (
    <section className={classes['landing']}>
      <div className={classes['container']}>
        <NavLink to='/auth/sign-up' exact className={classes['button']}>Sign Up</NavLink>
        <NavLink to='/auth/sign-in' exact className={classes['button']}>Sign In</NavLink>
      </div>
    </section>
  )
}

Landing.propTypes={
  auth:PropTypes.object.isRequired
}


const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps)(Landing);
