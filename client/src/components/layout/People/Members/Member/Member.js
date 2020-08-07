import React from 'react';
import cls from './Member.module.scss';
import defaultImage from '../../../../../assets/img/default.jpg';
import { withRouter } from 'react-router-dom';

const Member = ({
  history,
  profile:{
  user:{
  username,
  email,
  avatar,
  _id
},
education
}}) => {

  const viewOnClick = ()=>{
    history.push({
      pathname:'/profile',
      search:`?target=${_id}`

    });

  }

  return (
    <>
    <div className={cls['container']}>
      <div className={cls['avatar']}>
        <img alt='' className={cls['avatar__img']} src={avatar?? defaultImage}/>
      </div>
      <div className={cls['username']}>
        <p>{username}</p>
      </div>
      <div className={cls['education']}>
        {education && education.major && education.school ? (
          <>
          <p className={cls['education__detail']}>{`Studied ${education.major}`}</p>
          <p className={cls['education__detail']}>{`at ${education.school}`}</p>
          </>
        ): (education && education.school) ?
        (<p className={cls['education__detail']}>{`From ${education.school}`}</p>) : <p className={cls['education__detail']} style={{marginTop:'1rem'}}>
          This user didn't put down anything :(
        </p>

      }
      </div>
      <div role='button' className={cls['button']} onClick={viewOnClick}>
        View Profile
      </div>
    </div>
    </>
  );
}



export default withRouter(Member);
