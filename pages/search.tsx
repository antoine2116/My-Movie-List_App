import { useRouter } from "next/router";
import { httpClient } from "../common/httpClient";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/utils/search-bar";
import { Movie } from "../models/movie";
import { PaginationResponse } from "../models/paginationResponse";

function Search() {
  const router = useRouter();

  // TODO : Fix se<arch varialbe set to undefined on first render
  const fetchSearchedMovies = async ({ pageParam = 1 }) => {

    const { search } = router.query;

    console.log(search);
    
		return await httpClient.get<PaginationResponse<Movie>>(
      "/api/search/movie",
      {
        page: pageParam,
        query: search
      });
	};


  return (
    <>
      <SearchBar search={""} />
      <MovieList queryFn={fetchSearchedMovies} />
    </>
  )
}

export default Search;