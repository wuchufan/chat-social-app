import React from 'react';
import PropTypes from 'prop-types';
import cls from './People.module.scss';
//components
import NavBar from '../NavBar/NavBar';
import Title from './Title/Title';
import Members from './Members/Members';


const People = ({}) => {
  return (<>
    <NavBar/>
    <div className={cls['container']}>

      <Title>Our members</Title>
      <Members/>
    </div>
  </>);
}

export default People;
