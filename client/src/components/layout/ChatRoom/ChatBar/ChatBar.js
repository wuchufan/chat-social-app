import React, {useState} from 'react';
import classes from './ChatBar.module.scss';
import PropTypes from 'prop-types';

const ChatBar = ({sendMessage}) => {
  const [localMessage, setLocalMessage] = useState('');

  const onChange = (e) =>{
    setLocalMessage(e.target.value);

  }
  const onKeyPress = (e)=>{
    if(e.key === 'Enter'){
      sendMessage(localMessage);
      setLocalMessage('');
    }
  }


  return (
    <input
      type="text"
      name='message'
      value={localMessage}
      onChange={(e)=>onChange(e)}
      onKeyPress={e => onKeyPress(e)}
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
