import { IProductCart } from '@/stores/cart/cart.interface';

export const getSalePriceFromCart = (arr: IProductCart[]) => {
  let totalPrice = 0;

  arr.forEach(({ old_price, quantityInCart, price }) => {
    old_price = old_price ? old_price : price;
    totalPrice += quantityInCart ? (old_price / 100) * quantityInCart : old_price;
  });

  return totalPrice;
};
