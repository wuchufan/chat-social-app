import React, {Fragment} from 'react';
import spinner from './spinner.gif';

export default({style}) => {

  const spinnerStyle = {
    margin: 'auto',
    width: '200px',
    display: 'block',
    ...style

  }

  return (<Fragment>
    <img src={spinner} style={spinnerStyle} alt='loading...'/>
  </Fragment>)
}
