import React from 'react';
import styled from 'styled-components'

const PaginationElement = styled.li`
  background-color: ${({active}) => active ? "transparent" : "blueviolet"};;
`

const PaginationButton = ({currentPage, pageNumber, paginate}) => {
    return (
        <PaginationElement
            active={currentPage === pageNumber}
            onClick={() => paginate(pageNumber)}>
            {pageNumber}
        </PaginationElement>
    );
};

export default PaginationButton;
