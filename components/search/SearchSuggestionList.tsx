import { Movie } from "../../models/Movie";
import Maybe from "../utils/Maybe";
import Spinner from "../utils/Spinner";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface SearchSuggestionListProps {
  options: Movie[];
  visible: boolean;
  isLoading: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLUListElement>;
  onMouseLeave: React.MouseEventHandler<HTMLUListElement>;
  selectedItemIndex: number;
}

function SearchSuggestionList({
  options,
  visible,
  isLoading,
  onMouseEnter,
  onMouseLeave,
  selectedItemIndex
} : SearchSuggestionListProps) {

  if (!visible) return null;

  return (
    <div className="absolute z-10 w-full shadow-lg">
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-md">
        <ul
          className="p-0 m-0 divide-y divide-gray-200 overflow-y-scroll max-h-80"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Maybe condition={isLoading}>
            <Spinner />
          </Maybe>

          <Maybe condition={!isLoading && options.length > 0}>
            {options.map((movie: Movie, index: number) => (
                <SearchSuggestionItem
                  key={movie.id}
                  movie={movie}
                  selected={selectedItemIndex === index}
                />
              ))}
          </Maybe>

          <Maybe condition={!isLoading && options.length == 0}>
            <li className="h-14 p-3">
              No results found
            </li>
          </Maybe>
        </ul>
      </div>
    </div>
  )
}

export default SearchSuggestionList;