import React from 'react';
import styled from "styled-components";

//Import Rovers Data
import RoversCameras from '../../assets/rovers_camers/RoversCameras.js';

// eslint-disable-next-line no-undef
const CheckboxLabel = styled.label`  
`

const CheckboxInput = styled.input`
display: inline-block;
`

const Checkbox = ({camera, roverCamera, setRoverCamera, index}) => {
    const cameras = RoversCameras();

    const onChange = index => e => {
        let newArr = [...roverCamera];
        newArr[index].isChecked = !newArr[index].isChecked;
        setRoverCamera(newArr);
        console.log(roverCamera);
    }

    return (
        <div>
            <CheckboxLabel >
                <CheckboxInput
                    id={index}
                    type="checkbox"
                    checked={roverCamera[index].isChecked}
                    value={camera}
                    onChange={onChange(index)}
                />
                <span>{cameras[camera]}</span>
            </CheckboxLabel>
        </div>
    );
};

export default Checkbox;