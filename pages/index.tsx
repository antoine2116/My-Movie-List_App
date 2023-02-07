import { APIQueries } from "../common/APIQueries";
import { HttpClient } from "../common/HttpClient";
import GenreList from "../components/genres/GenreList";
import MovieList from "../components/movies/MovieList";
import SearchBar from "../components/search/SearchBar";
import { Genre } from "../models/Genre";

function Home() {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">

        <div className="col-span-1">
          <GenreList />
        </div>

        <div className="col-span-5">
          <SearchBar />
          <MovieList query={APIQueries.popularMovies()} />
        </div>

      </div>
    </>
  )
}

export default Home;