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
    <li className="my-1" key={genre.id}>
      <Link
        href={`/genre/${genre.id}`}
        className={`block py-1.5 pl-3 cursor-pointer rounded-md ${active ? "text-white bg-blue-600 font-semibold" : "text-gray-900 bg-white"} hover:bg-blue-600 hover:text-white hover:font-semibold`}>
        {genre.name}
      </Link>
    </li>
  );
}

export default GenreLink;