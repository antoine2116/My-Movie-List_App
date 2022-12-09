import Spinner from "./Spinner";

interface CarrouselProps {
  loading: boolean;
  children: React.ReactNode;
}

function Carrousel({ 
  children,
  loading
}: CarrouselProps) {

  return (
    <div className="overflow-x-auto overflow-y-visible scrollbar-thumb-gray-300 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-md">
      <div className="flex space-x-3">
        {
          loading ? <Spinner /> : children
        }
      </div>
    </div>
  )
}

export default Carrousel;