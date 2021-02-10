import React, {useState} from 'react';
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
  //background-size: cover;
  
`

const GlassContainer = styled.div`
  background: black;
  height: 950px;
  width: 70%;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.7),
  rgba(0, 0, 200, 0.2));
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.5);
<<<<<<< HEAD
  overflow: hidden;
  
=======
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994
`

const Homepage = () => {

    const [apiData, setApiData] = useState({});

    return (
        <PageContainer>
            <GlassContainer>
                <GlobalStyling/>
                <DashboardSection setApiData={setApiData}/>
                <MainSection apiData={apiData}/>
            </GlassContainer>
        </PageContainer>

    );
};

export default Homepage;