import { httpClient } from './HttpClient';
import queryString from 'query-string';

export const tmdbClient = {
  get: async <T> (
    endpoint: string,
    params?: queryString.StringifiableRecord,
  ): Promise<T> => {
    const response = await httpClient.get<T>(
      `${process.env.TMDB_URL}${endpoint}`,
      { ...params, api_key: process.env.TMDB_TOKEN },
    );
    return response;
  }
};