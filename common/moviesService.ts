import { Movie } from "../models/movie";
import { PaginationResponse } from "../models/paginationResponse";
import { tmdbClient } from "./tmdbClient";

const getPopularMovies = async (page:number) => {
  const response = await tmdbClient.get<PaginationResponse<Movie[]>>(
    '/movie/popular',
    {
      page: page 
    }
  );
  return response;
}

export const moviesService = {
  getPopularMovies
};
