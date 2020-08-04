import React from 'react';
import PropTypes from 'prop-types';
import classes from './Avatar.module.scss';
import defaultImg from '../../../../assets/img/default.jpg';



const Avatar = ({profile}) => {

  let school, major;
  let socialArr = profile.social ? Object.keys(profile.social): [];
  let hasEduProfile = profile && profile.education;
  if(hasEduProfile){
      if(profile.education.school) school = profile.education.school;
      if(profile.education.major) major = profile.education.major;
  }


  return (
    <div className={classes['avatar']}>
      <img alt='avt' src={defaultImg} className={classes['avatar__img']}/>
      {/* Username */}
      <h1 className={classes['avatar__username']} style={hasEduProfile ? null : {marginBottom:0}}>{profile.user.username}</h1>
      {/* Education */}
      <h1 className={classes['avatar__education']}>{hasEduProfile ? `Studied ${major ?? ' '} ${school ? 'at ' +  school :' '}`: null}</h1>
      {/* Font Awesome Icon group */}
      <div className={classes['avatar__icon-group']}>
        {
          socialArr.map((socialType,i)=>{

            return (<a key={i} href={profile.social[socialType]}>
              <i className={`fab fa-${socialType} fa-3x`}></i>
            </a>)
          })

        }
      </div>

    </div>
  );
}

Avatar.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Avatar;
