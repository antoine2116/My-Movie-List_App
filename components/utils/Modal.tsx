import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
  isOpened: boolean;
  close: () => void;
}

function Modal({ 
  children, 
  isOpened,
  close
}: ModalProps) {

  const handleOutsideClick = () => {
    close();
  }

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  if (!isOpened) return null;

  return (
    <div className="relative z-20">
      <div className="fixed inset-0 bg-black/50" />
      <div 
        className="fixed inset-0 flex items-center justify-center"
        onClick={handleOutsideClick}>
        <div 
          className="p-4 relative bg-black rounded-lg shadow-2xl"
          onClick={handleInsideClick}>
          <div className="absolute right-0 top-0">
            <button
              className="p-2"
              onClick={close}
            >
              <IoCloseOutline className="text-3xl text-white" />
            </button>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;