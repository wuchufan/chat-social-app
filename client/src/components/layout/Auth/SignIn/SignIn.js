import React,{ Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../../actions/auth';
import classes from './SignIn.module.scss';
import PropTypes from 'prop-types';


const SignIn = ({ login,auth:{isAuthenticated} }) => {

  const [formData, setForm] = useState({
    email:'',
    password:'',

  })

  const {
    email,
    password,

  } = formData;

  const onChange = (e) =>{
    setForm({
      ...formData,
      [e.target.name] : e.target.value
    });
  }
  if(isAuthenticated) return <Redirect to='/dashboard'/>

  return (
    <Fragment>
    <div className={classes['form-container']}>
      <form className={classes['form']} onSubmit={(e)=>{
        e.preventDefault();
        login({email,password})
      }}>
        <div className={classes['form__title']}>
          <h3 className={classes['form__title--primary']}>Sign In</h3>
          <h4 className={classes['form__title--secondary']}>Welcome back!</h4>
        </div>
        <div className={classes['form__input']}>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Email</h5>
            <input className={classes['input']} value={email} type='email' name='email' onChange={(e)=>onChange(e)}></input>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Password</h5>
            <input className={classes['input']} value={password} type='password' name='password' onChange={(e)=>onChange(e)} autoComplete='off'></input>
          </div>

          <button className={classes['submit-button']} type='submit'>
            Log in
          </button>
        </div>

      </form>
      <div className={classes['redirect']}>
        <p>Don't have an account? <Link exact="true" to='/auth/sign-up'>Sign Up</Link></p>
      </div>
    </div>
</Fragment>
);
}

SignIn.propTypes={
  login:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth:state.auth
});


export default connect(mapStateToProps,{ login })(SignIn);
