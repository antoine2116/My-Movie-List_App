import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useMemo, useEffect, useRef } from "react";
import { getAllResults } from "../../common/helpers/Utils";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { getImageUrl } from "../../common/helpers/ImageHelper";
import { IoAlertCircleSharp } from "react-icons/io5";
import { useUI } from "../UIContext";
import SearchResult from "./SearchResult";

function SearchPalette() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const { data, isLoading } = useInfiniteQuery<PaginationResponse<Movie>>(TmdbQueries.searchMovie(query));
  const { displayModal, closeModal } = useUI();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const results = useMemo<Movie[]>(
    () => data ? getAllResults(data) : [],
    [data]
  );

  useEffect(() => {
    // setQuery("");
    // setSelectedItemIndex(0);

    // if (!inputRef.current) return;

    // inputRef.current.value = ""
    // inputRef.current.focus();
    // console.log(selectedItemIndex);
    
  }, [displayModal]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        
        setSelectedItemIndex((prevIndex) => {
          if (prevIndex === results.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
        break;

      case "ArrowUp":
        event.preventDefault();

        setSelectedItemIndex((prevIndex) => {
          if (prevIndex === 0) {
            return results.length - 1;
          } else {
            return prevIndex - 1;
          }
        });
        break;

      case "Enter":
        event.preventDefault();

        if (selectedItemIndex !== -1) {
          closeModal(); 
          const movie = results[selectedItemIndex];
          router.push(`/movie/${movie.id}`);
        }

        break;

      default:
        break;
    }
  }

  const performSearch = () => {
    if (query) {
      router.push({
        pathname: "/search",
        query: { search: query },
      });
    }
  };

  return (
    <div 
      className="max-w-xl w-[40rem] mx-auto transform divide-y divide-gray-200"
      onKeyDown={handleKeyDown}
    >
      <div className="relative">
        <svg aria-hidden="true" className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm outline-none"
          placeholder="Search for a film..."
          ref={inputRef}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      

      {/* Results */}
      {!isLoading && (
        <>
          {query !== "" && results.length > 0 && (
            <div className="max-h-96 scroll-py-3 overflow-y-auto p-3">
              {results.map((movie, index) => (
                <SearchResult
                  key={movie.id}
                  title={movie.title}
                  description={movie.release_date}
                  image={getImageUrl(movie.poster_path)}
                  active={selectedItemIndex === index}
                />
              ))}
            </div>
          )}

          {query !== '' && results.length === 0 && (
            <div className="py-14 px-6 text-center text-sm sm:px-14">
              <IoAlertCircleSharp
                type="outline"
                name="exclamation-circle"
                className="mx-auto h-6 w-6 text-gray-400"
              />
              <p className="mt-4 font-semibold text-gray-900">No results found</p>
              <p className="mt-2 text-gray-500">No movie found for this search term. Please try again.</p>
            </div>
          )}
        </>
      )}

      {/* Footer */}
      <div className="flex flex-wrap items-center bg-white py-2.5 px-4 text-xs text-gray-700">
        Press
        <kbd className="flex h-5 w-8 items-center justify-center rounded border bg-white font-semibold mx-2 border-orange-600 text-orange-600"                  >
          Esc
        </kbd>
        <span>to exit the search</span>
      </div>
    </div>
  )
}

export default SearchPalette;