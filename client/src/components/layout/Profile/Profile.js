import React,{ Fragment, useEffect } from 'react';
import classes from './Profile.module.scss';
import Operations from './Operations/Operations';
import Info from './Info/Info';
import { connect } from 'react-redux';
import { getCurrentProfile, clearProfile } from '../../../actions/profile';
import Spinner from '../../UI/Spinner/Spinner';
import Avatar from './Avatar/Avatar';

const Profile = ({
  location,
  clearProfile,
  getCurrentProfile,
  profile:{
    profile,
    loading
  },
  auth:{
    user
  }

}) => {

  useEffect(()=>{
    getCurrentProfile(location.search);

    return () =>{
      clearProfile();
    }

  },[getCurrentProfile,clearProfile,location.search]);



  return (
    <Fragment>

      <section className={classes['container']}>
        {profile ? <Avatar user={user} profile={profile}/> : <Spinner/>}
        <div style={profile ? null : {alignSelf:'center'}} className={classes['profile']}>
          {loading ? null :
          ( profile ? <Info profile={profile}/> :
          <h1 style={{
            fontSize:'4rem',
            color:'#17a2b8',
          }}>Greetings, <span style={{color:'#24292e'}}>{profile.user.username}</span>.<br/> It seems like you don't have a profile yet. <br/> You can click 'Create Profile' to create one!</h1>)
          }

        </div>
        {profile ? (user._id === profile.user._id ? <Operations/> : null) : null}
      </section>
    </Fragment>
  );
}

const mapStateToProps = state =>({
  profile:state.profile,
  auth:state.auth
})


export default connect(mapStateToProps, { getCurrentProfile, clearProfile } )(Profile);
