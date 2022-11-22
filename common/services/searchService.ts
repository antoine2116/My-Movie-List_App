import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
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
