import { useQuery } from "@tanstack/react-query";
import { APIQueries } from "../../common/APIQueries";
import { Genre, Genres } from "../../models/Genre"
import SectionTitle from "../utils/Titles";
import { IoAlbumsOutline } from "react-icons/io5";
import Link from "next/link";
import GenreLink from "./GenreLink ";

interface GenreListProps {
  activeId?: number;
}

export default function GenreList({
  activeId,
} : GenreListProps) {

  const { data } = useQuery<Genres>(APIQueries.genres());

  return (
    <>
      <div className="flex items-center">
        {/* TODO : icon should be passed as a prop */}
        <IoAlbumsOutline className="text-2xl mr-3 mb-1" />
        <SectionTitle title="Genres" />
      </div>
      <ul>
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
    </>
  )
} 