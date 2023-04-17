import { NextApiRequest, NextApiResponse } from "next";
import { GenresService } from "../../../../common/services/GenresService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  const genre = await GenresService.getGenreById(id);
  console.log(genre);
  
  res.status(200).json(genre);
}