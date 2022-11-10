import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
import SearchBar from "../utils/search-bar";
import MovieCard from "./movie-card";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";

export default function MovieList() {
	const fetchMovies = async ({ pageParam = 1 }) => {
		const res = await fetch(`/api/movies/popular?page=${pageParam}`);
		return res.json();
	};

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
		queryFn: fetchMovies,
		getNextPageParam: (lastPage, pages) => lastPage.page + 1
	});

	const handleScroll = (event: React.UIEvent<HTMLElement>) => {
		if (event.currentTarget.scrollTop + event.currentTarget.clientHeight >= (event.currentTarget.scrollHeight - 100)) {
			fetchNextPage();
		}
	}
	
	if (status === "error") return (<div>Erreur </div>)
	if (status === "loading") return(<></>)

	return (
		<>
			<div className="mx-16">
				<SearchBar />
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
				</div>
			</div>
		</>
	)
}