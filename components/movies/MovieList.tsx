import MovieCard from "./MovieCard";
import { QueryFunction, useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../utils/spinner";
import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";

interface MovieListProps {
	queryFn: QueryFunction<PaginationResponse<Movie>>;
}

export default function MovieList({ queryFn } : MovieListProps){
	const {
		data,
		error,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
		status
	} = useInfiniteQuery<PaginationResponse<Movie>>({
		queryKey: ["movies"],
		queryFn: queryFn,
		getNextPageParam: (lastPage, pages) => lastPage.page + 1
	});

	const handleScroll = (event: React.UIEvent<HTMLElement>) => {
		if (event.currentTarget.scrollTop + event.currentTarget.clientHeight >= (event.currentTarget.scrollHeight - 200)) {
			fetchNextPage();
		}
	}
	
	if (status === "error") return (<div>Erreur</div>)
	if (status === "loading") return(<></>)

	return (
		<>
			<div className="mx-4 sm:mx-8 md:mx-16">
				<div className="h-auto max-h-full overflow-y-auto pr-3" style={{ height: 'calc(100vh - 70px - 86px)' }} onScroll={handleScroll}>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
						{data.pages.map((group, i) => (
							<React.Fragment key={i}>
								{group.results.map((movie: Movie) => (
									<MovieCard 
										key={movie.id} movie={movie} />
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