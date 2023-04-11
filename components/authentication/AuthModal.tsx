import { useState } from "react";
import Modal from "../utils/Modal";
import RegisterForm from "./RegisterForm";
import ModalCloseButton from "../utils/ModalCloseButton";
import { useUI } from "../UIContext";

interface AuthModalProps {
  children: React.ReactNode;
}

function AuthModal({
  children,
} : AuthModalProps) {
  
  const { closeModal } = useUI()

  return (
    <div className="px-10 py-6 w-[24rem]">
      <ModalCloseButton close={closeModal} />

      <div className="flex flex-col items-center">
        {children}
      </div>
    </div>
  )
}

export default AuthModal;