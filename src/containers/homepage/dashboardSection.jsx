import React, {useState} from 'react';
import styled from "styled-components";

//Import Rovers Data
import roversData from '../../assets/rovers_data/RoversData.js';
import Checkbox from "../../components/checkbox";

const DashboardContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.7),
  rgba(0, 0, 200, 0.2));
  border-radius: 2rem 0 0 2rem;

`

const RoverInfo = styled.div`
  border: 1px solid red;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RoverImage = styled.img`
  height: 250px;
  margin: 2rem 2rem 0 2rem;
  box-shadow: 6px 6px 20px rgba(169, 169, 169, 0.3);
  border-radius: 5px;
`

const RoverName = styled.h2`
  color: #F8FCFF;
  letter-spacing: 2px;
`

const CameraCheckboxes = styled.div`
  border: 1px solid pink;
  padding: 2rem 0 2rem 2rem;
  width: 100%;
  color: #F8FCFF;
`

const CameraInfo = styled.div`
  flex: 3;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DashboardSection = () => {
    const [roverCamera, setRoverCamera] = useState([
        {name: 'FHAZ', isChecked: false},
        {name: 'RHAZ', isChecked: false},
        {name: 'MAST', isChecked: false},
        {name: 'CHEMCAM', isChecked: false},
        {name: 'MAHLI', isChecked: false},
        {name: 'MARDI', isChecked: false},
        {name: 'NAVCAM', isChecked: false},
        {name: 'PANCAM', isChecked: false},
        {name: 'MINITES', isChecked: false}
    ]);

    const [...rovers] = roversData();
    // console.log(rovers[1].rover_cameras.split(',').forEach((cam) => console.log(cam)))
    // console.log(rovers);
    // console.log(roverCamera);

    return (
        <DashboardContainer>
            <RoverInfo>
                <RoverImage src={rovers[1].main_img} alt="rover picture"/>
                <RoverName>{rovers[1].name.toUpperCase()}</RoverName>
            </RoverInfo>
            <CameraInfo>
                <CameraCheckboxes>
                    {rovers[2].rover_cameras.split(',').map((camera,index) =>
                        (<Checkbox
                            for={index}
                            camera={camera}
                            roverCamera={roverCamera}
                            setRoverCamera={setRoverCamera}
                            index={index} key={index}
                            />))}
                </CameraCheckboxes>
            </CameraInfo>
        </DashboardContainer>
    );
};

export default DashboardSection;