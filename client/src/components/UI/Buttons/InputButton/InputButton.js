import React, { useRef } from 'react';
import cls from './InputButton.module.scss';

const InputButton = ({
  color,
  children,
  setPreviewImage,
  setFormData,
  name,
  ...props
}) => {
  const fileInput = useRef(null);
  const buttonClickHanlder = () =>{
    fileInput.current.click();
  }

  const inputOnChangeHandler = (e) =>{
    const imageURL = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(imageURL);
    reader.onloadend = () =>{
      setPreviewImage(prevState=>({
        ...prevState,
        previewURL:reader.result
      }));
    }
    const formData = buildFormData(imageURL);
    setFormData(prevState=>({
      ...prevState,
      newAvatar:formData
    }));

  };

  const buildFormData = (imageObj) =>{

    const formData = new FormData();
    formData.append('avatar',imageObj);
    return formData;
  }

  return (
    <>
    <button {...props} onClick={buttonClickHanlder} className={cls['button'] + ' ' + cls[`${color}`]}>
      {children}
    </button>
    <input
      ref={fileInput}
      hidden
      type='file'
      onChange={(e)=>inputOnChangeHandler(e)}
      name={name}
    />
  </>
  );
}

export default InputButton;
