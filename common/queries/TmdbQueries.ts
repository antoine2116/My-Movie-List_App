import { Cast } from "../../models/Cast";
import { Genres } from "../../models/Genre";
import { Movie } from "../../models/Movie";
import { MovieDetails } from "../../models/MovieDetails";
import { PaginationResponse } from "../../models/PaginationResponse";
import { WatchProvider } from "../../models/WatchProvider";
import { HttpClient } from "../clients/HttpClient";

export const getNextPageParam = (data : PaginationResponse<Movie>) => {
  return data.total_pages == data.page ? undefined : data.page + 1;
}

export const TmdbQueries = {
  popularMovies: () => ({
    queryKey: ["popularMovies"],
    queryFn: ({ pageParam = 1 }) =>
      HttpClient.get<PaginationResponse<Movie>>(
        "api/movies/popular", {
          page: pageParam
        }),
    getNextPageParam
  }),

  searchMovie: (search: string) => ({
    queryKey: ["search", search],
    queryFn: ({ pageParam = 1}) =>
      HttpClient.get<PaginationResponse<Movie>>(
        "/api/search/movie",
        {
          page: pageParam,
          query: search
        }
      ),
    getNextPageParam,
    enabled: search.length > 0
  }),

  movieDetails: (id: string) => ({
    queryKey: ["movieDetails", id],
    queryFn: () => HttpClient.get<MovieDetails>(
      `/api/movies/${id}`
      ),
    enabled: id !== ""
  }),

  movieWatchProviders: (id: number) => ({
    queryKey: ["movieWatchProviders", id],
    queryFn: () => HttpClient.get<WatchProvider[]>(
      `/api/movies/${id}/providers`
      )
  }),

  movieCasting: (id: number) => ({
    queryKey: ["movieCasting", id],
    queryFn: () => HttpClient.get<Cast[]>(
      `/api/movies/${id}/casting`
      )
  }),

  movieRecommendations: (id: number) => ({
    queryKey: ["movieRecommendations", id],
    queryFn: ({ pageParam = 1 }) =>
      HttpClient.get<PaginationResponse<Movie>>(
        `/api/movies/${id}/recommendations`, {
          page: pageParam
        }),
    getNextPageParam
  }),

  genres: () => ({
    queryKey: ["genres", "all"],
    queryFn: () => HttpClient.get<Genres>(`/api/genre/movie/list`)
  }),  

  moviesByGenre: (id: number) => ({
    queryKey: ["moviesByGenre", id],
    queryFn: ({ pageParam = 1 }) =>
      HttpClient.get<PaginationResponse<Movie>>(
        `/api/genre/${id}`, {
          page: pageParam
        }),
    getNextPageParam
  }),
}
