import React from 'react';
import Moment from 'react-moment';
import cls from './Post.module.scss';
import Tag from './Tag/Tag';
import { Link } from 'react-router-dom';
import { reduceParagraphLength } from '../../../../../uti/reduceParagraphLength';

const Post = ({
  _id,
  tag,
  user,
  title,
  content,
  comment,
  likes,
  date,
  image
}) => {
  const contentLength = 30;
  let shortContent;
  if(content.split(' ').length > contentLength){
    shortContent = reduceParagraphLength(content, contentLength);
  } else{
    shortContent = content;
  }


  return (<article className={cls['container']}>

    {image ? <div className={cls['image']}>

        </div> : <div></div>}


    <div className={cls['post-container']}>
      <div className={cls['creator-info-container']}>
        <p className={cls['creator-info-container__date']}><Moment date={date} format='MMMM DD, YYYY'/></p>
        <p className={cls['creator-info-container__author']}>by {user ? user.username : null}</p>
      </div>

      <Link to={`/forum/${_id}`} className={cls['post-container__title']}>{title}</Link>
      <p className={cls['post-container__intro']}>{shortContent}{shortContent !== content ? '...' : null}</p>

      <div className={cls['tags']}>
        {tag.map((elem)=><Tag>{elem}</Tag>)}
      </div>
      <div className={cls['media-info-container']}>
        {comment && likes ? <>
          <div className={cls['media-info-container__comments']}>{comment.length} Comment{comment.length > 1 ? 's': null}</div>
          <div className={cls['media-info-container__likes']}>{likes.length} like{likes.length > 1 ? 's': null}</div>
        </> : null}
      </div>
    </div>


  </article>);
}



export default Post;
