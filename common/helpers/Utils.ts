import { InfiniteData } from "@tanstack/react-query"
import { Cast } from "../../models/Cast";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse"
import { WatchProvider } from "../../models/WatchProvider";
import { WatchProvidingCountries } from "../../models/WatchProvidingCountries";

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

export function filterWatchProviders(data: WatchProvidingCountries): WatchProvider[] {
  return "FR" in data.results ? data.results.FR.flatrate : [];
}

export function filterCast(data: Cast[]) : Cast[] {
  return data.filter((cast) => cast.profile_path);
}

export function convertToHours(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}