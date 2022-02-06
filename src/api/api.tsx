import { IEnpoint, IRequestData } from "../interfaces";

export default async function fetchData(api: IEnpoint, request?: IRequestData) {
  const customHeaders = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  if (request?.token) customHeaders.append("token", `${request?.token}`);

  let response = await fetch(api.url, {
    method: api.method,
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: customHeaders,
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(request?.data),
  });

  return response.json();
}
