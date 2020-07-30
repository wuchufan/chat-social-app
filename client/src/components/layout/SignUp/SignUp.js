import React, {Fragment, useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register, clearErrMessage} from '../../../actions/auth';
import classes from './SignUp.module.scss';
import AuthButton from '../../UI/Buttons/AuthButton/AuthButton';
import ErrorMessageBox from '../../UI/ErrorMessageBox/ErrorMessageBox';
import PropTypes from 'prop-types';

const SignUp = ({
  auth: {
    isAuthenticated,
    user,
    errMessage,
    authLoading
  },
  register,
  clearErrMessage,
  setAccount
}) => {
  const [localError, setLocalError] = useState(null);
  const [formData, setForm] = useState({username: '', email: '', password: '', password2: ''})

  const {username, email, password, password2} = formData;

  const onChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isAuthenticated && user)
    return <Redirect exact="exact" to='/chat-room'/>

  return (<Fragment>
    <div className={classes['form-container']}>
      <form className={classes['form']} onSubmit={(e) => {
          e.preventDefault();
          if (password !== password2) {
            setLocalError('Re-entered password is not the same as password!');

          } else {
            setLocalError(null);
            register({username, email, password});
          }

        }}>
        <div className={classes['form__title']}>
          <h3 className={classes['form__title--primary']}>Sign Up</h3>
          <h4 className={classes['form__title--secondary']}>
            Welcome and nice to see you!
          </h4>
        </div>
        <div className={classes['form__input']}>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Username</h5>
            <input className={classes['input']} value={username} type='text' name='username' onChange={(e) => onChange(e)} autoComplete='off' required/>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Email</h5>
            <input className={classes['input']} value={email} type='email' name='email' onChange={(e) => onChange(e)} required/>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Password</h5>
            <input className={classes['input']} value={password} type='password' name='password' onChange={(e) => onChange(e)} autoComplete='off'></input>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Re-enter Password</h5>
            <input className={classes['input']} value={password2} type='password' name='password2' onChange={(e) => onChange(e)} autoComplete='off'></input>
          </div>
          <ErrorMessageBox>{localError ?? errMessage}</ErrorMessageBox>
          <AuthButton loading={authLoading}>Register</AuthButton>

        </div>

      </form>
      <div className={classes['redirect']}>
        <p>
          Already have an account?{' '}
          <span style={{
              cursor: 'pointer',
              color: 'white'
            }} role='button' onClick={() => {
              setAccount(true);
              clearErrMessage();
            }}>Sign in</span>
        </p>
      </div>
    </div>
  </Fragment>);
}

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {register, clearErrMessage})(SignUp);
