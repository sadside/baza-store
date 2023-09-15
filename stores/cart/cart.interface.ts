export interface IProductCart {
  id?: number;
  slug?: string;
  count?: number;
  name: string;
  price: number;
  image: string;
  size?: string;
  color?: string;
  old_price: number;
  server_count: number;
}
