import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import MarsPicture from "./marsPicture";
import axios from "axios";
import useSWR from 'swr';
import PaginationTwo from "../../../components/pagination";

const PicturesContainer = styled.div`
  display: flex;
  width: 95%;
  height: 95%;
  flex-direction: column;
  justify-items: center;
  align-self: center;
  color: white;
  margin: 2.5rem;
  overflow: auto;
`
const LoadingTitle = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
`

const PaginationButtonsWrapper = styled.div`
  width: 60%;
  display: flex;
  align-self: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`

const ImageContainer = styled.div`
  max-height: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
`

const fetcher = (API) => axios.get(API)
    .then(response => {
        return response.data;
    });

const RoverPicturesSection = ({apiData, openModal, setModalPicture}) => {
    const API_KEY = "kVBXO7R76SwS8bbEwtYcNo7zlXn5bmxmZc2Bf7ns";
    const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${apiData.roverName}/photos?sol=${apiData.marsSol}&api_key=${API_KEY}`

    const [currentPage, setCurrentPage] = useState(1);
    const [picturesPerPage] = useState(15);

    const {data, error} = useSWR(API, fetcher);

    const regex = new RegExp(`${apiData.activeRoverCam}`, 'g')
    const marsPictures = data ? data.photos.filter(photo => photo.camera.name.match(regex)) : [];

    // Get current posts
    const indexOfLastPicture = currentPage * picturesPerPage;
    const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
    const currentPictures = marsPictures.slice(indexOfFirstPicture, indexOfLastPicture);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    useEffect(()=>{
        setCurrentPage(1);
    },[apiData])

    if (error) return <LoadingTitle>failed to load</LoadingTitle>
    if (!data) return <LoadingTitle>Loading...</LoadingTitle>
    if (marsPictures.length === 0) return <LoadingTitle>No Data...</LoadingTitle>

    return (
        <PicturesContainer>
            <ImageContainer>
                {currentPictures.map((img, index) =>
                    (<MarsPicture picture={img.img_src} openModal={openModal} setModalPicture={setModalPicture}
                                  key={index}/>))
                }
            </ImageContainer>
            <PaginationButtonsWrapper>
                <PaginationTwo
                    currentPage={currentPage}
                    picturesPerPage={picturesPerPage}
                    totalPictures={marsPictures.length}
                    paginate={paginate}
                />
            </PaginationButtonsWrapper>
        </PicturesContainer>
    );
};

export default RoverPicturesSection;