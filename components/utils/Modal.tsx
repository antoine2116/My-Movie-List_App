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

  return (
    <div className={`block relative z-20 ${isOpened ? "opactity-100 prevent-scroll": "opacity-0 pointer-events-none"} transition-all ease-in-out duration-500`}>
      <div className= {`fixed inset-0 ${isOpened ? "bg-black/50" : "bg-transparent"}`} />
      <div
        className={`fixed inset-0 flex items-center justify-center ${isOpened ? "m-0": "mt-24"} transition-all ease-in-out duration-500`}
        onClick={handleOutsideClick}>
        <div 
          className="shadow-2xl bg-white rounded-lg"
          onClick={handleInsideClick}>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;