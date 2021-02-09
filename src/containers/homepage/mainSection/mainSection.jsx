import React from 'react';
import styled from "styled-components";
import RoverPicturesSection from "./RoverPicturesSection";


const MainSectionContainer = styled.div`
  flex: 2;
  border: 1px solid purple;
  
`

const MainSection = ({pictures}) => {
    return (
        <MainSectionContainer>
            <RoverPicturesSection pictures={pictures}/>
        </MainSectionContainer>
    );
};

export default MainSection;