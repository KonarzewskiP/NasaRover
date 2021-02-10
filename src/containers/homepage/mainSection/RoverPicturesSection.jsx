import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import MarsPicture from "./marsPicture";
import axios from "axios";
import Pagination from "../../../components/pagination";

const PictureContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 2rem;
  position: relative;

`
const LoadingTitle = styled.h2`
  font-size: 50px;
  color: white;
  text-align: center;
`

const PaginationButtonsWrapper = styled.div`
  //border: 1px solid gold;
  height: 100px;
  width: 500px;
  position: absolute;
  bottom: -150px;

`

const RoverPicturesSection = ({apiData}) => {
    const API_KEY = "kVBXO7R76SwS8bbEwtYcNo7zlXn5bmxmZc2Bf7ns";
    const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${apiData.roverName}/photos?sol=${apiData.marsSol}&camera=${apiData.activeRoverCam}&api_key=${API_KEY}`

    const [marsPictures, setMarsPictures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [picturesPerPage] = useState(20);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await axios.get(API)
                .then(res => {
                    setMarsPictures(res.data.photos);
                })
                .catch(err => console.log(err));
            setLoading(false);
        }
        fetchData();
    }, [apiData]);

    // Get current posts
    const indexOfLastPicture = currentPage * picturesPerPage;
    const indexOfFirstPicture = indexOfLastPicture - picturesPerPage;
    const currentPictures = marsPictures.slice(indexOfFirstPicture, indexOfLastPicture);

    //Change page
    const paginate =(pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    if (loading) {
        return <LoadingTitle>Loading...</LoadingTitle>
    }

    return (
        <PictureContainer>
            {currentPictures.map((img, index) => (<MarsPicture picture={img.img_src} key={index}/>))}
            <PaginationButtonsWrapper>
                <Pagination
                    currentPage={currentPage}
                    picturesPerPage={picturesPerPage}
                    totalPictures={marsPictures.length}
                    paginate={paginate}
                />
            </PaginationButtonsWrapper>
        </PictureContainer>
    );
};

export default RoverPicturesSection;