import { useRouter } from "next/router";
import { getStringQueryParam } from "../common/helpers/QueryHelper";
import { APIQueries } from "../common/APIQueries";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";
import GenreList from "../components/genres/GenreList";

function Search() {
  const router = useRouter();
  const search = getStringQueryParam("search", router.query);
  
  return (
    <>
      <div className="grid grid-cols-6 gap-4">

        <div className="col-span-1">
          <GenreList />
        </div>

        <div className="col-span-5">
          <SearchBar />
          <MovieList query={APIQueries.searchMovie(search)} />
        </div>

      </div>
    </>
  )
}

export default Search;