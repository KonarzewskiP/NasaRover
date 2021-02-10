import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  height: 150px;
  margin: 0.5rem;
  
  &:hover{
    height: 500px;
  }
`

const MarsPicture = ({picture}) => {

    return (
        <Picture src={picture}>

        </Picture>
    );
};

export default MarsPicture;