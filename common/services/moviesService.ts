import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
import { TmdbClient } from "../TmdbClient";

const getPopularMovies = async (page:number) => {
  const response = await TmdbClient.get<PaginationResponse<Movie[]>>(
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
