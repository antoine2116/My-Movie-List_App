import { NextApiRequest, NextApiResponse } from "next";
import { moviesService } from "../../../common/moviesService";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const movies = moviesService.getPopularMovies();
  res.status(200).json(movies);
}