import { notAuthApi } from "@/api/api";
import { API_URL } from "@/http";
import axios from "axios";

export default class CategoriesService {
  static async getMenuContent() {
    return notAuthApi.get(`api/menu-content/`)
  }
}