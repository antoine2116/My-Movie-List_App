import { Movie } from "../../models/Movie";
import { MovieDetails } from "../../models/MovieDetails";
import { PaginationResponse } from "../../models/PaginationResponse";
import { filterMovies } from "../helpers/Utils";
import { TmdbClient } from "../TmdbClient";

const getPopularMovies = async (page: number) => {
  const response = await TmdbClient.get<PaginationResponse<Movie>>(
    '/movie/popular',
    {
      page: page 
    }
  );

  return filterMovies(response);
}

const getMovieDetails = async (id: number) => {
  return await TmdbClient.get<MovieDetails>(`/movie/${id}`);
}

export const MoviesService = {
  getPopularMovies,
  getMovieDetails
};
