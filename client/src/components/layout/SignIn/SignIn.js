import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {login, clearErrMessage} from '../../../actions/auth';
import classes from './SignIn.module.scss';
import AuthButton from '../../UI/Buttons/AuthButton/AuthButton';
import ErrorMessageBox from '../../UI/ErrorMessageBox/ErrorMessageBox';
import PropTypes from 'prop-types';

const SignIn = ({
  login,
  clearErrMessage,
  auth: {
    isAuthenticated,
    user,
    errMessage,
    authLoading,
  },
  setAccount
}) => {

  const [formData, setForm] = useState({email: '', password: ''});
  const {email, password} = formData;

  const onChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  if (isAuthenticated && user) {

    return <Redirect to='/chat-room'/>
  }

  return (<Fragment>
    <div className={classes['form-container']}>
      <form className={classes['form']} onSubmit={(e) => {
          e.preventDefault();
          login({email, password});

        }}>
        <div className={classes['form__title']}>
          <h3 className={classes['form__title--primary']}>Sign In</h3>
          <h4 className={classes['form__title--secondary']}>Welcome back!</h4>
        </div>
        <div className={classes['form__input']}>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Email</h5>
            <input className={classes['input']} value={email} type='email' name='email' placeholder='guest@gmail.com' onChange={(e) => onChange(e)} required></input>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Password</h5>
            <input className={classes['input']} value={password} type='password' name='password' placeholder='guest' onChange={(e) => onChange(e)} autoComplete='off' required></input>
          </div>

          <ErrorMessageBox>{errMessage}</ErrorMessageBox>
          <AuthButton loading={authLoading}>Log in</AuthButton>
        </div>

      </form>


      <div className={classes['redirect']}>
        <p>
          Don't have an account?{' '}
          <span style={{
              cursor: 'pointer',
              color: 'white'
            }} role='button' onClick={() => {
              setAccount(false);
              if(errMessage){
                clearErrMessage();
              }

            }}>Sign Up
          </span>
        </p>
      </div>
    </div>
  </Fragment>);
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {login, clearErrMessage})(SignIn);
