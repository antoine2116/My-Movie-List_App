import Link from "next/link";
import { Genre } from "../../models/Genre";

interface GenreLinkProps {
  genre: Genre;
  active: boolean;
}

function GenreLink({
  genre,
  active
}: GenreLinkProps) {
  return (
    <li key={genre.id}>
      <Link
        href={`/genre/${genre.id}`}
        className={`block pl-3 cursor-pointer text-sm text-accent-7 hover:text-orange `}>
        {genre.name}
      </Link>
    </li>
  );
}

export default GenreLink;