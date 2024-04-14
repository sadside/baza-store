import axios, { AxiosError } from "axios";

export const API_URL_CLIENT = "https://thebaza.ru/api/";
export const API_URL = "https://thebaza.ru/api/";

export const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = await axios.post(
          `${API_URL}auth/token/refresh/`,
          {},
          {
            withCredentials: true
          }
        );
        localStorage.setItem("token", response.data.access);
        return $api.request(originalRequest);
      } catch (e: any) {
        if (e.response.status === 400) {
          // userNotAuthorized();
        }
      }
    }
    throw error;
  }
);

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;

export default $api;
