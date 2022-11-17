import { useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import React from "react";
import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
import MovieCard from "../movies/MovieCard";
import Spinner from "../utils/spinner";
import SearchSuggestionItem from "./SearchSuggestionItem";

interface SearchSuggestionListProps {
	query: UseInfiniteQueryOptions<PaginationResponse<Movie>>;
}

function SearchSuggestionList({ query } : SearchSuggestionListProps) {
  const {
		data,
		isFetchingNextPage,
		status
	} = useInfiniteQuery<PaginationResponse<Movie>>(query);
  
  if (status === "error") return (<div>Error</div>)
	if (status === "loading") return(<></>)

  return (
    <div className="absolute z-10 w-full shadow-lg">
      <div className="bg-white border border-t-0 border-gray-200 rounded-b-md">
        {
          isFetchingNextPage
            ? <Spinner />
            : null
        }
        <ul className="p-0 m-0 divide-y divide-gray-200">
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.results.slice(0, 6).map((movie: Movie) => (
                <SearchSuggestionItem
                  key={movie.id}
                  movie={movie} />
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  )  
}

export default SearchSuggestionList;