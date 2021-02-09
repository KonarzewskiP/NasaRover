import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import {calculateFinalTime, convertDate} from '../../Util.jsx'

const FactContainer = styled.div`
  color: white;
  padding: 0 2.5rem 0 2rem;
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
  position: absolute;
  top: 0;
  padding-right: 3rem;

  h2 {
    margin-top: 0;
  }
`
const FactTwo = styled.div`
  position: absolute;
  bottom: 135px;
`
const FactThree = styled.div`
  position: absolute;
  bottom: 45px;
`

const RoverFact = ({rover}) => {
    // console.log(rover.name)
    // const [time,setTime] = useState(calculateFinalTime(rover.lunch_date, rover.end_date))
    //
    // setTime(setTimeout(() => tick(), 1000));
    //
    // const tick = () => {
    //     if (rover.name === 'Curiosity') {
    //        return calculateFinalTime(rover.lunch_date, rover.end_date);
    //     }
    // }
    // useEffect(() => {
    //     const timer = setTimeout(() => tick(), 1000);
    //     return () => {
    //         clearTimeout(timer)
    //     };
    // }, [time])

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
                <FactDescription><StyledSpan>Final:</StyledSpan> {calculateFinalTime(rover.lunch_date, rover.end_date)}
                </FactDescription>
            </FactThree>
        </FactContainer>
    );
};

export default RoverFact;