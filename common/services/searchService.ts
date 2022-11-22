import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import { TmdbClient } from "../TmdbClient";

const searchMovies = async (
    page: number,
    query: string
  ) => {
  const response = await TmdbClient.get<PaginationResponse<Movie[]>>(
    '/search/movie',
    {
      page: page,
      query: query 
    }
  );


  return response;
}

export const SearchService = {
  searchMovies
};
