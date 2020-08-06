import React, {Fragment, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './EditProfile.module.scss';
import {connect} from 'react-redux';
import {getCurrentProfile, editProfile} from '../../../../actions/profile';
import {editUsername} from '../../../../actions/user';
import NavBar from '../../NavBar/NavBar';
import Button from '../../../UI/Buttons/ProfileButton/ProfileButton';

const EditProfile = ({
  history,
  auth: {
    user: {
      username
    }
  },
  profile: {
    profile
  },
  getCurrentProfile,
  editUsername,
  editProfile
}) => {

  const [formData, setFormData] = useState({
    newUserName: username,
    age: '',
    school: '',
    major: '',
    github: '',
    facebook: ''
  })

  useEffect(() => {
    if (!profile)
      getCurrentProfile();

    setFormData((prevState) => {

      return{
      ...prevState,
      age: !profile
        ? ''
        : profile.age,
      school: !profile
        ? ''
        : !profile.education
          ? ''
          : profile.education.school ?? '' ,
      major: !profile
        ? ''
        : !profile.education
          ? ''
          : profile.education.major ?? '',
      github: !profile
        ? ''
        : !profile.social
          ? ''
          : profile.social.github ?? '',
      facebook: !profile
        ? ''
        : !profile.social
          ? ''
          : profile.social.facebook ?? ''
    }})

  }, [getCurrentProfile, profile]);
  const {
    newUserName,
    age,
    school,
    major,
    github,
    facebook
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const goBackHanlder = () =>{
    history.push({pathname:'/profile'})
  }

  return (<Fragment>
    <NavBar/>
    <section className={classes['container']}>
      <h1 className={classes['intro']}>
        Edit Your Profile
      </h1>
      <form onSubmit={async (e) => {
          e.preventDefault();
          if (newUserName !== username && newUserName) {
            await editUsername({newUserName});

          }
          await editProfile({age, school, major, github, facebook});

          history.push({pathname: '/profile'});
        }}>
        <div>
          <h1 className={classes['title']}>Basic information</h1>
          <label className={classes['label']}>Username</label>
          <input placeholder='Username' className={classes['input']} name='newUserName' value={newUserName} onChange={(e) => onChange(e)}/>
        </div>
        <div>
          <label className={classes['label']}>Age</label>
          <input placeholder='Age' className={classes['input']} name='age' value={age} onChange={(e) => onChange(e)}/>
        </div>
        <div>
          <h1 className={classes['title']}>Education</h1>
          <label className={classes['label']}>School</label>
          <input placeholder='School' className={classes['input']} name='school' value={school} onChange={(e) => onChange(e)}/>
        </div>
        <div>
          <label className={classes['label']}>Field Of Study</label>
          <input placeholder='Field Of Study' className={classes['input']} name='major' value={major} onChange={(e) => onChange(e)}/>
        </div>
        <div>
          <h1 className={classes['title']}>Social</h1>
          <label className={classes['label']}>Github</label>
          <input placeholder='Github' className={classes['input']} name='github' value={github} onChange={(e) => onChange(e)}/>
        </div>
        <div>
          <label className={classes['label']}>facebook</label>
          <input placeholder='Facebook' className={classes['input']} name='facebook' value={facebook} onChange={(e) => onChange(e)}/>
        </div>
        <div className={classes['button-group']}>
          <Button color={'info'}>Confirm edit</Button>
          <Button click={goBackHanlder} color={'dark'}>Back</Button>
        </div>
      </form>
    </section>
  </Fragment>);
}

const mapStateToProps = state => ({profile: state.profile, auth: state.auth});

export default connect(mapStateToProps, {getCurrentProfile, editUsername, editProfile})(withRouter(EditProfile));
