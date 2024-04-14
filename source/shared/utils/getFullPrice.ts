import { IProductCart } from "@/stores/cart/cart.interface";

export const getPriceFromCart = (arr: IProductCart[]) => {
  let totalPrice = 0;

  arr.forEach(({ price, count }) => {
    totalPrice += count ? (price / 100) * count : price;
  });

  return totalPrice;
};