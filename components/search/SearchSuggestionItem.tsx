import { Movie } from "../../models/movie";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../common/helpers/ImageHelper";

interface SearchSuggestionItemProps {
  movie: Movie;
}

function SearchSuggestionItem({ 
  movie 
}: SearchSuggestionItemProps) {
  return (
    <li>
      <Link href={`/movies/${movie.id}`}>
        <div className="h-14 p-3 flex items-center hover:bg-gray-100 hover:cursor-pointer">
          <Image
            width={30}
            height={50}
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className={`mx-3  aspect-[500/750]`}
          />
          <div className="mr-3">
            {movie.title}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SearchSuggestionItem;