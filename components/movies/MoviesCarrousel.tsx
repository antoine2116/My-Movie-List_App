import Link from "next/link";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";

interface MoviesCarrouselProps {
  movies: PaginationResponse<Movie> | undefined;
  isLoading: boolean;
}

function MoviesCarrousel({
  movies,
  isLoading 
}: MoviesCarrouselProps) {
  return (
    <Carrousel loading={isLoading}>
      {movies?.results.map((movie: Movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
        >
          <CarrouselItem
            image_path={movie.poster_path}
            title={movie.title}
            subtitle={movie.release_date}
          />
        </Link>
      ))}
    </Carrousel>
  );
}

export default MoviesCarrousel;