import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../../../actions/post';
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
  },
  getAllPosts
}) => {


  useEffect(()=>{
    getAllPosts();
  },[]);

  const buttonHandler = () =>{
    history.push({pathname:'/forum/create-post'});
  }

  return (
    <div className={cls['container']}>
      <div className={cls['title']}>
        <h1 className={cls['title__text']}>New Posts</h1>
        {isAuthenticated ?  <Button click={()=>buttonHandler()} type='button' color='info'>Create Post</Button> : null}
      </div>
      {posts ? posts.map((post,i)=>{
        if(i > 2) return
        return <Post {...post} key={i}/>
      }) : null}
      {/* <Post/> */}
    </div>
  );
}


const mapStateToProps = state =>({
  auth:state.auth,
  posts:state.post
})


export default connect(mapStateToProps, { getAllPosts })(withRouter(NewPosts));
