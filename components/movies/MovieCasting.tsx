import { useQuery } from "@tanstack/react-query";
import { APIQueries } from "../../common/APIQueries";
import { Cast } from "../../models/Cast";
import Carrousel from "../utils/Carrousel";
import Image from "next/image";

interface MovieCastingProps {
  movieId: number;
}

function MovieCasting({
  movieId
}: MovieCastingProps) {

  const { data, isLoading } = useQuery<Cast[]>(APIQueries.movieCasting(movieId));

  return (
    <div className="">
      <div className="text-2xl font-semibold text-black mb-3">
        Casting
      </div>
      <Carrousel loading={isLoading}>
        {
          data?.map((cast: Cast) => (
            <div key={cast.cast_id} style={{minWidth:'125px'}}>
              <Image
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                width={125}
                height={250}
                alt={cast.name}
                className="rounded-lg"
              />
              <div className="text-black text-sm font-semibold mt-1">
                {cast.name}
              </div>
              <div className="text-gray-400 text-sm">
                {cast.character}
              </div>
            </div>
          ))
        }
      </Carrousel>
    </div>
  )
}

export default MovieCasting;