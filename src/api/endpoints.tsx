const BASE_URL = process.env.API_URL || "https://ylc-fr-case.herokuapp.com/api";

export const API_ENDPOINT = Object.freeze({
  signUp: {
    url: `${BASE_URL}/auth`,
    method: "POST",
  },
  signIn: {
    url: `${BASE_URL}/auth`,
    method: "POST",
  },
  cars: {
    url: `${BASE_URL}/cars`,
    method: "GET",
  },
  order: {
    url: `${BASE_URL}/order`,
    method: "POST",
  },
  filters: {
    url: `${BASE_URL}/filters`,
    method: "GET",
  },
});
