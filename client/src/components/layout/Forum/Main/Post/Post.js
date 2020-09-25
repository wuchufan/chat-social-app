import React from 'react';
import cls from './Post.module.scss';
import Tag from './Tag/Tag';

const Post = ({}) => {
  return (<article className={cls['container']}>
    <div className={cls['image']}>
      lorem
    </div>
    <div className={cls['post-container']}>
      <div className={cls['creator-info-container']}>
        <p className={cls['creator-info-container__date']}>FEBRUARY 01, 2020</p>
        <p className={cls['creator-info-container__author']}>by Donal Trump</p>
      </div>

      <h1 className={cls['post-container__title']}>Tailwind CSS static navbar with shadow on scroll for Vue applications</h1>
      <p className={cls['post-container__intro']}>Here's how to have a shadow on a static Tailwind navbar when the user scrolls the page for Vuejs applications</p>

      <div className={cls['tags']}>
        <Tag>game</Tag>
        <Tag>development</Tag>
      </div>
      <div className={cls['media-info-container']}>
        <div className={cls['media-info-container__comments']}>0 Comment</div>
        <div className={cls['media-info-container__likes']}>0 Like</div>
      </div>
    </div>


  </article>);
}

export default Post;
