import React from 'react';
import cls from './Media.module.scss';

const Media = ({
  likes,
  views
}) => {
  return (
    <div className={cls['container']}>
      <p className={cls['views']}>Views: {views ? views : '0'}</p>
      <p>Likes: {likes.length ? likes.length : '0'}</p>
    </div>
  );
}



export default Media;
