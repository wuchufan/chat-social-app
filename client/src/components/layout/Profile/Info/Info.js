import React from 'react';
import classes from './Info.module.scss';
import BasicInfo from './BasicInfo/BasicInfo';
import Education from './Education/Education';
import Social from './Social/Social';
import Games from './Games/Games';


const Info = ({

  profile: {
    user:{
      email,
      username
    },
    education,
    social,
    games,
    age
  }
}) => {

  return (<div className={classes['container']}>

    {/* BASIC INFO */}
    <BasicInfo age={age} email={email} classes={classes}/>
    {/* EDUCATION */}
    <Education education={education} classes={classes}/>
    {/* SOCIAL */}
    <Social social={social} classes={classes}/>
    {/* FAVORITE GAMES */}
    <Games games={games} classes={classes}/>

  </div>);
}

export default Info;
