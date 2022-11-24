import MovieCard from "./MovieCard";
import { useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import React from "react";
import Spinner from "../utils/Spinner";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { getAllResults } from "../../common/helpers/Utils";

interface MovieListProps {
	query: UseInfiniteQueryOptions<PaginationResponse<Movie>>;
}

export default function MovieList({ query } : MovieListProps){
	const {
		data,
		fetchNextPage,
		isFetchingNextPage,
		status
	} = useInfiniteQuery<PaginationResponse<Movie>>(query);

	const handleScroll = (event: React.UIEvent<HTMLElement>) => {
		if (!isFetchingNextPage &&
				 event.currentTarget.scrollTop + event.currentTarget.clientHeight >= (event.currentTarget.scrollHeight)
				) {
			fetchNextPage();
		}
	}

	return status === "loading" ? (
    <Spinner />
  ) : status === "error" ? (
    <p>Error !</p>
  ) : (
		<>
			<div className="mx-4 sm:mx-8 md:mx-16">
				<div className="h-auto max-h-full overflow-y-auto pr-3" style={{ height: 'calc(100vh - 70px - 86px)' }} onScroll={handleScroll}>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{getAllResults(data).map((movie: Movie) => (
							<MovieCard
								key={movie.id}
								movie={movie} />
						))}
					</div>
					{
						isFetchingNextPage && ( 
							<Spinner />  
						)
					}
				</div>
			</div>
		</>
	)
}