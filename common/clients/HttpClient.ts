import queryString from 'query-string';

export class HttpError {
  statusCode: number;
  message: string;
  
  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}

async function handleResponse(res: Response) {
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
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params })).then(
      handleResponse
  ),
  post: <Data> (
    url: string,
    body: any,
    params?: queryString.StringifiableRecord,
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params }), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }).then(
      handleResponse
    )
};