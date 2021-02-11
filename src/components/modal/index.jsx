import React, {useEffect, useCallback} from 'react';
import styled from "styled-components";

const Background = styled.div`
  width: 600px;
  height: 600px;
  background: linear-gradient(to right bottom,
  rgba(0, 0, 0, 0.02),
  rgba(0, 0, 200, 0.02));
  border-radius: 2rem;
  backdrop-filter: blur(0.1rem);
  position: absolute;
  display: flex;
  justify-content: center;
  box-shadow: 6px 6px 20px rgba(9, 9, 9, 0.2);
  align-items: center;
  z-index: 10;
`

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  color: #000;
  z-index: 10;
  border-radius: 10px;
`

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
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
                            <ModalImg src={currentPicture.img_src} alt="mars picture"/>
                        </ModalWrapper>
                </Background>
            ) : null}
        </>
    );
}

export default Modal;