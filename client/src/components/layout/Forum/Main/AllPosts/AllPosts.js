import React, { useState } from 'react';
import cls from './AllPosts.module.scss';
import Post from '../Post/Post';
import Pagination from '../../../../UI/Pagination/Pagination';

const AllPosts = ({
  posts:{
    posts
  }
}) => {
  const postsPerPage = 4;
  const [page, setPage] = useState(1);
  if(posts){
    var numberOfPageBoxes = Math.ceil(posts.length/postsPerPage);
  }

  //the upperbound and lowerbound of the posts Index to be displayed
  const upperBound = page*postsPerPage;
  const lowerBound = (page - 1)*postsPerPage + 1;

  return (
    <div className={cls['container']}>
      <h1 className={cls['title']}>All Posts</h1>
      {posts ? posts.map((post,i)=>{
        const currentPostIdx = i + 1;
        if(currentPostIdx > upperBound || currentPostIdx < lowerBound) return;
        return <Post {...post} key={i}/>
      }) : null
    }
      <div className={cls['pagination-container']}>
          <Pagination
            numberOfPageBoxes={numberOfPageBoxes}
            currentPage = {page}
            setPage = {setPage}
          />
      </div>

    </div>
  );
}


export default AllPosts;
