import React from 'react';
import styled from 'styled-components';
import PaginationButton from "../paginationRadioButton";

const PageButtonsWrapper = styled.div`
  font-size: 1rem;
  color: white;
  margin: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

`


const Pagination = ({currentPage,picturesPerPage, totalPictures, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPictures / picturesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PageButtonsWrapper>
            {pageNumbers.map(number => (
                <PaginationButton
                    currentPage={currentPage}
                    pageNumber={number}
                    paginate={paginate}
                >{number}
                </PaginationButton>
            ))}
        </PageButtonsWrapper>
    );
};

export default Pagination;

