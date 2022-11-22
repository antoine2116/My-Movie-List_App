import { useEffect } from "react";
import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
import Spinner from "../utils/spinner";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface SearchSuggestionListProps {
  options: Movie[];
  visible: boolean;
  isLoading: boolean;
}

function SearchSuggestionList({
  options,
  visible,
  isLoading
} : SearchSuggestionListProps) {

  if (!visible) return null;

  return (
    <div className="absolute z-10 w-full shadow-lg">
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-md">
        <ul className="p-0 m-0 divide-y divide-gray-200 overflow-y-scroll max-h-80">
          {isLoading 
            ? 
              <Spinner /> 
            : 
              options.map((movie: Movie) => (
                <SearchSuggestionItem 
                  key={movie.id} 
                  movie={movie}
                />
              ))
          }
        </ul>
      </div>
    </div>
  )
}

export default SearchSuggestionList;