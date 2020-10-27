import React from 'react';
import classes from './Operations.module.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../../../UI/Buttons/ProfileButton/ProfileButton';
import { deleteAccount } from '../../../../actions/user';



const Operations = ({deleteAccount,profile:{profile}, history}) => {

  const editHandler = () =>{
    history.push({pathname:'/profile/edit-profile'})
  }

  const deleteAccountHandler = () =>{
    let confirmDelete = window.confirm('Are you sure you want to delete your account?');
    if(confirmDelete) deleteAccount()
    else return;
  }

  return (
    <div className={classes['container']}>
    <Button click={editHandler} color={'info'}>Edit Profile</Button>
    <Button click={deleteAccountHandler} color={'danger'}>Delete Account</Button>
    </div>
  );
}


const mapStateToProps = state =>({
   profile:state.profile
})

export default connect(mapStateToProps,{ deleteAccount })(withRouter(Operations));
