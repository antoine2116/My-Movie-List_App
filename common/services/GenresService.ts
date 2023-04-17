import { Genres } from "../../models/Genre";
import { TmdbClient } from "../clients/TmdbClient";

const getAllGenres = async () => {
  return await TmdbClient.get<Genres>('/genre/movie/list');
}

const getGenreById = async (id: number) => {
  const genres = await getAllGenres();
  return genres.genres.find((genre) => genre.id === id);
}

export const GenresService = {
  getAllGenres,
  getGenreById
};
