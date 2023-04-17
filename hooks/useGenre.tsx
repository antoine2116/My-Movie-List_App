import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getStringQueryParam } from "../common/helpers/QueryHelper";
import { TmdbQueries } from "../common/queries/TmdbQueries";
import { Genre } from "../models/Genre";
import { useQuery } from "@tanstack/react-query";

export const useGenre = () => {
  const [genre, setGenre] = useState<Genre | null>(null);


  return genre;
}