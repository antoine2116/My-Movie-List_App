import { useInfiniteQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import { getAllResults } from "../../common/helpers/Utils";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Image from "next/image";
import { getImageUrl } from "../../common/helpers/ImageHelper";
import { IoAlertCircleSharp } from "react-icons/io5";

function SearchPalette() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);

  const [query, setQuery] = useState(search);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const { data, status, isLoading } = useInfiniteQuery<PaginationResponse<Movie>>(TmdbQueries.searchMovie(query));

  const results = useMemo<Movie[]>(
    () => data ? getAllResults(data) : [],
    [data]
  );

  const handleClearSearch = () => {
    setQuery("");
  }

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
          const movie = results[selectedItemIndex];
          router.push(`/movie/${movie.id}`);
        } else {
          performSearch();
        }
        break;

      case "Escape":
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
    <div className="max-w-xl w-[40rem] mx-auto transform divide-y divide-gray-200">
      {/* Search bar */}
      <div className="relative">
        <svg aria-hidden="true" className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-600 focus:ring-0 sm:text-sm outline-none"
          placeholder="Search for a film..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Results */}
      {!isLoading && (
        <>
          {query !== "" && results.length > 0 && (
            <div className="max-h-96 scroll-py-3 overflow-y-auto p-3">
              {results.map((movie, index) => (
                <div className="flex cursor-default select-none rounded-xl p-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg">
                    <Image
                      width={50}
                      height={75}
                      src={getImageUrl(movie.poster_path)}
                      alt={movie.title}
                      className={`ml-2 mr-4 w-8`}
                    />
                  </div>
                  <div className="ml-4 flex-auto">
                    <p className="text-sm font-medium text-gray-700">
                      {movie.title}
                    </p>
                    <p className="text-sm text-gray-500">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
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