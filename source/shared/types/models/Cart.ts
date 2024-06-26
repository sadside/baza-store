export interface IServerCart {
  product: Product;
  quantity: number;
  baza_loyalty?: number;
}

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  size: string;
  color: string;
  old_price?: number;
  // возможное кол-во для покупки
  quantity: number;
};
