import { useQuery } from "@tanstack/react-query";
import { APIQueries } from "../../common/APIQueries";
import { Cast } from "../../models/Cast";
import Carrousel from "../utils/Carrousel";
import CarrouselItem from "../utils/CarrouselItem";
import SectionTitle from "../utils/Titles";

interface MovieCastingProps {
  movieId: number;
}

function MovieCasting({
  movieId
}: MovieCastingProps) {

  const { data, isLoading } = useQuery<Cast[]>(APIQueries.movieCasting(movieId));

  return (
    <>
      <SectionTitle title="Casting" />
      
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
    </>
  )
}

export default MovieCasting;