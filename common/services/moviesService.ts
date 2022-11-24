import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
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

export const MoviesService = {
  getPopularMovies
};
