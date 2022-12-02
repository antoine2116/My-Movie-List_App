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

interface MovieProfilProps {
  movie?: MovieDetails;
}

function MovieProfile({ movie }: MovieProfilProps) {

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpened(true);
  }
  
  const handleCloseModal = () => {
    setIsModalOpened(false);
  }

  return (
    <>
      {
        movie && (
          <div>
            <div
              className="relative w-full h-[28rem] no-repeat bg-cover bg-center"
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
                        <IoPlayCircleSharp
                          onClick={handlePlayButtonClick}
                          className="absolute m-auto inset-0 text-white opacity-90 h-16 w-16 hover:cursor-pointer hover:opacity-100"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <div className="flex text-4xl text-white font-bold">
                          {movie.title}
                          <div className="inline-block self-end text-2xl text-slate-200 font-semibold ml-2">
                            ({movie.release_date?.split("-")[0]})
                          </div>
                        </div>
                      </div>
                      <div className="text-lg text-slate-200 italic font-semibold">
                        {movie.tagline}
                      </div>
                      <div className="text-lg text-white font-semibold mb-2">
                        {convertToHours(movie.runtime)}
                      </div>
                      <div className="flex flex-row space-x-2 mb-3">
                        {movie.genres.map((genre) => (
                          <div key={genre.id} className="bg-white rounded-2xl border border-gray-200 text-sm text-black font-semibold shadow-xl px-3 py-0.5">
                            {genre.name}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row space-x-2 mb-2">
                        <div className="bg-white border border-gray-200 rounded-full shadow-xl h-10 w-10 flex justify-center items-center">
                          <div className="text-center text-black font-semibold">
                            52
                            <sup className="font-bold">%</sup>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="text-lg text-white font-semibold">
                            Users rating
                          </div>
                        </div>
                      </div>
                      <div className="text-lg text-white font-semibold">
                        Overview
                      </div>
                      <div className="text-white">
                        {movie.overview}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Modal
              isOpened={isModalOpened}
              close={handleCloseModal}
            >
              <VideoPlayer video={getMovieTrailer(movie)} />
            </Modal>
          </div>
        )
      }
    </>
  )
}

export default MovieProfile;