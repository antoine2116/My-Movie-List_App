import Link from "next/link";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";
import { UseInfiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";
import { getAllResults } from "../../common/helpers/Utils";
import Spinner from "../utils/Spinner";

interface MoviesCarrouselProps {
  query: UseInfiniteQueryOptions<PaginationResponse<Movie>>;
}

function MoviesCarrousel({ query }: MoviesCarrouselProps) {
  const { data, fetchNextPage, status } = useInfiniteQuery<PaginationResponse<Movie>>(query);

  return status === "loading" ? (
    <Spinner />
  ) : status === "error" ? (
    <p>Error !</p>
  ) : (
    <>
      <Carrousel onScrollEnd={() => fetchNextPage()}>
        {data &&
          getAllResults(data).map((movie: Movie) => (
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
    </>
  );
}

export default MoviesCarrousel;
