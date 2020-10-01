import React from 'react';
import cls from './Tag.module.scss';

const Tag = ({
  tag,
  setFormData,
  index
}) => {


  const onClick = (e)=>{
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }

  const deleteIconClick = () =>{
    setFormData(prevState =>{
      const newTag = prevState.tag.filter((el,i) => i !== index);

      return{
        ...prevState,
        tag:newTag
      }
    })
  }

  return (
    <span onClick={(e)=>onClick(e)} className={cls['container']}>
      <p className={cls['tag']}>{tag}</p>
      <i onClick={()=>deleteIconClick()} className={cls['icon']+' '+"fas fa-times"}></i>

    </span>
  );
}

export default Tag;
