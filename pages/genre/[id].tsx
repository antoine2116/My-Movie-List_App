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
    <>
      <div className="grid grid-cols-6 gap-4">

        <div className="col-span-1">
          <GenreList activeId={id} />
        </div>

        <div className="col-span-5">
          <SearchBar />
          <MovieList query={APIQueries.moviesByGenre(id)} />
        </div>

      </div>
    </>
  )
}

export default Genre;