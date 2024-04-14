import { miniOrder } from "@/components/orders/Orders";

type ret = {
  price: number,
  count: number
}
export const getCountPrice = (arr: miniOrder[]): ret => {
  let price: number = 0;
  let count: number = 0;
  arr.forEach(o => {
      price += o.price * o.count;
      count += o.count;
    }
  );
  return { price, count };
};