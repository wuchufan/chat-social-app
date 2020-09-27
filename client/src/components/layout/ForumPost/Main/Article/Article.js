import React from 'react';
import Moment from 'react-moment';
import cls from './Article.module.scss';
import Media from './Media/Media';

const Article = ({
  post:{
      title,
      date,
      user:{
        username
      },
      content,
      likes
  }
}) => {

  return (
    <article className={cls['container']}>
      <div className={cls['post-info']}>
        <p className={cls['post-info__date']}>
          <Moment date={date} format='MMMM DD, YYYY'/>
        </p>
        <p className={cls['post-info__username']}>
          {'by '}{username}
        </p>
      </div>
      <h1 className={cls['title']}>
        {title}
      </h1>

      <p className={cls['content']}>
        {content}
      </p>
      <Media likes={likes}/>
    </article>
  );
}



export default Article;
