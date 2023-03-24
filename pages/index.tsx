import { TmdbQueries } from "../common/queries/TmdbQueries";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";

function Home() {
  return (
    <>
      <MovieList query={TmdbQueries.popularMovies()} />
    </>
  )
}

export default Home;