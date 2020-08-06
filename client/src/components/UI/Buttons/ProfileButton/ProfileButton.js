import React from 'react';
import cls from './ProfileButton.module.scss';



const ProfileButton = ({
  color,
  children,
  click,
  submit,
  ...props
}) => {
  return (
    <button {...props} onClick={click} className={cls['button'] + ' ' + cls[`${color}`]} type={submit ? 'submit' : 'button'}>
      {children}
    </button>
  );
}


export default ProfileButton;
