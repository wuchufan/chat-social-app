import React, { useState } from 'react';
import defaultImage from '../../../../assets/img/default.jpg';
import { connect } from 'react-redux';
import cls from './UserProfile.module.scss';
import DropDown from './DropDown/DropDown';
import { toggleDropDown } from '../../../../actions/ui';



const UserProfile = ({user, logout,dropDownStatus,toggleDropDown}) => {

  const clickImageHandler = () =>{
    toggleDropDown(dropDownStatus);
  }

  return (
    <>
      <img onClick={clickImageHandler} className={cls['img']} src={user.avatar === '' ? defaultImage : user.avatar}/>
      <DropDown logout={logout} user={user}/>
    </>
  );
}


const mapStateToProps = state =>({
  dropDownStatus:state.ui.showDropDown
})


export default connect(mapStateToProps,{ toggleDropDown })(UserProfile);
