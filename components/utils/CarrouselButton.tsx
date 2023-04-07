import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface CarrouselButtonProps {
  onClick: () => void;
  position: "left" | "right";
}

function CarrouselButton({ onClick, position }: CarrouselButtonProps) {
  return (
    <div
      className={`absolute top-1/3 ${
        position == "left" ? "left-[-1.125rem]" : "right-[-1.125rem]"
      } z-10 flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-300 w-8 h-8 hover:bg-gray-100 hover:cursor-pointer`}
      onClick={onClick}
    >
      {position === "left" ? 
        <IoChevronBackOutline className="text-gray-600 text-xl" /> : 
        <IoChevronForwardOutline className="text-gray-600 text-xl" />
      }
    </div>
  );
}

export default CarrouselButton;
