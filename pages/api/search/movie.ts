import { NextApiRequest, NextApiResponse } from "next";
import { SearchService } from "../../../common/services/SearchService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const page: number = Number(req.query.page);
  const query: string = String(req.query.query);

  const movies = await SearchService.searchMovies(page, query);
  
  res.status(200).json(movies);
}