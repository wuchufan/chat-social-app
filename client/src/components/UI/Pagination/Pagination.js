import React from 'react';
import PageBox from './PageBox/PageBox';


const Paginaiton = ({
  numberOfPageBoxes,
  currentPage,
  setPage
}) => {

  const pageBoxes = new Array(numberOfPageBoxes).fill(null);
  const incrementPage = () =>{
    setPage(prevState => ++prevState);
  }

  const decrementPage = () =>{
    setPage(prevState => --prevState)
  }

  const setPageHandler = (page) =>{
    setPage(page);
  }


  return (
  <>
    <PageBox visibility={currentPage !== 1} click={()=>decrementPage()}>&laquo;</PageBox>
      {pageBoxes.map((pageBox,i) =>{
        return <PageBox visibility={true} click={setPageHandler} show={currentPage === i+1} key={i}>{i+1}</PageBox>
      })}
    <PageBox visibility={currentPage !== numberOfPageBoxes} click={()=>incrementPage()}>&raquo;</PageBox>

</>
  );
}


export default Paginaiton;
