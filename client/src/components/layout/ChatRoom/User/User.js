import React from 'react';
import defaultImg from '../../../../assets/img/default.jpg';
import classes from './User.module.scss';

const User = ({user:{
  username,
  avatar,
  room
}}) => {
  return (
    <div className={classes['container']}>
      <div className={classes['avatar']}>
        <img src={avatar === '' ? defaultImg : avatar} alt='avatar' className={classes['avatar__img']}/>
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
