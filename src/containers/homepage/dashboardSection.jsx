<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994
import styled from "styled-components";

//Import Rovers Data
import roversData from '../../assets/rovers_data/RoversData.js';
import Checkbox from "../../components/checkbox";
<<<<<<< HEAD
import Button from "../../components/button";
import RadioButton from "../../components/radioButton";
import RoverFact from "../../components/roverFact";
=======
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994

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

<<<<<<< HEAD
const RoverInfo = styled.div`
  //border: 1px solid red;
  display: flex;
  height: 35%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RoverImage = styled.img`
  max-height: 220px;
  margin: 2rem 2rem 0 2rem;
  box-shadow: 6px 6px 20px rgba(169, 169, 169, 0.3);
  border-radius: 5px;
`

const RoverName = styled.h2`
  color: #F8FCFF;
  letter-spacing: 2px;
`

const CameraCheckboxes = styled.form`
  height: 70%;
  //border: 1px solid pink;
  padding: 0 0 2rem 2rem;
  width: 100%;
  color: #F8FCFF;
`

const CameraInfo = styled.div`
  height: 35%;
  //border: 1px solid green;
  flex-direction: column;
  justify-content: center;
`

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem 0 0 1.9rem;
`
const InputNumberContainer = styled.div`
  display: flex;
  padding: 0.5rem 0 0 1.9rem;

  input {
    background: transparent;
    color: white;
    outline: none;
    border: 1px solid white;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1rem;
    padding: 0.3rem 0.3rem;

    &:focus {
      box-shadow: 0 0 0 0.05em indianred, 0 0 0.15em 0.1em #fff;
    }
  }
`
const RadioButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3.5rem 2rem 2rem;
`

const RoverFactsContainer = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const DashboardSection = ({setApiData}) => {

    const [rover, setRover] = useState("Spirit");
    const [currentRoverIndex, setCurrentRoverIndex] = useState(0);
    const [marsSol, setMarsSol] = useState('0');
=======
const DashboardSection = () => {
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994
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
<<<<<<< HEAD
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(roverCamera);
        console.log(rover)
        console.log(marsSol);

        const temp = {
            roverName: rover,
            marsSol: marsSol,
            activeRoverCam: roverCamera
                .filter(cam => cam.isChecked === true)
                .map(cam => cam.name).join('&')
        };
        console.log(temp);

        setApiData(temp);
    }

    useEffect(() => {
        let index = 0;
        if (rover === "Opportunity") {
            index = 1;
        } else if (rover === "Curiosity") {
            index = 2;
        }
        setCurrentRoverIndex(index);
    }, [rover])
=======
    // console.log(rovers[1].rover_cameras.split(',').forEach((cam) => console.log(cam)))
    // console.log(rovers);
    // console.log(roverCamera);
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994

    return (
        <DashboardContainer>
            <RoverInfo>
<<<<<<< HEAD
                <RoverImage src={rovers[currentRoverIndex].main_img} alt="rover picture"/>
                <RoverName>{rovers[currentRoverIndex].name.toUpperCase()}</RoverName>
            </RoverInfo>
            <RoverFactsContainer>
                <RoverFact rover={rovers[currentRoverIndex]}/>
            </RoverFactsContainer>
            <CameraInfo>
                <CameraCheckboxes onSubmit={onSubmit}>
                    <RadioButtonContainer>
                        {rovers.map(({name, id}) => (<RadioButton
                            rover={rover}
                            name={name}
                            setRover={setRover}
                            key={id}/>))}
                    </RadioButtonContainer>
                    {rovers[currentRoverIndex].rover_cameras.split(',').map((camera, index) =>
=======
                <RoverImage src={rovers[1].main_img} alt="rover picture"/>
                <RoverName>{rovers[1].name.toUpperCase()}</RoverName>
            </RoverInfo>
            <CameraInfo>
                <CameraCheckboxes>
                    {rovers[2].rover_cameras.split(',').map((camera,index) =>
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994
                        (<Checkbox
                            for={index}
                            camera={camera}
                            roverCamera={roverCamera}
                            setRoverCamera={setRoverCamera}
                            index={index} key={index}
<<<<<<< HEAD
                        />))}
                    <InputNumberContainer>
                        <input type="number"
                               name="marsSol"
                               placeholder="Mars sol"
                               value={marsSol}
                               onChange={(e) => setMarsSol(e.target.value)}
                               min="0"
                        />
                    </InputNumberContainer>
                    <ButtonContainer>
                        <Button type="submit">Submit</Button>
                    </ButtonContainer>
=======
                            />))}
>>>>>>> 279d77384e36944bff1573867f19efdd1c1a9994
                </CameraCheckboxes>
            </CameraInfo>
        </DashboardContainer>
    );
};

export default DashboardSection;