import React, {useEffect, useCallback} from 'react';
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.8),
  rgba(0, 0, 200, 0.5));
  border-radius: 0 10px 10px 0;
  backdrop-filter: blur(0.1rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  box-shadow: 6px 6px 20px rgba(9, 9, 9, 0.2);
  align-items: center;
  z-index: 10;
`

const ModalWrapper = styled.div`
  margin: 2rem;
`

const ModalImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 10px ;
`

const Modal = ({showModal, setShowModal, currentPicture}) => {

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false);
        }
    }, [setShowModal, showModal]);

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]);

    return (
        <>
            {showModal ? (
                <Background>
                        <ModalWrapper>
                            <ModalImg src={currentPicture.src} alt="mars picture"/>
                        </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
}

export default Modal;