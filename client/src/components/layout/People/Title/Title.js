import React from 'react';
import cls from './Title.module.scss';
import PropTypes from 'prop-types';

const Title = ({children}) => {
  return (
    <section className={cls['container']}>
      <h3 className={cls['title']}>{children}</h3>
      <h4 className={cls['title--small']}>People below are awesome members of the Group!</h4>
    </section>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired
};

export default Title;
