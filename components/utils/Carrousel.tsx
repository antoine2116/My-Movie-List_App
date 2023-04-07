import { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Spinner from "./Spinner";
import CarrouselButton from "./CarrouselButton";

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
    if (scroll.current) {
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
    if (scroll.current) {
      setScrollPosition(scroll.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (scroll.current && scrollPosition !== 0) {
      setScrollEnd(scrollPosition + scroll.current.offsetWidth >= scroll.current.scrollWidth);
    }
  }, [scrollPosition, scroll]);

  return (
    <div className="relative mt-3">

      {/* Left scroll button */}
      {scrollPosition !== 0 && (
        <CarrouselButton
          onClick={scrollLeft}
          position="left"
        />
      )}

      {/* Scrolling element */}
      <div 
        className="overflow-x-auto overflow-y-visible scrollbar-none scroll-smooth snap-x" 
        ref={scroll}
        onScroll={handleScroll}
      >
        <div className="flex space-x-2 mb-5">
          {
            loading ? <Spinner /> : children
          }
        </div>
      </div>

      {/* Right button */}
      {!scrollEnd && (
        <CarrouselButton
          onClick={scrollRight}
          position="right"
        />
      )}
    </div>
  )
}

export default Carrousel;