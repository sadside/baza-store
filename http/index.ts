import axios from "axios";


export const API_URL_CLIENT = "http://thebaza.ru:8000/api/";
export const API_URL = "http://127.0.0.1:8000/api/";
// export const API_URL = "http://127.0.0.1:8000/api/";
export const API = "http://thebaza.ru:8000";
// export const API = "http://127.0.0.1:8000";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
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
            withCredentials: true,
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

export default $api;
