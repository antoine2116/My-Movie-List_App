import { useQuery } from "@tanstack/react-query";
import { TmdbQueries } from "../common/queries/TmdbQueries";
import MovieList from "../components/movies/MovieList";
import Carrousel from "../components/utils/Carrousel";
import CarrouselItem from "../components/utils/CarrouselItem";
import SectionTitle from "../components/utils/Titles";
import { Cast } from "../models/Cast";
import { Movie } from "../models/Movie";
import { PaginationResponse } from "../models/PaginationResponse";
import Link from "next/link";
import MoviesCarrousel from "../components/movies/MoviesCarrousel";
import Separator from "../components/utils/Separator";

function Home() {
  const { data: popularData, isLoading: popularIsLoading } = useQuery<PaginationResponse<Movie>>(TmdbQueries.popularMovies());
  const { data: topRatedData, isLoading: topRatedIsLoading } = useQuery<PaginationResponse<Movie>>(TmdbQueries.topRatedMovies());
  const { data: upcomingData, isLoading: upcomingIsLoading } = useQuery<PaginationResponse<Movie>>(TmdbQueries.upcomingMovies());

  return (
    <>
      {/* Pouplar */}
      <div className="flex justify-between items-center">
        <SectionTitle title="Popular" />
        <Link href="/popular" className="text-orange hover:text-orange-2">
          View all
        </Link>
      </div>

      <MoviesCarrousel
        movies={popularData}
        isLoading={popularIsLoading}
      />

      <Separator />

      {/* Top Rated */}
      <div className="flex justify-between items-center">
        <SectionTitle title="Top Rated" />
        <Link href="/top-rated" className="text-orange hover:text-orange-2">
          View all
        </Link>
      </div>

      <MoviesCarrousel
        movies={topRatedData}
        isLoading={topRatedIsLoading}
      />

      <Separator />

      {/* Upcoming */}
      <div className="flex justify-between items-center">
        <SectionTitle title="Upcoming" />
        <Link href="/upcoming" className="text-orange hover:text-orange-2">
          View all
        </Link>
      </div>

      <MoviesCarrousel
        movies={upcomingData}
        isLoading={upcomingIsLoading}
      />

    </>
  )
}

export default Home;