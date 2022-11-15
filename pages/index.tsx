import { httpClient } from "../common/HttpClient";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/utils/search-bar";
import { Movie } from "../models/Movie";
import { PaginationResponse } from "../models/PaginationResponse";

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