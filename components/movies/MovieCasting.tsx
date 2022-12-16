import { useQuery } from "@tanstack/react-query";
import { APIQueries } from "../../common/APIQueries";
import { Cast } from "../../models/Cast";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";

interface MovieCastingProps {
  movieId: number;
}

function MovieCasting({
  movieId
}: MovieCastingProps) {

  const { data, isLoading } = useQuery<Cast[]>(APIQueries.movieCasting(movieId));

  return (
    <div className="mb-3">
      <div className="text-2xl font-semibold text-black mb-2">
        Casting
      </div>
      <Carrousel loading={isLoading}>
        {
          data?.map((cast: Cast) => (
            <CarrouselItem
              key={cast.cast_id}
              image_path={cast.profile_path}
              title={cast.name}
              subtitle={cast.character}
            />
          ))
        }
      </Carrousel>
    </div>
  )
}

export default MovieCasting;