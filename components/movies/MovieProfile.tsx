import { MovieDetails } from "../../models/MovieDetails";
import MovieHeader from "./MovieHeader";
import MovieCasting from "./MovieCasting";
import MovieAdditionalInfos from "./MovieAdditonalInfos";

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

            <div className="grid grid-cols-4 gap-x-4">
              <div className="col-span-3 col-start-1">
                <MovieCasting movieId={movie.id} />
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