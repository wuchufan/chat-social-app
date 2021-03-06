import React from 'react';
import cls from './ErrorMessageBox.module.scss';
import PropTypes from 'prop-types';

const ErrorMessageBox = ({children}) => {
  const ifEmpty = {
    color: 'transparent',
    visibility: 'none'
  };
  return (<div>
    <h5 style={children
        ? null
        : ifEmpty} className={cls['auth-error']}>{children ?? 'h'}</h5>
        {/* just place holder */}
  </div>);
};

ErrorMessageBox.propTypes = {
  children:PropTypes.string
};

export default ErrorMessageBox;
