import { useRef, useCallback, useEffect } from "react";
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

  const ref = useRef() as React.MutableRefObject<HTMLDivElement>

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        return onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    const modal = ref.current

    if (modal) {
      window.addEventListener('keydown', handleKey)
    }
    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])
  
  return (
    <ReactPortal>
      <div ref={ref} className={`block relative z-20 ${displayModal ? "opactity-100 prevent-scroll" : "opacity-0 pointer-events-none"}`}>
        <div className={`fixed inset-0 ${displayModal ? "opacity-100" : "opacity-0"} bg-black/20 backdrop-blur-sm transition-opacity linear duration-300`} />
        <div
          className={`fixed inset-0 flex items-start pt-24 justify-center ${displayModal ? "opactiy-100 scale-100" : "opacity-0 scale-95"} transition-all ease-in-out duration-300`}
          onClick={onClose}>
          <div
            className="shadow-2xl bg-white rounded-lg overflow-hidden transition-all ease-in-out duration-300"
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