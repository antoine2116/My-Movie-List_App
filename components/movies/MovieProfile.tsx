import { MovieDetails } from "../../models/MovieDetails";
import MovieHeader from "./MovieHeader";
import MovieCasting from "./MovieCasting";
import MovieRecommendations from "./MovieRecommendations";

interface MovieProfilProps {
  movie?: MovieDetails;
}

function MovieProfile({
  movie
}: MovieProfilProps) {
  return (
    <>
      {
        movie && (
          <div>
            <MovieHeader movie={movie} />
            <div className="grid grid-cols-5 gap-x-8">
              <div className="col-span-4 col-start-1">
                <MovieCasting movieId={movie.id} />
                <MovieRecommendations movieId={movie.id} />
              </div>
              <div className="border-l border-accent-2 px-5">
                <div className="text-primary font-semibold">
                  Release Date
                </div>
                <div className="text-secondary text-sm mb-3">
                  {movie.release_date}
                </div>
                <div className="text-primary font-semibold">
                  Original Language
                </div>
                <div className="text-secondary text-sm mb-3">
                  {movie.original_language}
                </div>
                <div className="text-primary font-semibold">
                  Budget
                </div>
                <div className="text-secondary text-sm mb-3">
                  $ {movie.budget?.toLocaleString()}
                </div>
                <div className="text-primary font-semibold">
                  Revenue
                </div>
                <div className="text-secondary text-sm mb-3">
                  $ {movie.revenue?.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MovieProfile;