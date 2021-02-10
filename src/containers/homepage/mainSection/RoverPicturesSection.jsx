import React, {useState} from 'react';
import styled from "styled-components";
import ReactPaginate from 'react-paginate';
import MarsPicture from "./marsPicture";

const PictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
`

const RoverPicturesSection = ({pictures}) => {

    const [pageNumber, setPageNumber] = useState(0);

    const picturesPerPage = 25;
    const pagesVisited = pageNumber * picturesPerPage;

    const displayPictures = pictures
        .slice(pagesVisited, pagesVisited + picturesPerPage)

    const pageCount = Math.ceil(pictures.length / picturesPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    console.log('Display Pictures: ')
    console.log(displayPictures);
    const PaginateContainer = styled.div`
      .paginationButtons {
        width: 80%;
        height: 40px;
        list-style: none;
        display: flex;
        justify-content: center;
      }

      .paginationButtons a {
        padding: 10px;
        margin: 8px;
        border-radius: 5px;
        border: 1px solid indianred;
        cursor: pointer;
      }
    `

    return (
        <PictureContainer>
            {displayPictures.map((img,index) => (<MarsPicture picture={img.img_src} key={index}/>))}
            <PaginateContainer>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </PaginateContainer>
        </PictureContainer>
    );
};

export default RoverPicturesSection;