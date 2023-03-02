import { Movie } from "../../models/Movie";
import { MovieCredits } from "../../models/MovieCredits";
import { MovieDetails } from "../../models/MovieDetails";
import { PaginationResponse } from "../../models/PaginationResponse";
import { WatchProvidingCountries } from "../../models/WatchProvidingCountries";
import { filterCast, filterMovies, filterWatchProviders } from "../helpers/Utils";
import { TmdbClient } from "../clients/TmdbClient";

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

const getMovieCasting = async (id: number) => {
  const response = await TmdbClient.get<MovieCredits>(
    `/movie/${id}/credits`
  );

  return filterCast(response.cast);
}

const getRecommendations = async (id: number) => {
  const response = await TmdbClient.get<PaginationResponse<Movie>>(
    `/movie/${id}/recommendations`
  );
    
  return filterMovies(response);
}

const getMoviesByGenre = async (id: number, page: number) => {
  const response = await TmdbClient.get<PaginationResponse<Movie>>(
    `/discover/movie`,
    {
      with_genres: id,
      page: page
    }
  );

  return filterMovies(response);
}

export const MoviesService = {
  getPopularMovies,
  getMovieDetails,
  getWatchProviders,
  getMovieCasting,
  getRecommendations,
  getMoviesByGenre
};
