import { TmdbQueries } from "../common/queries/TmdbQueries";
import MovieList from "../components/movies/MovieList";
import HeaderSubtitle from "../components/utils/HeaderSubtitle";
import HeaderTitle from "../components/utils/HeaderTitle";
import Separator from "../components/utils/Separator";

function Popular() {
  return (
    <>
      <HeaderTitle>
        Popular Movies
      </HeaderTitle>

      <HeaderSubtitle>
        Discover the latest and greatest films that everyone is watching right now
      </HeaderSubtitle>

      <Separator />

      <MovieList query={TmdbQueries.popularMovies()} />
    </>
  );
}

export default Popular;
