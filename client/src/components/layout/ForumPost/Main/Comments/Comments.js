import React from 'react';
import { connect } from 'react-redux';
import PostComment from './PostComment/PostComment';
import Comment from './Comment/Comment';


const Comments = ({
  comments,
  auth:{
    isAuthenticated
  }
}) => {

  return (
    <section>
      {comments.map((comment)=>{
        return <Comment key={comment._id} {...comment}/>;
      })}
      {isAuthenticated ? <PostComment/> : null}

    </section>
  );
}

const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps)(Comments);
