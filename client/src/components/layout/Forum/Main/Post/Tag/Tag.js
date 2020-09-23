import React from 'react';
import cls from './Tag.module.scss';


const Tag = ({children}) => {
  return (
    <p className={cls['tag']}>
      {'#'}{children}
    </p>
  );
}



export default Tag;
