import { API_URL } from "@/http";

export default class ProductService {
  static async getProductBySlug(slug: string) {
    return await fetch(`${API_URL}products/detail/${slug}/`, {
      next: {
        revalidate: 3600
      }
    }
    )
  }
}