import { IOrder } from "@/models/Order";

export const getOrderPrice = (order: IOrder) => {
  let totatPrice = 0

  order.products.forEach((product) => {
    totatPrice += (product.product.price * product.product.quantity) / 100
  })

  return totatPrice
}