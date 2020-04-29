import React from 'react';
import classes from './Operations.module.scss';
import { Link } from 'react-router-dom';

const Operations = ({}) => {
  return (
    <div className={classes['container']}>
    <Link className={classes['edit-profile']} exact='true' to='/profile/edit-profile' >
      Edit Profile
    </Link>
    </div>
  );
}


export default Operations;
