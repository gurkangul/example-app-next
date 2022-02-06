import { IEnpoint, IRequestData } from "../interfaces";

export default async function fetchData(api: IEnpoint, request?: IRequestData) {
  const customHeaders = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "User-Agent": "*",
  });
  if (request?.token) customHeaders.append("token", `${request?.token}`);

  let response = await fetch(api.url, {
    method: api.method,
    headers: customHeaders,
    body: JSON.stringify(request?.data),
  });

  return response.json();
}
