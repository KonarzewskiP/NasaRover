import React from 'react';
import {LabelWrapper, RadioControl, RadioInput, RadioLabel} from "../RadioButtonsStyling";


const RadioButton = ({rover, name, setRover}) => {
    return (
        <LabelWrapper>
            <RadioLabel>
                {name}
            </RadioLabel>
            <RadioInput>
                <input
                    type="radio"
                    checked={rover === name}
                    value={name}
                    onChange={(e) => setRover(e.target.value)}
                />
                <RadioControl/>
            </RadioInput>
        </LabelWrapper>
    );
};

export default RadioButton;