import { API_URL_CLIENT } from "@/http";
import axios from "axios";

export default class OrderServise {
  static async createOrder(data: any) {
    return axios.post(`${API_URL_CLIENT}orders/orders/`, data, {
      withCredentials: true
    })
  }
}