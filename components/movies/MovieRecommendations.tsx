import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { APIQueries } from "../../common/APIQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";

interface MovieRecommendationsProps {
  movieId: number;
}

function MovieRecommendations({
  movieId
} : MovieRecommendationsProps) {
  const { data, isLoading } = useQuery<PaginationResponse<Movie>>(APIQueries.movieRecommendations(movieId));

  return (
    <div className="mb-3">
      <div className="text-2xl font-semibold text-black mb-2">
        Recommendations
      </div>
      <Carrousel loading={isLoading}>
        {
          data?.results.map((movie: Movie) => (
            <Link
              href={`/movie/${movie.id}`} 
            >
              <CarrouselItem
                key={movie.id}
                image_path={movie.poster_path}
                title={movie.title}
              />
            </Link>
          ))
        }
      </Carrousel>
    </div>
  )
}

export default MovieRecommendations;