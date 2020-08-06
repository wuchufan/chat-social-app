import React from 'react';
import classes from './Operations.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../../UI/Buttons/ProfileButton/ProfileButton';



const Operations = ({profile:{profile}, history}) => {

  const editHandler = () =>{
    history.push({pathname:'/profile/edit-profile'})
  }

  return (
    <div className={classes['container']}>
    <Button click={editHandler} color={'info'}>Edit Profile</Button>
    <Button color={'danger'}>Delete profile</Button>
    </div>
  );
}


const mapStateToProps = state =>({
   profile:state.profile
})

export default connect(mapStateToProps)(withRouter(Operations));
