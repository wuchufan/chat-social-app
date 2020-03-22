import React,{ Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './SignUp.module.scss';


const SignIn = props => {
  return (
    <Fragment>
    <div className={classes['form-container']}>
      <form className={classes['form']}>
        <div className={classes['form__title']}>
          <h3 className={classes['form__title--primary']}>Sign Up</h3>
          <h4 className={classes['form__title--secondary']}>Welcome and nice to see you!</h4>
        </div>
        <div className={classes['form__input']}>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Username</h5>
            <input className={classes['input']} type='text'></input>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Email</h5>
            <input className={classes['input']} type='text'></input>
          </div>
          <div className={classes['input-container']}>
            <h5 className={classes['label']}>Password</h5>
            <input className={classes['input']} type='text'></input>
          </div>
        </div>
      </form>
      <div className={classes['redirect']}>
        <p>Already have an account? <Link exact to='/auth/sign-in'>Sign in</Link></p>
      </div>
    </div>
</Fragment>
);
}

export default SignIn;
