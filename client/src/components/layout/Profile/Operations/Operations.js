import React from 'react';
import classes from './Operations.module.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Operations = ({profile:{profile}}) => {
  console.log(profile);
  return (
    <div className={classes['container']}>
    <Link className={classes['edit-profile']} exact='true' to='/profile/edit-profile' >
      {profile ? 'Edit Profile' : 'Create Profile'}
    </Link>
    </div>
  );
}


const mapStateToProps = state =>({
   profile:state.profile
})

export default connect(mapStateToProps)(Operations);
