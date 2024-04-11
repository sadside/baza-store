import { IProductCart } from "@/stores/cart/cart.interface";

export const getSalePriceFromCart = (arr: IProductCart[]) => {
  let totalPrice = 0;

  arr.forEach(({ old_price, count }) => {
    totalPrice += count ? (old_price / 100) * count : old_price;
  });

  return totalPrice;
};