import Image from "next/image";
import React from "react";
import { getImageUrl } from "../../common/helpers/ImageHelper";
import { Movie } from "../../models/movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [imageLoading, setImageLoading] = React.useState(true);

  const handleLoadImageComplete = (image: any) => {
    setImageLoading(false);
  }

  return (
    <div className="hover:cursor-pointer">
      <div className="relative">
        <Image 
          width={500} 
          height={750} 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title}
          className={`rounded-lg ${imageLoading ? "loading" : ""}`}
          onLoadingComplete={handleLoadImageComplete}
        />
      </div>
      <div>
        <div className={`font-semibold mt-2 ${imageLoading ? "loading" : ""}`}>
          {movie.title}
        </div>
        <div className={`text-sm text-gray-600 ${imageLoading ? "loading" : ""}`}>
          {movie.release_date}
        </div>
      </div>
    </div>
  )
}