import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect, useRef } from "react";
import { getAllResults, scrollIntoView } from "../../common/helpers/Utils";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { getImageUrl } from "../../common/helpers/ImageHelper";
import { IoAlertCircleSharp, IoChevronForwardSharp } from "react-icons/io5";
import { useUI } from "../UIContext";
import Image from "next/image";

function SearchPalette() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const { displayModal, closeModal } = useUI();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useInfiniteQuery<PaginationResponse<Movie>>(TmdbQueries.searchMovie(query));
  const results = useMemo<Movie[]>(() => (data ? getAllResults(data) : []), [data]);

  const jumpTo = (id: number) => {
    closeModal();
    router.push(`/movie/${id}`);
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedIndex(0);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex === results.length - 1 ? 0 : prevIndex + 1));
        break;

      case "ArrowUp":
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? results.length - 1 : prevIndex - 1));
        break;

      case "Enter":
        event.preventDefault();
        if (results.length === 0) return;
        jumpTo(results[selectedIndex].id);
        break;

      default:
        break;
    }
  };

  // Clear selection and input when modal is closed
  useEffect(() => {
    setQuery("");
    setSelectedIndex(0);
    
    if (!inputRef.current) return;

    inputRef.current.value = "";
    inputRef.current.focus();
  }, [displayModal]);

  // Scroll to selected item if not fully in view
  useEffect(() => {
    if (resultsContainerRef.current) {
      const selectedItem = resultsContainerRef.current.children[selectedIndex];
      if (selectedItem) {
        scrollIntoView(resultsContainerRef.current, selectedItem as HTMLElement);
      }
    }
  }, [selectedIndex]);

  return (
    <div className="w-[40rem] mx-auto transform" onKeyDown={handleKeyDown}>
      {/* Search input */}
      <div className="relative">
        <svg aria-hidden="true" className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm outline-none"
          placeholder="Search for a film..."
          ref={inputRef}
          onChange={handleQueryChange}
        />
      </div>

      {/* Results */}
      {!isLoading && (
        <>
          {query !== "" && results.length > 0 && (
            <div className="max-h-96 scroll-py-3 overflow-y-auto space-y-1 px-2" ref={resultsContainerRef}>
              {results.map((movie, index) => (
                <div
                  className={`flex cursor-pointer select-none rounded-xl p-3 group bg-white aria-selected:bg-orange-600 hover:bg-orange-600`}
                  onClick={() => jumpTo(movie.id)}
                  aria-selected={selectedIndex === index}
                  key={movie.id}
                >
                  {/* Movie Poster */}
                  <div className="flex w-10 h-10 flex-none items-center justify-center">
                    <Image width={50} height={75} src={getImageUrl(movie.poster_path)} alt={movie.title} className={`ml-2 mr-4 w-8 rounded-md`} />
                  </div>
                  {/* Movie Details */}
                  <div className="ml-4 flex-auto">
                    <p className="text-sm font-medium text-gray-700 truncate group-aria-selected:text-white group-hover:text-white">{movie.title}</p>
                    <p className="text-sm text-gray-500 group-aria-selected:text-white group-hover:text-gray-50">{movie.release_date}</p>
                  </div>
                  {/* Arrow */}
                  <div className="ml-2 hidden items-center group-aria-selected:flex group-hover:flex">
                    <IoChevronForwardSharp type="outline" name="chevron-forward" className="h-5 w-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {query !== "" && results.length === 0 && (
            <div className="py-14 px-6 text-center text-sm sm:px-14">
              <IoAlertCircleSharp type="outline" name="exclamation-circle" className="mx-auto h-6 w-6 text-gray-400" />
              <p className="mt-4 font-semibold text-gray-900">No results found</p>
              <p className="mt-2 text-gray-500">No movie found for this search term. Please try again.</p>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center bg-white py-2.5 px-4 text-xs text-gray-700 border-t border-gray-200">
        <kbd className="flex h-5 w-8 items-center justify-center rounded border bg-white font-semibold mx-2 border-orange-600 text-orange-600">Esc</kbd>
        <span>to exit the search</span>

        <kbd className="flex h-5 w-8 ml-4 items-center justify-center rounded border bg-white font-semibold mx-2 border-orange-600 text-orange-600">↓ ↑</kbd>
        <span>to navigate</span>

        <kbd className="flex h-5 w-12 ml-4 items-center justify-center rounded border bg-white font-semibold mx-2 border-orange-600 text-orange-600">Enter</kbd>
        <span>to select</span>
      </div>
    </div>
  );
}

export default SearchPalette;
