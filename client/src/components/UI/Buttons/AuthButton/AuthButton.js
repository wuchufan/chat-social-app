import React from 'react';
import cls from './AuthButton.module.scss';
import spinner from './AuthSpinner.svg';
import PropTypes from 'prop-types';


const AuthButton = ({children,loading}) => {

  return (
    <button className={cls['submit-button']} type='submit'>
      {loading ? <img className={cls['auth-spinner']} alt='spinner' src={spinner}/>: children}
    </button>
  );
}

AuthButton.propTypes = {
  children: PropTypes.string.isRequired
};

export default AuthButton;
