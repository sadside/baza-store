import { IProductCart } from './cart.interface';
import { toast } from 'react-toastify';

const createListWithNewProduct = (products: IProductCart[], product: IProductCart) => {
  if (products.length) {
    products = products.map((item) => {
      if (product.id === item.id && product.size === item.size) {
        return { ...item, count: item.count ? item.count + 1 : 1 };
      } else {
        return { ...item, count: item.count ? item.count : 1 };
      }
    });

    let flag = true;

    products.forEach((item) => {
      if (item.id === product.id && product.size === item.size) flag = false;
    });

    if (flag) products.push({ ...product, count: 1 });
    toast.success('Товар добавлен в корзину!');

    return products;
  } else {
    toast.success('Товар добавлен в корзину!');
    return [{ ...product, count: 1 }];
  }
};

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

const incrementProductCount = ({ cart }: { cart: IProductCart[] }, { id, size }: IProductCart) => {
  return cart.map((product) => {
    if (product.id === id && product.size == size) {
      return {
        ...product,
        count: product.count ? product.count + 1 : 1,
      };
    }
    return product;
  });
};

const decrementProductCount = ({ cart }: { cart: IProductCart[] }, { id, size }: IProductCart) => {
  let res = cart.map((product) => {
    if (product.id === id && product.size == size) {
      if (product.count && product.count - 1 == 0) return null;

      return {
        ...product,
        count: product.count ? product.count - 1 : 1,
      };
    }
    return product;
  });

  res = res.filter((item) => !!item);
  return res;
};

export { createListWithNewProduct, incrementProductCount, decrementProductCount };
