import React from 'react';
import styled from "styled-components";

import {calculateFinalTime, convertDate} from '../../Util.jsx'

const FactContainer = styled.div`
  color: white;
  padding: 0 2.5rem 0 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 90%;

`

const FactTitle = styled.h2`
  margin-bottom: 0.5rem;
`

const FactDescription = styled.span`

`

const StyledSpan = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 0.5rem;
`

const FactOne = styled.div`
  max-width: 90%;
  overflow: hidden;

  h2 {
    margin-top: 0;
  }
`
const FactTwo = styled.div`
  max-width: 90%;
  overflow: hidden;
`
const FactThree = styled.div`
  max-width: 90%;
  overflow: hidden;
`

const RoverFact = ({rover}) => {

    return (
        <FactContainer>
            <FactOne>
                <FactTitle>Mission</FactTitle>
                <FactDescription>{rover.mission}</FactDescription>
            </FactOne>
            <FactTwo>
                <FactTitle>Lunch Date</FactTitle>
                <FactDescription>{convertDate(rover.lunch_date)}</FactDescription>
            </FactTwo>
            <FactThree>
                <FactTitle>Mission Duration:</FactTitle>
                <FactDescription><StyledSpan>Planed: </StyledSpan> {rover.mission_duration}</FactDescription>
                <br/>
                <FactDescription>
                    <StyledSpan>Final:</StyledSpan>
                    {calculateFinalTime(rover.lunch_date, rover.end_date)}
                </FactDescription>
            </FactThree>
        </FactContainer>
    );
};

export default RoverFact;