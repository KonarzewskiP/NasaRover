import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  max-width: 100%;
  object-fit: cover;
`

const MarsPicture = ({picture, openModal, setModalPicture}) => {

    const onClick = (e) => {
        openModal();
        setModalPicture(e.target);

    }

    return (
        <Picture src={picture} onClick={onClick}/>
    );
};

export default MarsPicture;