import React from 'react';
import classes from './ReceiveChat.module.scss';

const ReceiveChat = ({receiveMsg,user}) => {
  return (
    <div className={classes['message']}>
      <div className={classes['message__name']}>{user.username}:</div>
      <div className={classes['message__message']}>{receiveMsg}</div>
    </div>

  );
}


export default ReceiveChat;
