import { Movie } from "../../models/Movie";
import { MovieDetails } from "../../models/MovieDetails";
import { PaginationResponse } from "../../models/PaginationResponse";
import { WatchProvidingCountries } from "../../models/WatchProvidingCountries";
import { filterMovies, filterWatchProviders } from "../helpers/Utils";
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
  return await TmdbClient.get<MovieDetails>(
    `/movie/${id}`,
    {
      append_to_response: 'videos'
    });
}

const getWatchProviders = async (id: number) => {
  const response = await TmdbClient.get<WatchProvidingCountries>(
    `/movie/${id}/watch/providers`
  );

  return filterWatchProviders(response);
}

export const MoviesService = {
  getPopularMovies,
  getMovieDetails,
  getWatchProviders
};