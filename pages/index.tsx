import { APIQueries } from "../common/APIQueries";
import { HttpClient } from "../common/HttpClient";
import GenreList from "../components/genres/GenreList";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";
import { Genre } from "../models/Genre";

function Home() {
  return (
    <>
      <SearchBar />
      <MovieList query={APIQueries.popularMovies()} />
    </>
  )
}

export default Home;