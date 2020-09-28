import React,{ useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitComment } from '../../../../../../actions/post';
import cls from './PostComment.module.scss';
import Button from '../../../../../UI/Buttons/ProfileButton/ProfileButton';

const PostComment = ({
  post:{
    loading,
    errorMessage
  },
  match:{
    params:{
      id
    }
  },
  submitComment
}) => {

  const [formData, setFormData] = useState({
    comment:''
  })

  const {
    comment
  } = formData;

  const inputHandler = (e) =>{

      setFormData({
        ...formData,
        [e.target.name] : e.target.value
      })
    }

  const submitHandler = (e) =>{
    e.preventDefault();

    submitComment({
      ...formData,
      postId:id
    })
  }

  return (
    <>
      <form onSubmit={(e)=>submitHandler(e)}>
      <textarea placeholder='Write Comment' className={cls['textarea']} name='comment' value={comment} onChange={(e)=>inputHandler(e)}/>

      <Button submit={true} color='info'>Submit Comment</Button>
    </form>
    </>
  );
}

const mapStateTopProps = state =>({
  post:state.post
})

export default connect(mapStateTopProps,{ submitComment })(withRouter(PostComment));
