import { useRouter } from "next/router";
import { TmdbQueries } from "../../common/queries/TmdbQueries";
import { getStringQueryParam } from "../../common/helpers/QueryHelper";
import MovieList from "../../components/movies/MovieList";
import HeaderTitle from "../../components/utils/HeaderTitle";
import Separator from "../../components/utils/Separator";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../../models/Genre";

function Genre() {
  const router = useRouter();
  const id = Number(getStringQueryParam("id", router.query));
  
  const { data, status } = useQuery<Genre>(TmdbQueries.genreById(id));

  if (status === "loading") {
    return null;
  }

  return (
    <>
      <HeaderTitle>{data?.name}</HeaderTitle>

      <Separator />

      <MovieList query={TmdbQueries.moviesByGenre(id)} />
    </>
  );
}

export default Genre;
