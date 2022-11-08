export interface PaginationResponse<Data> {
  results: Data[];
  page: number;
  total_pages: number;
  total_results: number;
}