import { httpClient } from "../common/httpClient";
import MovieList from "../components/movies/movie-list";
import SearchBar from "../components/utils/search-bar";
import { Movie } from "../models/movie";
import { PaginationResponse } from "../models/paginationResponse";

function Home() {

  const fetchPopularMovies = async ({ pageParam = 1 }) => {
		return await httpClient.get<PaginationResponse<Movie>>(
      "/api/movies/popular",
      {
        page: pageParam,
      });
	};

  return (
    <>
      <SearchBar />
      <MovieList queryFn={fetchPopularMovies} />
    </>
  )
}

export default Home; 