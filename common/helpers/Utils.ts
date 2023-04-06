import { InfiniteData } from "@tanstack/react-query"
import { Cast } from "../../models/Cast";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse"
import { WatchProvider } from "../../models/WatchProvider";
import { WatchProvidingCountries } from "../../models/WatchProvidingCountries";
import { log } from "console";

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

export function convertVoteAverage(voteAverage: number): string {
  return (voteAverage * 10).toFixed(0);
}

export const scrollIntoView = (container: HTMLElement, element: HTMLElement) => {
  const containerRect = container.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const overScroll = element.offsetHeight / 3;

  // If the element is below the container
  if (elementRect.bottom + overScroll > containerRect.bottom) {
    container.scrollTop = Math.min(
        element.offsetTop +
          element.clientHeight / 2 -
          container.offsetHeight - 10,
        container.scrollHeight
      )
  } 
  // If the element is above the container
  else if (elementRect.top - overScroll < containerRect.top) {
    container.scrollTop = Math.max(element.offsetTop - element.clientHeight / 2   - overScroll, 0);
  }
}