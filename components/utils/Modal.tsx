import { useRef } from "react";
import { useUI } from "../UIContext";
import { useKeyPress } from "../../hooks/useKeyPress";
import { Transition } from "@headlessui/react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
  const { displayModal } = useUI();

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  useKeyPress("Escape", () => {
    const modal = ref.current;
    if (modal && displayModal) {
      onClose();
    }
  });

  return (
    <Transition show={displayModal}>
      <div className={`block relative z-20 ${displayModal ? "opactity-100 prevent-scroll" : "opacity-0 pointer-events-none"}`}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm`} />
        </Transition.Child>
        <div
          className={`fixed inset-0 flex items-start pt-24 justify-center`}
          ref={ref}
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <Transition.Child
            enter="transition-all ease-linear duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100"
            leave="transition-all ease-linear duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="shadow-2xl bg-primary rounded-lg overflow-hidden"
              onClick={handleInsideClick}
            >
              <div>{children}</div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
}

export default Modal;
