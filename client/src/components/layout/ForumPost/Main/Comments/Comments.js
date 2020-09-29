import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../../../../UI/Buttons/ProfileButton/ProfileButton';
import PostComment from './PostComment/PostComment';
import Comment from './Comment/Comment';


const Comments = ({
  comments,
  auth:{
    isAuthenticated
  },
  history
}) => {

  const buttonHandler = () =>{
    history.push({pathname:'/'});
  }

  return (
    <section>
      {comments.map((comment)=>{
        return <Comment key={comment._id} {...comment}/>;
      })}
      {isAuthenticated ? <PostComment/> : <div style={{
        margin:'auto'
      }}>
        <p style={{
          fontSize:'2rem',
          color:'#333',
          marginBottom:'2rem'
        }}>Sign up or sign in to post comments!</p>
        <Button click={()=>buttonHandler()} color='info'>Sign Up</Button>
        <Button click={()=>buttonHandler()} color='info'>Sign In</Button>
      </div>}

    </section>
  );
}

const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps)(withRouter(Comments));
