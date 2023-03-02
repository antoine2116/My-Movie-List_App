import { Genres } from "../../models/Genre";
import { TmdbClient } from "../clients/TmdbClient";

const getAllGenres = async () => {
  return await TmdbClient.get<Genres>('/genre/movie/list');
}

export const GenresService = {
  getAllGenres
};
