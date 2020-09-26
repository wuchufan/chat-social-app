import React, { useEffect } from 'react';
import NewPosts from './NewPosts/NewPosts';
import AllPosts from './AllPosts/AllPosts';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../../actions/post';
import cls from './Main.module.scss';

const Main = ({
  posts,
  getAllPosts

}) => {
  useEffect(()=>{
    getAllPosts();
  },[])

  return (
    <section className={cls['container']}>
      <NewPosts posts={posts}/>
      <AllPosts posts={posts}/>
    </section>
  );
}

const mapStateToProps = state =>({
  posts:state.post
})

export default connect(mapStateToProps,{ getAllPosts })(Main);
