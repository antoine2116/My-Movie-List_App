import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { APIQueries } from "../../common/APIQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import MovieProfile from "../../components/movies/MovieProfile";
import Spinner from "../../components/utils/spinner";
import { MovieDetails } from "../../models/MovieDetails";
import { WatchProvider } from "../../models/WatchProvider";

function Movie() {
  const router = useRouter()
  const id = getStringQueryParam("id", router.query);
  
  const movie = useQuery<MovieDetails>(APIQueries.movieDetails(id));

  if (movie.isLoading) {
    return <Spinner />
  }

  return (
    <MovieProfile movie={movie.data} />
  )
}

export default Movie;