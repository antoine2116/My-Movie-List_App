import { getUserToken } from '../auth/UserToken';
import queryString from 'query-string';


export interface InputError {
  field: string;
  error: string;
}
export class RestAPIError {
  statusCode: number;
  message: string;
  errors: InputError[];

  constructor(statusCode: number, message: string, errors?: InputError[]) {
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors || [];
  }
}

const handleResponse = async (res: Response) => {
  console.log(res);
  
  if (res.ok) {
    return await res.json();
  } else {
    const json = await res.json();
    console.log(json);
    
    if (json.error === undefined)
      throw new RestAPIError(res.status, "Something went wrong. Please try again later");
    else
      throw new RestAPIError(res.status, json.error.message, json.error.errors)
  }
}

const generateHeaders = () : HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  const token = getUserToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

export const RestAPIClient = {
  get: <T> (
    endpoint: string,
    params?: queryString.StringifiableRecord
  ): Promise<T> =>
    fetch(
      queryString.stringifyUrl({ 
        url: `${process.env.NEXT_PUBLIC_REST_API_URL}${endpoint}`, 
        query: params 
      }),
      {
        method: 'GET',
        headers: generateHeaders(),
      }
    ).then(handleResponse),

  post: <T> (
    endpoint: string,
    body: any,
  ): Promise<T> =>
    fetch(
      `${process.env.NEXT_PUBLIC_REST_API_URL}${endpoint}`, 
      {
        method: 'POST',
        headers: generateHeaders(),
        body: JSON.stringify(body),
      }
    ).then(handleResponse)
};
