import { Movie } from "../models/movie";
import { PaginationResponse } from "../models/paginationResponse";
import { HttpClient } from "./HttpClient";

export const getNextPageParam = (data : PaginationResponse<Movie>) => {
  return data.total_pages == data.page ? undefined : data.page + 1;
}

export const APIQueries = {
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
  })
}
