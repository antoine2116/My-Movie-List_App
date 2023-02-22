import { useRouter } from "next/router";
import { APIQueries } from "../../common/APIQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import GenreList from "../../components/genres/GenreList";
import MovieList from "../../components/movies/MovieList";
import SearchBar from "../../components/search/SearchBar";

function Genre() {
  const router = useRouter()
  const id = Number(getStringQueryParam("id", router.query));

  return (
    <MovieList query={APIQueries.moviesByGenre(id)} />
  )
}

export default Genre;