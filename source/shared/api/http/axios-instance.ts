import axios, { AxiosError, CreateAxiosDefaults } from 'axios';
import { getAccessToken, getContentType, removeFromStorage } from '@shared/api/lib/api.helpers';
import apiService from '@shared/api/api/api.service';

export const API_URL_CLIENT = 'http://thebaza.ru/api/';
export const API_URL = 'http://server:8000/api/';

// export const API_URL_CLIENT = 'http://127.0.0.1:8000/api/';
// export const API_URL = 'http://127.0.0.1:8000/api/';

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL_CLIENT,
  headers: getContentType(),
  withCredentials: true,
};

export const $api = axios.create(axiosOptions);

export const $apiWithGuard = axios.create(axiosOptions);

$apiWithGuard.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) config.headers.Authorization = `Token ${accessToken}`;

  return config;
});

$apiWithGuard.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error?.response?.status === 401 && error.config) {
      removeFromStorage();
    }

    throw error;
  }
);

export type ErrorType<Error> = AxiosError<Error>;

export type BodyType<BodyData> = BodyData;

export default $api;
