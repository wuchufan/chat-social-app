import React,{ useState, useEffect } from 'react';
import { increaseOrDecreaseLikes } from '../../../../../../../actions/post';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cls from './Likes.module.scss';

const Likes = ({
  likes,
  match:{
    params:{
      id
    }
  },
  auth:{
    isAuthenticated,
    user
  }
}) => {

  const [hasLiked, setHasLiked] = useState(false);
  //I only want to rerender this component when user clicks like, so I don't re-fetch the global like state from redux
  const [localLikes, setLocalLikes] = useState(0);


  useEffect(()=>{
    if(likes) setLocalLikes(likes.length);
    if(isAuthenticated){
      if(likes.indexOf(user._id) !== -1){
        setHasLiked(true);
      }
    }

  },[likes,isAuthenticated])


  const increaseLikeHanlder = () =>{

    if(!hasLiked){
    setLocalLikes(prevState => ++prevState);
    setHasLiked(true);

    increaseOrDecreaseLikes(id);
    }
  }

  const decreaseLikeHandler = () =>{
    if(hasLiked){
      setLocalLikes(prevState => --prevState);
      setHasLiked(false);

      increaseOrDecreaseLikes(id);
    }
  }

  return (
    <>
    <p className={cls['likes']}>Like{localLikes > 1 ? 's' :null}: {localLikes}</p>
    {isAuthenticated ?
      <div className={cls['icons']}>
         {hasLiked ? <i onClick={()=>decreaseLikeHandler()} className="fas fa-thumbs-down"></i> : <i onClick={()=>increaseLikeHanlder()} className="fas fa-thumbs-up"></i>}
      </div> : null}
  </>
  );
}

const mapStateToProps = state =>({
  auth:state.auth
})

export default connect(mapStateToProps)(withRouter(Likes));
