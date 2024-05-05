import { formatManyofFull } from '@shared/utils/formatMany';
import { IProductCart } from '@/stores/cart/cart.interface';

export const getLkOrderPrice = (arr: any) => {
  let price = 0;
  arr.forEach((o: any) => (price += o.product.price * o.product.quantity));
  return formatManyofFull(price) + '₽';
};
