import { NextApiRequest, NextApiResponse } from "next";
import { searchService } from "../../../common/services/searchService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const page: number = Number(req.query.page);
  const query: string = String(req.query.query);

  const movies = await searchService.searchMovies(page, query);
  
  res.status(200).json(movies);
}