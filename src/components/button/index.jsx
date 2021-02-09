import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  padding: ${({small}) => small ? "8px 15px" : "10px 18px"};
  border-radius: 5px;
  background-color: blueviolet;
  color: #ffffff;
  font-weight: bold;
  font-size: ${({small}) => small ? "14px" : "18px"};
  outline: none;
  border: 2px solid transparent;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  
  &:hover {
    background-color: transparent;
    box-shadow: 0 0 0 0.05em indianred, 0 0 0.15em 0.1em #fff;
  }
`

const Button = (props) => {
    return (
        <ButtonWrapper {...props}>

        </ButtonWrapper>
    );
};

export default Button;