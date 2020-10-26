import React from 'react';
import cls from './People.module.scss';
//components

import Title from './Title/Title';
import Members from './Members/Members';


const People = () => {

  return (<>

    <div className={cls['container']}>
      <Title>Our members</Title>
      <Members/>
    </div>
  </>);
}

export default People;
