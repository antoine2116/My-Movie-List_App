import Link from "next/link";
import { Genre } from "../../models/Genre";

interface GenreLinkProps {
  genre: Genre;
  active: boolean;
}

function GenreLink({
  genre,
  active
} : GenreLinkProps) {
  return (
    <li key={genre.id}>
      <Link
        href={`/genre/${genre.id}`}
        className={`block pl-3 cursor-pointer text-sm text-gray-900 hover:text-orange-600`}>
        {genre.name}
      </Link>
    </li>
  );
}

export default GenreLink;