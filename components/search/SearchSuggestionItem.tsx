import { Movie } from "../../models/Movie";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "../../common/helpers/imageHelper";

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
        <div className={`h-14 p-3 flex items-center hover:bg-gray-100 hover:cursor-pointer ${selected ? "bg-gray-100" : ""}`}>
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