import { InfiniteData } from "@tanstack/react-query"
import { PaginationResponse } from "../../models/PaginationResponse"

export function getAllResults<T> (data : InfiniteData<PaginationResponse<T>>): T[] {
  console.log(data);  
  
  return data?.pages?.flatMap((page) => page.results) ?? [];
}