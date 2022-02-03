import fetchData from "./api";
import { API_ENDPOINT } from "./endpoints";
import { ICar, ILoginUser, ILoginUserResponse } from "../interfaces";

export const API = Object.freeze({
  SIGN_IN: async (credentials: ILoginUser): Promise<ILoginUserResponse> =>
    await fetchData(API_ENDPOINT.signIn, { data: credentials }).then(
      (data) => data
    ),

  CAR_LIST: async ({ token }: any): Promise<ICar[]> =>
    await fetchData(API_ENDPOINT.cars, { token }).then((data) => data),

  FILTERS: async ({ token }: any): Promise<ICar[]> =>
    await fetchData(API_ENDPOINT.filters, { token }).then((data) => data),
});
