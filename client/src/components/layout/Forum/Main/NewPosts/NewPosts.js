import React from 'react';
import { withRouter } from 'react-router-dom';
import cls from './NewPosts.module.scss';
import Post from '../Post/Post';
import Button from '../../../../UI/Buttons/ProfileButton/ProfileButton';



const NewPosts = ({history}) => {

  const buttonHandler = () =>{
    history.push({pathname:'/forum/create-post'});
  }

  return (
    <div className={cls['container']}>
      <div className={cls['title']}>
        <h1 className={cls['title__text']}>New Posts</h1>
        <Button click={()=>buttonHandler()} type='button' color='info'>Create Post</Button>
      </div>

      <Post/>
    </div>
  );
}


export default withRouter(NewPosts);
