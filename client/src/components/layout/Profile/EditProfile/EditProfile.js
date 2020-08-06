import React, {Fragment, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import classes from './EditProfile.module.scss';
import {connect} from 'react-redux';
import {getCurrentProfile, editProfile} from '../../../../actions/profile';
import {editUsername} from '../../../../actions/user';
import NavBar from '../../NavBar/NavBar';
import Button from '../../../UI/Buttons/ProfileButton/ProfileButton';
import Games from './Games/Games';

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
    facebook: '',
    games:[{
      name:'',
      genre:'',
      comment:''
    }]
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
    games,
    github,
    facebook
  } = formData;

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const gameOnChange = (e, gameIdx) =>{
    const newGames = games.map((game,i)=>{
      if(gameIdx !== i) return game;
      return {...game,[e.target.name] : e.target.value};
    });
    setFormData({
      ...formData,
      games:newGames
    });
  }
  const removeGameHandler = (gameIdx) =>{
    console.log(gameIdx);
    const newGames = games.filter((game,index)=>{
      console.log(index);
      return index !== gameIdx});
    console.log(newGames);
    setFormData({
      ...formData,
      games:newGames
    })
  }
  const addGameHandler = ()=>{


    setFormData({
      ...formData,
      games:games.concat([{name:'',genre:'',comment:''}])
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
        <Games
          removeGameHandler={(gameIdx)=>removeGameHandler(gameIdx)}
          addGameHandler={addGameHandler}
          games={games}
          change={(e,gameIdx)=>gameOnChange(e,gameIdx)}
          classes={classes}/>
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
          <Button submit={true} color={'info'}>Confirm edit</Button>
          <Button submit={true} click={goBackHanlder} color={'dark'}>Back</Button>
        </div>
      </form>
    </section>
  </Fragment>);
}

const mapStateToProps = state => ({profile: state.profile, auth: state.auth});

export default connect(mapStateToProps, {getCurrentProfile, editUsername, editProfile})(withRouter(EditProfile));
