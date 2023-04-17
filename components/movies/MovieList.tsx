import MovieCard from "./MovieCard";
import { useInfiniteQuery, UseInfiniteQueryOptions } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Spinner from "../utils/Spinner";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { getAllResults } from "../../common/helpers/Utils";
import { useInView } from "react-intersection-observer";

interface MovieListProps {
	query: UseInfiniteQueryOptions<PaginationResponse<Movie>>;
}

export default function MovieList({ query } : MovieListProps) {
	const  { ref, inView } = useInView();
	
	const {
		data,
		fetchNextPage,
		status
	} = useInfiniteQuery<PaginationResponse<Movie>>(query);

	useEffect(() => {
		if (inView) {
			fetchNextPage();
		}
	}, [inView, fetchNextPage])


	return status === "loading" ? (
    <Spinner />
  ) : status === "error" ? (
    <p>Error !</p>
  ) : (
		<>
			<div className="py-2">
				<div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4">
					{getAllResults(data).map((movie: Movie) => (
						<MovieCard
							key={movie.id}
							movie={movie} />
					))}
				</div>
				<div ref={ref}>
						<Spinner />  
				</div>
				
			</div>
		</>
	)
}