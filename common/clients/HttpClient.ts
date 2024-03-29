import queryString from 'query-string';

export class HttpError {
  statusCode: number;
  message: string;
  
  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

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
    params?: queryString.StringifiableRecord
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params }), {
      method: 'GET'
    }).then(
      handleResponse
  ),
  post: <Data> (
    url: string,
    body: any
  ): Promise<Data> =>
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    }).then(
      handleResponse
    )
};