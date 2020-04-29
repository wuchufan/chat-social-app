import React,{ Fragment, useEffect } from 'react';
import classes from './Profile.module.scss';
import NavBar from '../NavBar/NavBar';
import Operations from './Operations/Operations';
import Info from './Info/Info';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile';
import Spinner from '../../UI/Spinner/Spinner';
import defaultImg from '../../../assets/img/default.jpg';


const Profile = ({
  getCurrentProfile,
  profile:{
    profile,
    loading
  },
  auth:{
    user:{
      username
    }
}}) => {

  useEffect(()=>{
    getCurrentProfile()
  },[getCurrentProfile]);


  return (
    <Fragment>
      <NavBar/>
      <section className={classes['container']}>
        <div className={classes['avatar']}>
          <img src={defaultImg} className={classes['avatar__img']}/>

          <Operations/>

        </div>
        <div className={classes['profile']}>
          {loading ? <Spinner/> :
            <Info profile={profile} username={username}/>
          }

        </div>
      </section>
    </Fragment>
  );
}

const mapStateToProps = state =>({
  auth:state.auth,
  profile:state.profile
})


export default connect(mapStateToProps, { getCurrentProfile } )(Profile);
