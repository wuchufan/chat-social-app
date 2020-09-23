import React from 'react';
import cls from './NewPosts.module.scss';
import Post from '../Post/Post';


const NewPosts = ({}) => {
  return (
    <div className={cls['container']}>
      <h1 className={cls['title']}>New Posts</h1>
      <Post/>
    </div>
  );
}


export default NewPosts;
