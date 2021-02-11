import React, {useRef, useEffect} from "react";

const CloseModalFunction = (ref, setShowModal) => {
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowModal(false);
        }
    }
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);
}
const CloseModal = ({setShowModal}) => {
    const wrapperRef = useRef(null);
    CloseModalFunction(wrapperRef, setShowModal);

    return <div ref={wrapperRef}/>;
}

export default CloseModal;
