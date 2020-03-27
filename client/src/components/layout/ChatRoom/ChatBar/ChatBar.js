import React from 'react';
import classes from './ChatBar.module.scss';
import PropTypes from 'prop-types';

const ChatBar = ({message, setMessage, sendMessage}) => {

  const onChange = (e) =>{
    setMessage(e.target.value);
  }
  return (
    <input
      type="text"
      name='message'
      value={message}
      onChange={(e)=>onChange(e)}
      onKeyPress={e => e.key === 'Enter' && sendMessage(e)}
      className={classes['type-block']}
      autoComplete='off'
    />

  );
}

ChatBar.propTypes = {
  message : PropTypes.string,
  setMessage:PropTypes.func
};

export default ChatBar;
