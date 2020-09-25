import React from 'react';
import Moment from 'react-moment';
import cls from './Post.module.scss';
import Tag from './Tag/Tag';


const Post = ({
  tag,
  user,
  title,
  content,
  comment,
  likes,
  date,
  image
}) => {


  return (<article className={cls['container']}>

    {image ? <div className={cls['image']}>

        </div> : <div></div>}


    <div className={cls['post-container']}>
      <div className={cls['creator-info-container']}>
        <p className={cls['creator-info-container__date']}><Moment date={date} format='MMMM DD, YYYY'/></p>
        <p className={cls['creator-info-container__author']}>by {user ? user.username : null}</p>
      </div>

      <h1 className={cls['post-container__title']}>{title}</h1>
      <p className={cls['post-container__intro']}>{content}</p>

      <div className={cls['tags']}>
        <Tag>game</Tag>
        <Tag>development</Tag>
      </div>
      <div className={cls['media-info-container']}>
        {comment && likes ? <>
          <div className={cls['media-info-container__comments']}>{comment.length} Comment{comment.length > 0 ? 's': null}</div>
          <div className={cls['media-info-container__likes']}>{likes.length} likes{likes.length > 0 ? 's': null}</div>
        </> : null}

      </div>
    </div>


  </article>);
}



export default Post;
