import { Genres } from "../../models/Genre";
import { TmdbClient } from "../TmdbClient";

const getAllGenres = async () => {
  return await TmdbClient.get<Genres>('/genre/movie/list');
}

export const GenresService = {
  getAllGenres
};
