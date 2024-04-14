import axios, { AxiosResponse } from "axios";
import { IUser } from "@shared/types/models/User";
import { API_URL_CLIENT } from "@/source/shared/api/http/custom-instance";

export default class AuthService {
  static async login(
    phone: string,
    code: string
  ): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(
      `${API_URL_CLIENT}auth/login/`,
      {
        phone,
        code
      },
      {
        withCredentials: true
      }
    );
  }

  static async getUser(): Promise<AxiosResponse<IUser>> {
    return axios.get<IUser>(`${API_URL_CLIENT}profile/info/`, {
      withCredentials: true
    });
  }

  static async logout() {
    return axios.get(`${API_URL_CLIENT}auth/logout/`, {
      withCredentials: true
    });
  }
}
