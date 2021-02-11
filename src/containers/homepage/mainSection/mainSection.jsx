import React from 'react';
import styled from "styled-components";

import RoverPicturesSection from "./RoverPicturesSection";

const MainSectionContainer = styled.div`
  flex: 2;
  //border: 1px solid purple;
`


const MainSection = ({apiData, showModal, setShowModal}) => {

    return (
        <MainSectionContainer>
                <RoverPicturesSection apiData={apiData} showModal={showModal} setShowModal={setShowModal}/>

        </MainSectionContainer>
    );
};

export default MainSection;