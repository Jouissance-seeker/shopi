interface IFetcherParams {
  endpoint: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  contentType: 'json' | 'formdata';
  body?: Record<string, any>;
  query?: Record<string, any>;
  path?: string;
}

export async function fetcher<T>(params: IFetcherParams): Promise<T> {
  const baseUrl = 'https://shopi.haashemi.dev/api/public';
  const headers: Record<string, string> = {};
  const method = params.method.toUpperCase();
  const contentType = params.contentType;
  let body: BodyInit | undefined;
  let query = '';
  if (params.query) {
    const searchParams = new URLSearchParams(
      params.query as Record<string, string>,
    ).toString();
    query = `?${searchParams}`;
  }
  if (contentType === 'json') {
    headers['Content-Type'] = 'application/json';
    if (params.body && method !== 'get') {
      body = JSON.stringify(params.body);
    }
  }
  const path = params.path ? `/${params.path}` : '';
  const res = await fetch(baseUrl + params.endpoint + path + query, {
    method,
    body,
    headers,
  });
  const data = await res.json();
  return data as T;
}
