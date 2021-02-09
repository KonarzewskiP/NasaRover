import React from 'react';
import styled from "styled-components";

//Import Rovers Data
import RoversCameras from '../../assets/rovers_camers/RoversCameras.js';

const CheckboxLabel = styled.label`
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 1rem;
  color: #F8FCFF;
`
const CheckboxControl = styled.span`
  display: inline-grid;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid currentColor;
`
const CheckboxSpan = styled.span`
`
const CheckboxInputContainer = styled.span`
  display: grid;
  grid-template-areas: "checkbox";
  > * {
    grid-area: checkbox;
  }
  svg{
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
  input:checked + ${CheckboxControl} svg{
    transform: scale(1);
  }
  
  input:focus + ${CheckboxControl} {
    box-shadow: 0 0 0 0.05em indianred, 0 0 0.15em 0.1em #fff;
    //box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em indianred;
  }
`
const CheckboxInput = styled.input`
  opacity: 0;
  width: 1rem;
  height: 1rem;
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
            <CheckboxLabel>
                <CheckboxInputContainer>
                    <CheckboxInput
                        id={index}
                        type="checkbox"
                        checked={roverCamera[index].isChecked}
                        value={camera}
                        onChange={onChange(index)}
                    />
                    <CheckboxControl>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' aria-hidden="true"
                             focusable="false">
                            <path fill='none' stroke='currentColor' strokeWidth='3'
                                  d='M1.73 12.91l6.37 6.37L22.79 4.59'/>
                        </svg>
                    </CheckboxControl>
                </CheckboxInputContainer>
                <CheckboxSpan>{cameras[camera]}</CheckboxSpan>
            </CheckboxLabel>
        </div>
    );
};

export default Checkbox;