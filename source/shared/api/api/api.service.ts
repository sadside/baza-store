import { removeFromStorage, saveTokenStorage } from '../lib/api.helpers';
import $api from '@shared/api/http/axios-instance';

interface IAuthResponse {
  access: string;
}

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

class ApiService {
  async getNewTokens() {
    const response = await $api.post<IAuthResponse>('auth/token/refresh/');

    if (response.data.access) saveTokenStorage(response.data.access);

    return response;
  }
}

export default new ApiService();
