import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { filterMovies } from "../helpers/Utils";
import { TmdbClient } from "../TmdbClient";

const getPopularMovies = async (page:number) => {
  const response = await TmdbClient.get<PaginationResponse<Movie>>(
    '/movie/popular',
    {
      page: page 
    }
  );

  return filterMovies(response);
}

export const MoviesService = {
  getPopularMovies
};
