import { Movie } from "../models/movie";
import { PaginationResponse } from "../models/PaginationResponse";
import { tmdbClient } from "./tmdbClient";

const getPopularMovies = async () => {
  const response = await tmdbClient.get<PaginationResponse<Movie[]>>(
    '/movie/popular',
  );

  return response;
}

export const moviesService = {
  getPopularMovies,
};
