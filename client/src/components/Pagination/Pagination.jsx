import React from 'react';
import {ContainerNav,ContainerUl,ButtonPage} from './Pagination'


const Pagination = ({ cantPage, totalPage, paginate }) => {
  const pageNumbers = [];

  
  for (let i = 1; i <= Math.ceil(totalPage / cantPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ContainerNav>
      <ContainerUl>
        {pageNumbers.map(number => (
          <li key={number} >
            <ButtonPage onClick={() => paginate(number)}  >
              {number}
            </ButtonPage>
          </li>
        ))}
      </ContainerUl>
    </ContainerNav>
  );
};

export default Pagination;