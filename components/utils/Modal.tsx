import { IoCloseOutline } from "react-icons/io5";

interface ModalProps {
  children: React.ReactNode;
  isOpened: boolean;
  bgColor?: string;
  close: () => void;
}

function Modal({ 
  children, 
  isOpened,
  close,
  bgColor = "black"
}: ModalProps) {

  const handleOutsideClick = () => {
    close();
  }

  const handleInsideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <div className={`block relative z-20 ${isOpened ? "opactity-100 prevent-scroll": "opacity-0 pointer-events-none"} transition-all ease-in-out duration-500`}>
      <div className= {`fixed inset-0 ${isOpened ? "bg-black/50" : "bg-transparent"}`} />
      <div
        className={`fixed inset-0 flex items-center justify-center ${isOpened ? "m-0": "mt-24"} transition-all ease-in-out duration-500`}
        onClick={handleOutsideClick}>
        <div 
          className={`p-4 relative bg-${bgColor} rounded-lg shadow-2xl`}
          onClick={handleInsideClick}>
          <div className="absolute right-0 top-0 p-1">
            <button
              onClick={close}>
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