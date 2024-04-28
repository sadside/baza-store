import { IProductCart } from './cart.interface';

export const normalizeProductCount =
  () =>
  (products: IProductCart[], product: IProductCart): IProductCart[] => {
    products = products.map((item) => {
      if (product.id === item.id && product.size === item.size) {
        return { ...item, count: item.quantityInShop };
      } else {
        return item;
      }
    });

    return products;
  };
