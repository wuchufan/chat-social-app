import React from 'react';
import PostComment from './PostComment/PostComment';
import Comment from './Comment/Comment';


const Comments = ({comments}) => {
  console.log(comments);
  return (
    <section>
      {comments.map((comment)=>{
        return <Comment key={comment._id} {...comment}/>;
      })}

      <PostComment/>
    </section>
  );
}


export default Comments;
