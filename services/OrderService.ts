import axios from 'axios';
import { API_URL_CLIENT } from '@shared/api/http/axios-instance';

export default class OrderServise {
  static async createOrder(data: any) {
    return axios.post(`${API_URL_CLIENT}orders/orders/`, data, {
      withCredentials: true,
    });
  }
}
