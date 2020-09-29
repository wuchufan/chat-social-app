import React from 'react';
import cls from './PageBox.module.scss';

const PageBox = ({
  show,
  children,
  click,
  visibility
}) => {
  let style ={};
  if(show){
    style = {
      ...style,
      backgroundColor:'#17a2b8',
      color:'white'
    }
  }
  if(!visibility){
    style ={
      ...style,
      visibility:'hidden'
    }
  }


  return (
    <div onClick={()=>click(children)} style={style} className={cls['container']}>{children}</div>
  );
}


export default PageBox;
