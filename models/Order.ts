import { number, string } from "yup"
import { IServerCart } from "./Cart"

export interface IOrderPaymentData {
  sale: number,
  price: number
}


export interface IOrder {
    id: number,
    name: string,
    surname: string,
    email: string,
    phone: string,
    receiving: string,
    payment_type: string,
    city: string | null,
    street: string | null,
    house: string | null,
    frame: string | null,
    apartment: string | null,
    is_paid: boolean,
    products: IServerCart[]
}