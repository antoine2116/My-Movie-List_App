import { NextApiRequest, NextApiResponse } from "next";
import { GenresService } from "../../../../common/services/GenresService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const genres = await GenresService.getAllGenres();
  res.status(200).json(genres);
}