import React from 'react';
import NewPosts from './NewPosts/NewPosts';
import AllPosts from './AllPosts/AllPosts';
import cls from './Main.module.scss';

const Main = ({}) => {
  return (
    <section className={cls['container']}>
      <NewPosts/>
      <AllPosts/>
    </section>
  );
}



export default Main;
