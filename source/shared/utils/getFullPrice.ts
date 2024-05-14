import { IProductCart } from "@/stores/cart/cart.interface";

export const getPriceFromCart = (arr: IProductCart[]) => {
  let totalPrice = 0;

  arr.forEach(({ price, quantityInCart }) => {
    totalPrice += quantityInCart ? (price / 100) * quantityInCart : price;
  });

  return totalPrice;
};
