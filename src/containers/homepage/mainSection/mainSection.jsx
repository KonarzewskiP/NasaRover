import React,{useState} from 'react';
import styled from "styled-components";

import RoverPicturesSection from "./RoverPicturesSection";
import Modal from "../../../components/modal";
import CloseModal from "../../../components/closeModal";

const MainSectionContainer = styled.div`
  flex: 2;
  position: relative;
  //border: 1px sienna solid;
 `


const MainSection = ({apiData}) => {

    const [modalPicture, setModalPicture] = useState({});

    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <MainSectionContainer>
                <RoverPicturesSection
                    apiData={apiData}
                    openModal={openModal}
                    setShowModal={setShowModal}
                    setModalPicture={setModalPicture}

                />
            <Modal showModal={showModal} setShowModal={setShowModal} currentPicture={modalPicture}/>
            {showModal ? <CloseModal setShowModal={setShowModal}/> : null}
        </MainSectionContainer>
    );
};

export default MainSection;