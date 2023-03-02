import { useRouter } from "next/router";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import GenreList from "../../components/genres/GenreList";
import MovieList from "../../components/movies/MovieList";
import SearchBar from "../../components/search/SearchBar";

function Genre() {
  const router = useRouter()
  const id = Number(getStringQueryParam("id", router.query));

  return (
    <MovieList query={TmdbQueries.moviesByGenre(id)} />
  )
}

export default Genre;