import React from 'react';
import styled from 'styled-components';

const Picture = styled.img`
  height: 150px;
  margin: 0.5rem;

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