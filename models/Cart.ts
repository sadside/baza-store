export interface IServerCart {
  product: Product
  quantity: number
}


export type Product = {
  id: number,
  name: string,
  price: number,
  image: string,
  slug: string,
  size: string,
  color: string,
}