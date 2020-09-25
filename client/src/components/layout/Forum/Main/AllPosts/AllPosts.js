import React from 'react';
import cls from './AllPosts.module.scss';
import Post from '../Post/Post';
import Pagination from '../../../../UI/Pagination/Pagination';

const AllPosts = () => {
  return (
    <div className={cls['container']}>
      <h1 className={cls['title']}>All Posts</h1>
      <Post/>
      <div className={cls['pagination-container']}>
          <Pagination/>
      </div>

    </div>
  );
}

export default AllPosts;
