import axios, { AxiosResponse } from "axios";
import $api, { API_URL, API_URL_CLIENT } from "../http";
import { IUser } from "@/models/User";

export default class AuthService {
  static async login(phone: string, code: string): Promise<AxiosResponse<IUser>> {
    return axios.post<IUser>(
      `${API_URL_CLIENT}auth/login/`,
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
    return axios.get<IUser>(`${API_URL_CLIENT}profile/info/`, {
      withCredentials: true
    })
  }

  static async logout() {
    return $api.get("/auth/logout/");
  }
}
