import React from 'react';
import styled from "styled-components";

import GlobalStyling from "../../components/GlobalStyling";

import backgroundImage from '../../assets/img/Background_photo.jpg'
import DashboardSection from "./dashboardSection";
import MainSection from "./mainSection/mainSection";


const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${backgroundImage});
  background-size: cover;
`

const GlassContainer = styled.div`
  background: black;
  min-height: 85vh;
  width: 70%;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.7),
  rgba(0, 0, 200, 0.2));
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
`

const Homepage = () => {
    return (
        <PageContainer>
            <GlassContainer>
                <GlobalStyling/>
                <DashboardSection/>
                <MainSection/>
            </GlassContainer>
        </PageContainer>

    );
};

export default Homepage;