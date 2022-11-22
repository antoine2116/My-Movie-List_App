import { HttpClient } from './HttpClient';
import queryString from 'query-string';

export const TmdbClient = {
  get: async <T> (
    endpoint: string,
    params?: queryString.StringifiableRecord,
  ): Promise<T> => {
    const response = await HttpClient.get<T>(
      `${process.env.TMDB_URL}${endpoint}`,
      { ...params, api_key: process.env.TMDB_TOKEN },
    );
    return response;
  }
};