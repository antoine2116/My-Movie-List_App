import { useState } from "react";
import Modal from "../utils/Modal";
import RegisterForm from "./RegisterForm";
import ModalCloseButton from "../utils/ModalCloseButton";

function AuthModal() {
  const [showModal, setShowModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <Modal
      isOpened={showModal}
      close={handleCloseModal}>
      <div className="p-8 min-w-[22rem]">
        <ModalCloseButton close={handleCloseModal} />
        <RegisterForm />
      </div>
    </Modal>
  )
}

export default AuthModal;