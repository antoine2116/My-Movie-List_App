import { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Spinner from "./spinner";

interface CarrouselProps {
  loading: boolean;
  children: React.ReactNode;
}

function Carrousel({
  children,
  loading
}: CarrouselProps) {

  const scroll = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const scrollTo = (
    step: number
  ) => {
    if (scroll.current !== null) {
      scroll.current.scrollLeft += step;
      setScrollPosition(scrollPosition + step);
    }
  };

  const scrollLeft = () => {
    scrollTo(-1200);
  };

  const scrollRight = () => {
    scrollTo(1200);
  };

  const handleScroll = () => {
    if (scroll.current !== null) {
      setScrollPosition(scroll.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (scroll.current !== null && scrollPosition != 0) {
      setScrollEnd(scrollPosition + scroll.current.offsetWidth >= scroll.current.scrollWidth);
    }
  }, [scrollPosition, scroll]);

  return (
    <div className="relative">

      {/* Left scroll button */}
      {scrollPosition !== 0 && (
        <div
          className="absolute top-1/4 left-[-1.25rem] flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-300 w-10 h-10 hover:bg-gray-100 hover:cursor-pointer"
          onClick={scrollLeft}
        >
          <IoChevronBackOutline className="text-gray-600 text-xl" />
        </div>
      )}

      {/* Scrolling element */}
      <div 
        className="overflow-x-auto overflow-y-visible scrollbar-none scroll-smooth snap-x" 
        ref={scroll}
        onScroll={handleScroll}>
        <div className="flex space-x-3 mb-5">
          {
            loading ? <Spinner /> : children
          }
        </div>
      </div>

      {/* Right scroll button */}
      {!scrollEnd && (
        <div
          className="absolute top-1/4 right-[-1.25rem] flex items-center justify-center rounded-full shadow-lg bg-white border border-gray-300 w-10 h-10 hover:bg-gray-100 hover:cursor-pointer"
          onClick={scrollRight}
        >
          <IoChevronForwardOutline className="text-gray-600 text-xl" />
        </div>
      )}

    </div>
  )
}

export default Carrousel;