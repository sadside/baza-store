import { IServerCart } from "./Cart";

export interface IOrderPaymentData {
  sale: number;
  price: number;
  delivery?: {
    price: number;
    period_min: number;
    period_maxs: number;
  };
}

export interface IOrder {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  receiving: string;
  payment_type: string;
  city: string | null;
  street: string | null;
  house: string | null;
  frame: string | null;
  apartment: string | null;
  is_paid: boolean;
  products: IServerCart[];
  order_date: string;
  status: string;
  receiving_date: string;
}
