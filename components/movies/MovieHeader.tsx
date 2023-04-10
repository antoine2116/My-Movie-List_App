import { useState } from "react";
import Image from "next/image";
import { IoPlayCircleSharp } from "react-icons/io5";
import { getBackdropUrl, getImageUrl } from "../../common/helpers/ImageHelper";
import { convertToHours, convertVoteAverage } from "../../common/helpers/Utils";
import { getMovieTrailerUrl } from "../../common/helpers/VideoHelper";
import { MovieDetails } from "../../models/MovieDetails";
import MovieProviders from "./MovieProviders";
import { useQuery } from "@tanstack/react-query";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { WatchProvider } from "../../models/WatchProvider";
import { useUI } from "../UIContext";

interface MovieHeaderProps {
  movie: MovieDetails;
}

function MovieHeader({
  movie
}: MovieHeaderProps) {
  const providers = useQuery<WatchProvider[]>(TmdbQueries.movieWatchProviders(movie.id));

  const { openModal, setModalView, setVideoUrl } = useUI();

  const trailerUrl = getMovieTrailerUrl(movie);

  const handlePlayButtonClick = () => {
    setModalView("VIDEO_VIEW")
    setVideoUrl(trailerUrl)
    openModal()
  }

  return (
    <>
      <div
        className="relative w-full h-[28rem] no-repeat bg-cover bg-center rounded-lg overflow-hidden mb-4"
        style={{ backgroundImage: `url(${getBackdropUrl(movie.backdrop_path)})` }}>
        <div className="h-full w-full bg-black/50">
          <div className="pl-4 pr-64 py-12 h-full">
            <div className="flex flex-row h-full">
              <div className="px-4 flex items-center">
                <div className="relative">
                  <Image
                    src={getImageUrl(movie.poster_path)}
                    alt={movie.title}
                    width={225}
                    height={330}
                    priority={true}
                    className="rounded-lg shadow-lg max-w-none"
                  />
                  {trailerUrl && (
                    <IoPlayCircleSharp
                      onClick={handlePlayButtonClick}
                      className="absolute m-auto inset-0 text-white opacity-90 h-16 w-16 hover:cursor-pointer hover:opacity-100"
                    />
                  )}
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <div className="flex text-4xl text-white font-bold">
                    {movie.title}
                    <div className="inline-block self-end text-2xl text-secondary font-semibold ml-2">
                      ({movie.release_date?.split("-")[0]})
                    </div>
                  </div>
                </div>
                <div className="text-lg text-secondary italic font-semibold">
                  {movie.tagline}
                </div>
                <div className="text-lg text-white font-semibold mb-2">
                  {convertToHours(movie.runtime)}
                </div>
                <div className="flex flex-row justify-between space-x-2 mb-3">
                  <div>
                    <div className="flex flex-row space-x-2 mb-3">
                      {movie.genres.map((genre) => (
                        <div key={genre.id} className="inline-flex justify-center px-2.5 py-0.5 bg-primary rounded-xl border border-accent-2 text-sm text-primary font-semibold shadow-xl">
                          {genre.name}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row space-x-2 mb-2">
                      <div className="bg-primary border border-accent-2 rounded-full shadow-xl h-10 w-10 flex justify-center items-center">
                        <div className="text-center text-primary font-semibold">
                          {convertVoteAverage(movie.vote_average)}
                          <sup className="font-bold">%</sup>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-lg text-white font-semibold">
                          Users rating
                        </div>
                      </div>
                    </div>
                  </div>
                  {providers.data && (
                    <MovieProviders providers={providers.data} />
                  )}
                </div>
                <div className="text-lg text-white font-semibold">
                  Overview
                </div>
                <div className="text-white text-justify">
                  {movie.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieHeader;