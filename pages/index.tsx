import { APIQueries } from "../common/APIQueries";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/utils/search-bar";

function Home() {
  return (
    <>
      <SearchBar />
      <MovieList query={APIQueries.popularMovies()} />
    </>
  )
}

export default Home; 