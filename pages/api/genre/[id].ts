import { NextApiRequest, NextApiResponse } from "next";
import { MoviesService } from "../../../common/services/MoviesService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  const page = Number(req.query.page);
  const movies = await MoviesService.getMoviesByGenre(id, page);
  res.status(200).json(movies);
}