import React, {useEffect, useState, useCallback} from 'react';
import styled from "styled-components";
import PaginationButton from "../paginationButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons/faAngleRight";


const ArrowButton = styled.li`
  pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
  opacity: ${({disabled}) => disabled ? "0.6" : "1"};
  background-color: blueviolet;
`

const LastButton = styled.li`
  pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
  opacity: ${({disabled}) => disabled ? "0.6" : "1"};
  border-radius: 0 5px 5px 0;
  background-color: blueviolet;
`
const FirstButton = styled.li`
  pointer-events: ${({disabled}) => disabled ? "none" : "auto"};
  opacity: ${({disabled}) => disabled ? "0.6" : "1"};
  border-radius: 5px 0 0 5px;
  background-color: blueviolet;
`

const PaginationWrapper = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
  }

  li {
    padding: 0.5rem;
    color: #ffffff;
    font-weight: bold;
    outline: none;
    border: 2px solid transparent;
    transition: all 400ms ease-in-out;
    cursor: pointer;


    &:hover {
      background-color: transparent;
      box-shadow: 0 0 0 0.05em red, 0 0 0.15em 0.1em #fff;
    }
  }
`

const PaginationTwo = ({currentPage, picturesPerPage, totalPictures, paginate}) => {
        const [pager, setPager] = useState([]);

        const getActivePages = useCallback(() => {
            let startPage = 1;
            let endPage;

            const pageNumbers = [];
            const totalPages = Math.ceil(totalPictures / picturesPerPage);


            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }

            if (pageNumbers.length <= 7) {
                endPage = totalPages;
            } else {
                if (currentPage <= 4) {
                    startPage = 1;
                    endPage = 7;
                } else if (currentPage + 3 >= totalPages) {
                    startPage = totalPages - 6;
                    endPage = totalPages;
                } else {
                    startPage = currentPage - 3;
                    endPage = currentPage + 3;
                }
            }

            return {
                startPage: startPage,
                endPage: endPage,
                totalPages: totalPages,
                pageNumbers: pageNumbers,
            }
        },[currentPage, totalPictures,picturesPerPage])

        useEffect(() => {

            let pages = [];
            for (let i = getActivePages().startPage; i <= getActivePages().endPage; i++) {
                pages.push(i);
            }

            setPager(pages);

        }, [getActivePages]);

        return (
            <PaginationWrapper>
                <ul>
                    <FirstButton disabled={currentPage === 1} onClick={() => paginate(1)}>
                        First
                    </FirstButton>
                    <ArrowButton disabled={currentPage === 1} onClick={() => paginate(currentPage - 1)}>
                       <FontAwesomeIcon icon={faAngleLeft}/>
                    </ArrowButton>
                    {pager.map((number, index) => (
                        <PaginationButton
                            currentPage={currentPage}
                            pageNumber={number}
                            paginate={paginate}
                            key={index}
                        />
                    ))}
                    <ArrowButton disabled={currentPage === getActivePages().totalPages}
                                onClick={() => paginate(currentPage + 1)}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </ArrowButton>
                    <LastButton disabled={currentPage === getActivePages().totalPages}
                                onClick={() => paginate(getActivePages().totalPages)}>
                        Last
                    </LastButton>
                </ul>
            </PaginationWrapper>
        );
    }
;

export default PaginationTwo;