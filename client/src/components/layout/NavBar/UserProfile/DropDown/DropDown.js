import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import { toggleDropDown } from '../../../../../actions/ui';
import cls from './DropDown.module.scss';

const DropDown = ({
  show,
  logout,
  user:{
    username
  }
}) => {

  const dropBox = useRef(null);
  const containerStyle = show ? { maxHeight:dropBox.current.scrollHeight } : { maxHeight:0 }


  return (
    <div style={containerStyle} className={cls['container']}>
      <div ref={dropBox} className={cls['drop-box']}>
        <NavLink className={cls['drop-box__profile']} exact={true} to='/profile'>{username}</NavLink>
        <NavLink exact={true} onClick={logout} to='/'>Log out</NavLink>
      </div>
    </div>
  );
}

const mapStateToProps = state =>({
  show:state.ui.showDropDown
})

export default connect(mapStateToProps)(DropDown);
