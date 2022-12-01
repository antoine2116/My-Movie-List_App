import { InfiniteData } from "@tanstack/react-query"
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse"

export function getAllResults<T> (data : InfiniteData<PaginationResponse<T>>): T[] {
  return data?.pages?.flatMap((page) => page.results) ?? [];
}

export function filterMovies(data: PaginationResponse<Movie>): PaginationResponse<Movie> {
  return {
    ...data,
    results: data.results.filter((movie) => 
      movie.poster_path &&
      movie.popularity > 10
    )
  }
}

export function convertToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}