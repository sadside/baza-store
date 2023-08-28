export interface IServerCart {
  product: {
    id: number,
    name: string,
    description: string,
    price: number,
    images: {
      color: string,
      images: string[],
    }
    category: string,
    path: {
      id: number,
      name: string
    }
    full_path: string,
    slug_path: string
    size: string
    color: string
  }
  quantity: number
}