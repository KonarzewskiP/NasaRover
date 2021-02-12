import React from 'react';
import styled from 'styled-components';
import PaginationButton from "../paginationRadioButton";

const PageButtonsWrapper = styled.div`
  font-size: 1rem;
  color: white;
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`


const Pagination = ({currentPage, picturesPerPage, totalPictures, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPictures / picturesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PageButtonsWrapper>
            {pageNumbers.map((number, index) => (
                <PaginationButton
                    currentPage={currentPage}
                    pageNumber={number}
                    paginate={paginate}
                    key={index}
                >{number}
                </PaginationButton>
            ))}
        </PageButtonsWrapper>
    );
};

export default Pagination;

