import React,{ Fragment, useEffect } from 'react';
import classes from './Profile.module.scss';
import NavBar from '../NavBar/NavBar';
import Operations from './Operations/Operations';
import Info from './Info/Info';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import Spinner from '../../UI/Spinner/Spinner';
import defaultImg from '../../../assets/img/default.jpg';
import Avatar from './Avatar/Avatar';

const Profile = ({
  getCurrentProfile,
  profile:{
    profile,
    loading
  },
  auth:{
    user:{
      username,
      email
    }
}}) => {

  useEffect(()=>{
    getCurrentProfile()
  },[getCurrentProfile]);

  // let school, major;
  // let hasEduProfile = profile && profile.education;
  // if(hasEduProfile){
  //     if(profile.education.school) school = profile.education.school;
  //     if(profile.education.major) major = profile.education.major;
  // }

  return (
    <Fragment>
      <NavBar/>
      <section className={classes['container']}>
        {profile ? <Avatar profile={profile}/> : <Spinner/>}
        <div style={profile ? null : {alignSelf:'center'}} className={classes['profile']}>
          {loading ? <Spinner/> :
          ( profile ? <Info profile={profile}/> :
          <h1 style={{
            fontSize:'4rem',
            color:'#17a2b8',
          }}>Greetings, <span style={{color:'#24292e'}}>{username}</span>.<br/> It seems like you don't have a profile yet. <br/> You can click 'Create Profile' to create one!</h1>)

          }

        </div>
          <Operations/>
      </section>
    </Fragment>
  );
}

const mapStateToProps = state =>({
  auth:state.auth,
  profile:state.profile
})


export default connect(mapStateToProps, { getCurrentProfile } )(Profile);
