import React from 'react';
import Likes from './Likes/Likes';
import Views from './Views/Views';
import cls from './Media.module.scss';

const Media = ({likes, views}) => {
  return (
    <div className={cls['container']}>
      <Views views={views}/>
      <Likes likes={likes}/>

    </div>
  );
}



export default Media;
