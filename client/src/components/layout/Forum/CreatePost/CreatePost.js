import React,{ useState, useEffect } from 'react';
import cls from './CreatePost.module.scss';
import NavBar from '../../NavBar/NavBar';
import Button from '../../../UI/Buttons/ProfileButton/ProfileButton';
import { Prompt } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPost } from '../../../../actions/post';




const CreatePost = ({
  error,
  submitPost,
  history,
  loading
}) => {
  const [shouldBlockNav, setShouldBlockNav] = useState(false);
  const [formData, setFormData] = useState({
    title:'',
    content:'',
    tag:''
  });




  const {
    title,
    content,
    tag
  } = formData;

  useEffect(()=>{
    if(title || content || tag){
      setShouldBlockNav(true);
    } else {
      setShouldBlockNav(false);
    }
  },[title,content,tag]);



  const inputHandler = (e) =>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault();
     submitPost(formData,history);
     setShouldBlockNav(false);
  }

  const cancelButtonHandler = () =>{

    history.push({pathname:'/forum'})
  }


  return (
    <>
    <Prompt when={shouldBlockNav} message={'Are you sure you want to discard your changes?'}/>
      <NavBar/>

      <section className={cls['container']}>
        <form onSubmit={(e)=>submitHandler(e)}>
        <div>
          <label className={cls['label']}>Title</label>
          <input placeholder='Title' className={cls['input']} name='title' value={title} onChange={(e)=>inputHandler(e)} required/>
        </div>
        <div>
          <label className={cls['label']}>Content</label>
          <textarea placeholder='Write something' className={cls['textarea']} name='content' value={content} onChange={(e)=>inputHandler(e)}/>
        </div>
        <div>
          <label className={cls['label']}>Tags</label>
          <input placeholder='game,development etc' className={cls['input']} name='tag' value={tag} onChange={(e)=>inputHandler(e)}/>
        </div>
        <div className={cls['button-group']}>
        <Button submit={true} color='info'>Submit</Button>
        <Button click={()=>cancelButtonHandler()} type='button' color='danger'>Cancel</Button>
        {loading ? <p className={cls['button-group__side-text']}>Submitting...</p> : error ? <p className={cls['button-group__side-text']}>{error.data.msg}</p> : null }

        </div>
        </form>
      </section>

    </>
  );
}

const mapStateToProps = state =>({
  error:state.post.errorMessage,
  loading:state.post.loading
})

export default connect(mapStateToProps, {submitPost})(withRouter(CreatePost));
