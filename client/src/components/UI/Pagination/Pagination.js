import React from 'react';
import PageBox from './PageBox/PageBox';


const Paginaiton = ({}) => {
  return (
  <>
      <PageBox>Left</PageBox>
      <PageBox>1</PageBox>
      <PageBox show={true}>2</PageBox>
      <PageBox>3</PageBox>
      <PageBox>Right</PageBox>
</>
  );
}


export default Paginaiton;
