import MovieCard from "./MovieCard";
import { QueryFunction, useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import React from "react";
import Spinner from "../utils/spinner";
import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";

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
		if (!isFetchingNextPage && event.currentTarget.scrollTop + event.currentTarget.clientHeight >= (event.currentTarget.scrollHeight)) {
			fetchNextPage();
		}
	}
	
	if (status === "error") return (<div>Error</div>)
	if (status === "loading") return(<></>)

	if (data.pages[0].total_results == 0) return (
		<div className="">
			No results
		</div>
	)

	return (
		<>
			<div className="mx-4 sm:mx-8 md:mx-16">
				<div className="h-auto max-h-full overflow-y-auto pr-3" style={{ height: 'calc(100vh - 70px - 86px)' }} onScroll={handleScroll}>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{data.pages.map((group, i) => (
							<React.Fragment key={i}>
								{group.results.map((movie: Movie) => (
									<MovieCard 
										key={movie.id} 
										movie={movie} />
								))}
							</React.Fragment>
						))}
					</div>
					{
						isFetchingNextPage 
							? <Spinner />  
							: null
					}
				</div>
			</div>
		</>
	)
}