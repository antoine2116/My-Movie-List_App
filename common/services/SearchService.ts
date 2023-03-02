import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { filterMovies } from "../helpers/Utils";
import { TmdbClient } from "../clients/TmdbClient";

const searchMovies = async (
    page: number,
    query: string
  ) => {
  const response = await TmdbClient.get<PaginationResponse<Movie>>(
    '/search/movie',
    {
      page: page,
      query: query 
    }
  );

  return filterMovies(response);
}

export const SearchService = {
  searchMovies
};
