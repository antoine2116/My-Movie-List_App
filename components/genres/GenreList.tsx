import { useQuery } from "@tanstack/react-query";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { Genre, Genres } from "../../models/Genre"
import GenreLink from "./GenreLink ";

interface GenreListProps {
  activeId?: number;
}

export default function GenreList({
  activeId,
} : GenreListProps) {

  const { data } = useQuery<Genres>(TmdbQueries.genres());

  return (
    <li>
      <h5 className="flex items-center text-lg mb-2">
        <div className="font-semibold text-black">
          Genres
        </div>
      </h5>
      <ul className="space-y-3">
        {
          data?.genres.map((genre: Genre) => (
            <GenreLink
              key={genre.id}
              genre={genre}
              active={activeId == genre.id}
            />
          ))
        }
      </ul>
    </li>
  )
} 