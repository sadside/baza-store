import { API_URL } from "@/http";
import { IFullProduct } from "@/models/Product";

export default class ProductService {
  static async getProductBySlug(slug: string) {
    return await fetch(`${API_URL}products/detail/${slug}/`, {
      cache: 'no-store'
    })
  }
}