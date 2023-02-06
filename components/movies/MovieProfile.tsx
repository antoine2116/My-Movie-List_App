import { MovieDetails } from "../../models/MovieDetails";
import MovieHeader from "./MovieHeader";
import MovieCasting from "./MovieCasting";
import MovieAdditionalInfos from "./MovieAdditonalInfos";
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
              <div className="border-l border-gray-300 px-5">
                <MovieAdditionalInfos {...movie} />
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MovieProfile;