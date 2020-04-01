import React from 'react';
import defaultImg from '../../../../assets/img/bili-test.jpg';
import classes from './User.module.scss';

const User = ({user:{
  username,
  room
}}) => {
  return (
    <div className={classes['container']}>
      <div className={classes['avatar']}>
        <img src={defaultImg} alt='avatar' className={classes['avatar__img']}/>
      </div>
      <div className={classes['username']}>
          {username}
      </div>
      <div className={classes['room']}>
        In room <strong>{room}</strong>
      </div>


    </div>
  );
}



export default User;
