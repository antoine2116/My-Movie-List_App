import queryString from 'query-string';

export const HttpClient = {
  get: <Data> (
    url: string,
    params?: queryString.StringifiableRecord,
  ): Promise<Data> =>
    fetch(queryString.stringifyUrl({ url, query: params })).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        let message = res.statusText;
        try {
          const errorJson = res.json();
          console.log(errorJson);
        } catch {
          console.log("Error parsing error response");
        }
      }
    }
  )
};