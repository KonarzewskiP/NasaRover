import React, {useState, useEffect} from 'react';
import styled from "styled-components";


import axios from "axios";
import RoverPicturesSection from "./RoverPicturesSection";


const MainSectionContainer = styled.div`
  flex: 2;
  border: 1px solid purple;
`

const MainSection = ({apiData}) => {
    const API_KEY = "kVBXO7R76SwS8bbEwtYcNo7zlXn5bmxmZc2Bf7ns";
    const API = `https://api.nasa.gov/mars-photos/api/v1/rovers/${apiData.roverName}/photos?sol=${apiData.marsSol}&camera=${apiData.activeRoverCam}&api_key=${API_KEY}`
    const [marsPictures, setMarsPictures] = useState([]);


    useEffect(() => {
        axios.get(API)
            .then(res => {
                setMarsPictures(res.data.photos);
                console.log(res.data.photos);
            }).catch(err => console.log(err));
    }, [apiData]);

    // console.log(apiData.roverName);
    // console.log(apiData.marsSol);
    // console.log(apiData.activeRoverCam);

    // console.log(API)
    console.log('-----------------')
    console.log(marsPictures);
    console.log('-----------------')
    return (
        <MainSectionContainer>
            <RoverPicturesSection pictures={marsPictures}/>
        </MainSectionContainer>
    );
};

export default MainSection;