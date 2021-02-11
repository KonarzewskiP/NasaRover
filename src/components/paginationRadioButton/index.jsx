import React from 'react';
import {LabelWrapper, RadioControl, RadioInput, RadioLabel} from "../RadioButtonsStyling";
import styled from "styled-components";

const RadioInputWrapper = styled.div`
`

const RadioLabelWrapper = styled.div`
  padding: 0 0.5em;
`
const PaginationButton = ({currentPage, pageNumber, paginate}) => {
    return (
        <RadioLabelWrapper>
            <LabelWrapper>
                <RadioLabel>
                    {pageNumber}
                </RadioLabel>

                <RadioInputWrapper>
                    <RadioInput>
                        <input
                            type="radio"
                            checked={currentPage === pageNumber}
                            value={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            readOnly
                        />
                        <RadioControl/>
                    </RadioInput>
                </RadioInputWrapper>
            </LabelWrapper>
        </RadioLabelWrapper>
    );
};

export default PaginationButton;