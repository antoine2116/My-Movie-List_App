import { useRef } from "react";
import { useUI } from "../UIContext";
import { useKeyPress } from "../../hooks/useKeyPress";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({
  children,
  onClose
}: ModalProps) {
  const { displayModal } = useUI();

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  useKeyPress(
    "Escape",
    () => {
      const modal = ref.current;
      if (modal && displayModal) {
        onClose();
      }
    }
  )

  return (
    <div className={`block relative z-20 ${displayModal ? "opactity-100 prevent-scroll" : "opacity-0 pointer-events-none"}`}>
      <div className={`fixed inset-0 ${displayModal ? "opacity-100" : "opacity-0"} bg-black/20 backdrop-blur-sm transition-opacity linear duration-300`} />
      <div
        className={`fixed inset-0 flex items-start pt-24 justify-center ${displayModal ? "opactiy-100 scale-100" : "opacity-0 scale-95"} transition-all ease-in-out duration-300`}
        ref={ref}
        role="dialog"
        aria-modal="true"
        onClick={onClose}>
        <div
          className="shadow-2xl bg-primary rounded-lg overflow-hidden transition-all ease-in-out duration-300"
          onClick={handleInsideClick}>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;