import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";
import SectionTitle from "../utils/Titles";

interface MovieRecommendationsProps {
  movieId: number;
}

function MovieRecommendations({
  movieId
} : MovieRecommendationsProps) {
  const { data, isLoading } = useQuery<PaginationResponse<Movie>>(TmdbQueries.movieRecommendations(movieId));

  return (
    <>
      <SectionTitle title="Recommendations" />
      
      <Carrousel loading={isLoading}>
        {
          data?.results.map((movie: Movie) => (
            <Link
              key={movie.id}
              href={`/movie/${movie.id}`}
            >
              <CarrouselItem
                image_path={movie.poster_path}
                title={movie.title}
              />
            </Link>
          ))
        }
      </Carrousel>
    </>
  )
}

export default MovieRecommendations;