import { useRouter } from "next/router";
import { getStringQueryParam } from "../common/helpers/QueryHelper";
import { APIQueries } from "../common/APIQueries";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";

function Search() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);

  return (
    <>
      <SearchBar />
      { // TODO : find a better solution (search = undefined on first render so error on API call)
        search && <MovieList query={APIQueries.searchMovie(search)} />
      }
    </>
  )
}

export default Search;