import queryString from 'query-string';

export class HttpError {
  statusCode: number;
  message: string;
  
  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

const generateHeaders = (token?: string) : HeadersInit => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const handleResponse = async (res: Response) => {
  if (res.ok) {
    return await res.json();
  } else {
    let error = res.statusText;

    try {
      const errorJson = await res.json();
      error = errorJson.error;
    } catch {}

    throw new HttpError(res.status, error)
  }
}

export const HttpClient = {
  get: <Data> (
    url: string,
    params?: queryString.StringifiableRecord,
    token?: string
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params }), {
      method: 'GET',
      headers: generateHeaders(token),
    }).then(
      handleResponse
  ),
  post: <Data> (
    url: string,
    body: any,
    params?: queryString.StringifiableRecord,
    token?: string
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params }), {
      method: 'POST',
      headers: generateHeaders(token),
      body: JSON.stringify(body),
    }).then(
      handleResponse
    )
};