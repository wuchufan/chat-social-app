import React from 'react';
import cls from './PageBox.module.scss';

const PageBox = ({show,children}) => {
  let style;
  if(show){
    style = {
      backgroundColor:'#17a2b8',
      color:'white'
    }
  }
  return (
    <div style={show ? style : null} className={cls['container']}>{children}</div>
  );
}


export default PageBox;
