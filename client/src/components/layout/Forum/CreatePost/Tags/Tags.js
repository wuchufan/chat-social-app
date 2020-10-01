import React, { useRef } from 'react';
import Tag from './Tag/Tag';
import cls from './Tags.module.scss';

const Tags = ({
  formData,
  setFormData
}) => {

  const Input = useRef();

  const stopEventBubble = e =>{
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };


  const focusContainerHandler = (e) =>{

    stopEventBubble(e);

    Input.current.focus();
    if(Input.current.innerText !== ''){
      const newTag = Input.current.innerText;
      Input.current.innerText = '';
      setFormData(prevState =>{

        return {
          ...prevState,
          tag:[...prevState.tag,newTag]
        }
      });

      // Input.current.innerText = '';
    };

  }

  const keyPressHandler = (e) =>{
    if(e.charCode === 13){
      e.preventDefault();
      };
    }

  const inputClickHandler = (e) =>{
    stopEventBubble(e);
  }

  return (
    <>
    <div onClick={(e)=>focusContainerHandler(e)} className={cls['container']}>

      {formData ? formData.tag.map((elem, i) => {
        return <Tag setFormData={setFormData} index={i} tag={elem} key={i}/>
      }) :null}

    <span
        ref={Input}
        className={cls['input']}
        role='textbox'
        contentEditable
        onKeyPress={(e)=>keyPressHandler(e)}
        onClick={(e)=>inputClickHandler(e)}
      ></span>

  </div>
  </>
  );
}

export default Tags;
