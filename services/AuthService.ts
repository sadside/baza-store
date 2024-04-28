import axios, { AxiosResponse } from 'axios';
import { IUser } from '@shared/types/models/User';
import { $api, $apiWithGuard, API_URL_CLIENT } from '@shared/api/http/axios-instance';

interface LoginResponse {
  user: IUser;
  access_token: string;
}

export default class AuthService {
  static async login(phone: string, code: string): Promise<AxiosResponse<LoginResponse>> {
    return $api.post<LoginResponse>(
      `auth/login/`,
      {
        phone,
        code,
      },
      {
        withCredentials: true,
      }
    );
  }

  static async getUser(): Promise<AxiosResponse<IUser>> {
    return $apiWithGuard.get<IUser>('profile/info/');
  }

  static async logout() {
    return $apiWithGuard.get(`auth/logout/`);
  }
}
