import { TmdbQueries } from "../common/queries/TmdbQueries";
import MovieList from "../components/movies/MovieList";
import HeaderSubtitle from "../components/utils/HeaderSubtitle";
import HeaderTitle from "../components/utils/HeaderTitle";
import Separator from "../components/utils/Separator";

function TopRated() {
  return (
    <>
      <HeaderTitle>
        Top Rated Movies
      </HeaderTitle>

      <HeaderSubtitle>
      These movies have received the highest ratings and reviews
      </HeaderSubtitle>

      <Separator />

      <MovieList query={TmdbQueries.topRatedMovies()} />
    </>
  );
}

export default TopRated;
