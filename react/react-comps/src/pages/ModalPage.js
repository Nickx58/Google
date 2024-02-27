import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true)
    }
    return (
        <>
            <Button onClick={handleButtonClick} primary>Open</Button>
            {isModalOpen && <Modal />}
        </>
    )
}

export default ModalPage;
