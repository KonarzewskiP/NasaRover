import React from 'react';
import styled from "styled-components";

//Import Rovers Data
import roversData from '../../assets/rovers_data/RoversData.js';

const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.7),
  rgba(0, 0, 200, 0.2));
  border-radius: 2rem 0 0 2rem;
`

const DashboardSection = () => {
    const [...rovers] = roversData();
    console.log(rovers);
    return (
        <DashboardContainer>

        </DashboardContainer>
    );
};

export default DashboardSection;