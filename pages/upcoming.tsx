import { TmdbQueries } from "../common/queries/TmdbQueries";
import MovieList from "../components/movies/MovieList";
import HeaderSubtitle from "../components/utils/HeaderSubtitle";
import HeaderTitle from "../components/utils/HeaderTitle";
import Separator from "../components/utils/Separator";

function Upcoming() {
  return (
    <>
      <HeaderTitle>
        Upcoming Movies
      </HeaderTitle>

      <HeaderSubtitle>
        Discover the movies that will be hitting theaters and streaming services soon
      </HeaderSubtitle>

      <Separator />

      <MovieList query={TmdbQueries.upcomingMovies()} />
    </>
  );
}

export default Upcoming;
