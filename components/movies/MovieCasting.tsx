import { useQuery } from "@tanstack/react-query";
import { APIQueries } from "../../common/APIQueries";
import { Cast } from "../../models/Cast";
import Carrousel from "../utils/Carrousel";
import Image from "next/image";
import { getImageUrl } from "../../common/helpers/ImageHelper";

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
            <div key={cast.cast_id} className="min-w-[8rem] min-h-[12rem]">
              <Image
                src={getImageUrl(cast.profile_path)}
                width={500}
                height={750}
                alt={cast.name}
                className="rounded-lg"
              />
              <div className="text-black text-sm font-semibold mt-1">
                {cast.name}
              </div>
              <div className="text-gray-400 text-xs">
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