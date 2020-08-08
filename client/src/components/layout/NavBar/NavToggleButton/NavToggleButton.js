import React from 'react';
import classes from './NavToggleButton.module.scss';
import PropTypes from 'prop-types';

const MenuToggleButton = ({show,toggle}) => {
  const toggleMenu = () => {
    toggle(!show)
  }


  return (
    <div className={classes['button']} onClick={toggleMenu}>
      <div className={classes['button__line-group']}>
        <div className={classes['button__line']} />
        <div className={classes['button__line']} />
        <div className={classes['button__line']} />
      </div>
      <div className={classes['button__title']}>
        Navigation
      </div>
    </div>
  );
}


MenuToggleButton.propTypes={
  show:PropTypes.bool.isRequired,
  toggle:PropTypes.func.isRequired
}

export default MenuToggleButton;
