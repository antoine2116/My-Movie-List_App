import { Movie } from "../../models/movie";
import Image from "next/image";
import { getImageUrl } from "../../common/helpers/imageHelper";
import React from "react";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const handleLoadComplete = (image: any) => {
    image.classList.remove("bg-blue-500");
  }

  return (
    <div className="hover:cursor-pointer">
      <div className="relative">
        <Image 
          width={500} 
          height={750} 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title}
          className="rounded-lg shadow-lg aspect-[500/750] loading"
          onLoadingComplete={handleLoadComplete}
        />
      </div>
      <div>
        <div className="font-semibold mt-2">
          {movie.title}
        </div>
        <div className="text-sm text-gray-600">
          {movie.release_date}
        </div>
      </div>
    </div>
  )
}