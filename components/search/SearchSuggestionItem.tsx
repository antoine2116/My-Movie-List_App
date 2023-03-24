import { Movie } from "../../models/Movie";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../common/helpers/ImageHelper";

interface SearchSuggestionItemProps {
  movie: Movie;
  selected: boolean;
}

function SearchSuggestionItem({ 
  movie,
  selected
}: SearchSuggestionItemProps) {
  return (
    <li>
      <Link href={`/movie/${movie.id}`}>
        <div className={`h-12 p-2 flex items-center text-sm hover:bg-gray-100 hover:cursor-pointer ${selected ? "bg-gray-100" : ""}`}>
          <Image
            width={50}
            height={75}
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className={`ml-2 mr-4 h-9 w-9 rounded-full`}
          />
          <div>
            {movie.title}
          </div>
        </div>
      </Link>
    </li>
  )
}

export default SearchSuggestionItem;