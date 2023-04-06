import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getImageUrl } from "../../common/helpers/ImageHelper";
import { Movie } from "../../models/Movie";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [imageLoading, setImageLoading] = React.useState(true);

  const handleLoadImageComplete = () => {
    setImageLoading(false);
  }

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="relative">
        <Image 
          width={500} 
          height={750} 
          src={getImageUrl(movie.poster_path)} 
          alt={movie.title}
          className={`rounded-lg object-cover block w-full h-auto aspect-[2/3] ${imageLoading ? "loading" : ""}`}
          onLoadingComplete={handleLoadImageComplete}
        />
      </div>
      <div>
        <div className={`font-semibold mt-2 max-w-full truncate ${imageLoading ? "loading" : ""}`}>
          {movie.title}
        </div>
        <div className={`text-sm text-gray-600 ${imageLoading ? "loading" : ""}`}>
          {movie.release_date}
        </div>
      </div>
    </Link>
  )
}