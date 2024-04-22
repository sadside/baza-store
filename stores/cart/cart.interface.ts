export interface IProductCart {
  id: number;
  slug: string;
  quantityInCart: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  old_price?: number;
  quantityInShop: number;
}
