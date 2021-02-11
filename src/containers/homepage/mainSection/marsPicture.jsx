import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  height: 150px;
  margin: 0.5rem;
  
`

const MarsPicture = ({picture,openModal}) => {

    return (
        <Picture src={picture} onClick={openModal}/>
    );
};

export default MarsPicture;