import { IOrder } from "@/models/Order";

export const getLoyaltyCount = (order: IOrder) => {
  let count = 0

  order.products.forEach(product => {
    count += product.baza_loyalty || 0 
  });

  return count
}