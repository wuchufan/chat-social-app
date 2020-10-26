import React from 'react';
import defaultImage from '../../../../../../assets/img/default.jpg';
import Moment from 'react-moment';
import cls from './Comment.module.scss';

const Comment = ({
  date,
  text,
  user:{
    username
  },
  avatar
}) => {
  return (
    <div className={cls['container']}>
      <div className={cls['avatar']}>
        {avatar ? avatar : <img className={cls['avatar__img']} src={defaultImage} alt=''/>}
      </div>
      <div className={cls['comment-container']}>
        <p className={cls['comment-container__username']}>{username}</p>
        <p className={cls['comment-container__post-date']}><Moment date={date} format='MMMM DD, YYYY'/></p>
        <p className={cls['comment-container__comment']}>
          {text}
        </p>
      </div>
    </div>
  );
}


export default Comment;
