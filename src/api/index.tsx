import { ICar, ILoginUser } from "../interfaces";
import fetchData from "./api";
import { API_ENDPOINT } from "./endpoints";

export const API = Object.freeze({
  SIGN_IN: async (credentials: ILoginUser): Promise<any> =>
    await fetchData(API_ENDPOINT.signIn, { data: credentials }).then(
      (data) => data
    ),

  CAR_LIST: async ({ token }: any): Promise<ICar[]> =>
    await fetchData(API_ENDPOINT.cars, { token }).then((data) => data),

  FILTERS: async ({ token }: any): Promise<ICar[]> =>
    await fetchData(API_ENDPOINT.filters, { token }).then((data) => data),

  ORDER: async ({ token }: any, id?: number): Promise<any> =>
    await fetchData(API_ENDPOINT.order, { token, data: { id } }).then(
      (data) => data
    ),
});
