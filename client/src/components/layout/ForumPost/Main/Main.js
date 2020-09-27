import React,{ useEffect }  from 'react';
import Article from './Article/Article';
import Comments from './Comments/Comments';
import cls from './Main.module.scss';
import { getOnePost } from '../../../../actions/post';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Main = ({
    match:{
      params:{
        id
      }
    },
    getOnePost,
    post:{
      post,
      loading
    }
}) => {


  useEffect(()=>{
    getOnePost(id);
  },[]);

  return (
    <section className={cls['container']}>
      {post && !loading?
        <>
        <Article post={post}/>
        <Comments comment={post.comment}/>
      </> : 'Loading...'}
    </section>
  );
}


const mapStateToProps = state =>({
    post:state.post
})

export default connect(mapStateToProps,{ getOnePost })(withRouter(Main));
