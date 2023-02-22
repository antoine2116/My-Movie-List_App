import { IoCloseOutline } from "react-icons/io5";

interface ModalCloseButtonProps {
  close: () => void;
}

function ModalCloseButton({ 
  close
 }: ModalCloseButtonProps) {
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <button onClick={close}>
          <IoCloseOutline className="text-2xl text-black" />
        </button>
      </div>
    </div>
  );
}

export default ModalCloseButton;
