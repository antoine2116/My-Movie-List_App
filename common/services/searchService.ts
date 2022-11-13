import { Movie } from "../../models/movie";
import { PaginationResponse } from "../../models/paginationResponse";
import { tmdbClient } from "../tmdbClient";

const searchMovies = async (
    page: number,
    query: string
  ) => {
  const response = await tmdbClient.get<PaginationResponse<Movie[]>>(
    '/search/movie',
    {
      page: page,
      query: query 
    }
  );


  return response;
}

export const searchService = {
  searchMovies
};
