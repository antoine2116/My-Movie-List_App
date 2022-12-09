import { getBackdropUrl, getImageUrl } from "../../common/helpers/ImageHelper";
import Image from "next/image";
import { Movie } from "../../models/Movie";
import { MovieDetails } from "../../models/MovieDetails";
import { convertToHours } from "../../common/helpers/Utils";
import { IoPlayCircleSharp } from "react-icons/io5";
import Modal from "../utils/Modal";
import { useState } from "react";
import VideoPlayer from "../utils/VideoPlayer";
import { getMovieTrailer } from "../../common/helpers/VideoHelper";
import { WatchProvider } from "../../models/WatchProvider";
import MovieHeader from "./MovieHeader";
import Carrousel from "../utils/Carrousel";
import MovieCasting from "./MovieCasting";

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
            <div className="flex">
              <MovieCasting movieId={movie.id} />
              <div className="min-w-[200px]">
                
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default MovieProfile;