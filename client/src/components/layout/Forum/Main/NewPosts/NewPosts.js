import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import cls from './NewPosts.module.scss';
import Post from '../Post/Post';
import Button from '../../../../UI/Buttons/ProfileButton/ProfileButton';



const NewPosts = ({
  history,
  auth:{
    isAuthenticated
  },
  posts:{
    posts
  }

}) => {



  const buttonHandler = () =>{
    history.push({pathname:'/forum/create-post'});
  }

  return (
    <div className={cls['container']}>
      <div className={cls['title']}>
        <h1 className={cls['title__text']}>New Post</h1>
        {isAuthenticated ?  <Button click={()=>buttonHandler()} type='button' color='info'>Create Post</Button> : null}
      </div>
      {posts ? posts.map((post,i)=>{
        const postsToDisplay = 1 - 1;

        if(i > postsToDisplay) {
          return
        } else{
        return <Post {...post} key={i}/>
        }
      }) : null
    }

    </div>
  );
}


const mapStateToProps = state =>({
  auth:state.auth
})


export default connect(mapStateToProps)(withRouter(NewPosts));
