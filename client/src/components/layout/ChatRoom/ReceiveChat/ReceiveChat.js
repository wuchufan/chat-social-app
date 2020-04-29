import React,{ Fragment } from 'react';
import defaultImg from '../../../../assets/img/default.jpg';
import Moment from 'react-moment';
import classes from './ReceiveChat.module.scss';

const ReceiveChat = ({
  receiveMsg:{
    user:{
      _id,
      username
    },
    timeInfo,
    msg,
    showFull,
    isFirst

  },

}) => {

  let renderFull = null;
  if(showFull){
    renderFull = (<Fragment>
        <div className={classes['message__avatar']}>
              <img className={classes['avatar']} src={defaultImg} alt='avatar'/>
            </div>
            <div className={classes['message__namedate']}>
                <span className={classes['message__name']}>
                   {username}
                </span>
                <span className={classes['message__date']}>
                  at {timeInfo && <Moment format='h:mm A'>{timeInfo}</Moment>}
                </span>
            </div>
      </Fragment>)
  }

  return (
    <div style={!showFull ? {
      gridTemplateAreas:"'date message'",
      gridTemplateColumns: '5% auto'
    }: !isFirst ? {
      marginTop:5+'rem'
    }: null} className={classes['message']}>

      {renderFull}

      {!showFull && <div className={classes['message__date']+' '+classes['message--hover']}>{timeInfo && <Moment format='h:mm A'>{timeInfo}</Moment>}</div>}

      <div className={classes['message__message']}>{msg}</div>
    </div>

  );
}


export default ReceiveChat;
