import { ParsedUrlQuery } from "querystring"

export const getStringQueryParam = (
  param: string, 
  query: ParsedUrlQuery) => {
    const value = query[param];
    return typeof value === "string" ? value : "";
}