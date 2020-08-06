import React from 'react';
import cls from './ProfileButton.module.scss';



const ProfileButton = ({
  color,
  children,
  click
}) => {
  return (
    <button onClick={click} className={cls['button'] + ' ' + cls[`${color}`]} type='submit'>
      {children}
    </button>
  );
}


export default ProfileButton;
