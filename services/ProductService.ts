import { API_URL } from "@/http";
import { IFullProduct } from "@/models/Product";

export default class ProductService {
  static async getProductById(id: string) {
    return await fetch(`${API_URL}products/product/${id}/`)

  }
}