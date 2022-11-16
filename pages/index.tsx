import { APIQueries } from "../common/APIQueries";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";

function Home() {
  return (
    <>
      <SearchBar />
      <MovieList query={APIQueries.popularMovies()} />
    </>
  )
}

export default Home; 