import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
    }
    return (
        <>
            <Button onClick={handleButtonClick} primary>Open</Button>
            {isModalOpen && (
                <Modal onClose={handleModalClose}>
                    I accpet the agrement
                </Modal>
            )}
        </>
    )
}

export default ModalPage;
