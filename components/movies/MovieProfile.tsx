import { getImageUrl } from "../../common/helpers/ImageHelper";
import Image from "next/image";
import { Movie } from "../../models/Movie";
import { MovieDetails } from "../../models/MovieDetails";

interface MovieProfilProps {
  movie?: MovieDetails;
}

function MovieProfile({ movie }: MovieProfilProps) {
  return (
    <>
      {
        movie && (
          <div className="flex flex-row">
            <div>
              <Image
                className="rounded-lg max-w-none"
                width={250}
                height={375}
                src={getImageUrl(movie.poster_path)}
                alt={movie.title}
              />
            </div>
            <div className="pl-4">
              <div className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
                {movie.title}
              </div>
              <div className="mb-3 text-xl font-semibold text-gray-900">
                {movie.release_date}
              </div>
              <div className="text-gray-800">
                {movie.overview}
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MovieProfile;