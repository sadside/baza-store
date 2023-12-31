import { notAuthApi } from "@/api/api";
import { API_URL } from "@/http";
import axios from "axios";

export default class CategoriesService {
  static async getMenuContent() {
    return notAuthApi.get(`api/menu-content/`)
  }

  static async getProductsByCategory(category: string) {
    return fetch(`${API_URL}products/products/?slug=${category}`)
  }
}