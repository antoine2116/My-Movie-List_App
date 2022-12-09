import { NextApiRequest, NextApiResponse } from "next";
import { MoviesService } from "../../../../common/services/MoviesService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  const movieDetails = await MoviesService.getMovieCasting(id);
  res.status(200).json(movieDetails);
}