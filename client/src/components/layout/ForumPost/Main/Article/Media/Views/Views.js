import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { increaseView } from '../../../../../../../actions/post';
import cls from './Views.module.scss';

const Views = ({
  views,
  match:{
    params:{
      id
    }
  }
}) => {
  useEffect(()=>{
    increaseView(id)
  },[increaseView])

  return (
    <p className={cls['views']}>View{views.length > 1 ? 's' :null}: {views.length > 0 ? views.length : '0'}</p>
  );
}


export default withRouter(Views);
