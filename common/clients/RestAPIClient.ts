import { HttpClient } from './HttpClient';
import queryString from 'query-string';

export const RestAPIClient = {
  get: async <T> (
    endpoint: string,
    params?: queryString.StringifiableRecord,
  ): Promise<T> => {
    const response = await HttpClient.get<T>(
      `${process.env.NEXT_PUBLIC_REST_API_URL}${endpoint}`,
      { ...params },
    );
    return response;
  },
  post: async<T> (
    endpoint: string,
    body: any,
    params?: queryString.StringifiableRecord,
  ): Promise<T> => {
    const response = await HttpClient.post<T>(
      `${process.env.NEXT_PUBLIC_REST_API_URL}${endpoint}`,
      body,
      { ...params },
    );
    return response;  
  },
};