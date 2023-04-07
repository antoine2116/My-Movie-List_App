import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Movie } from "../../models/Movie";
import { PaginationResponse } from "../../models/PaginationResponse";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";
import SectionTitle from "../utils/Titles";
import MoviesCarrousel from "./MoviesCarrousel";

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
      <MoviesCarrousel
        movies={data}
        isLoading={isLoading}
      />
    </>
  )
}

export default MovieRecommendations;