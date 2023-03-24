import { useUI } from "../UIContext";
import ReactPortal from "./ReactPortal";

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
  
  return (
    <ReactPortal>
      <div className={`block relative z-20 ${displayModal ? "opactity-100 prevent-scroll" : "opacity-0 pointer-events-none"}`}>
        <div className={`fixed inset-0 ${displayModal ? "opacity-100" : "opacity-0"} bg-black/20 backdrop-blur-sm transition-opacity linear duration-300`} />
        <div
          className={`fixed inset-0 flex items-center justify-center ${displayModal ? "m-0" : "mt-24"} transition-all ease-in-out duration-300`}
          onClick={onClose}>
          <div
            className="shadow-2xl bg-white rounded-lg transition-all ease-in-out duration-300"
            onClick={handleInsideClick}>
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  )
}

export default Modal;