"use client";

import React, { useEffect } from "react";

import s from "./Orders.module.scss";
import OrderItem from "../orderItem/OrderItem";
import { useUnit } from "effector-react";
import { $orders, getOrders } from "@/stores/order/init";
export type miniOrder = {
  name: string;
  id: number;
  count: number;
  price: number;
  img: string;
};
export type OrderType = {
  date: {
    by: string;
    of: string;
  };
  id: number;
  state: string;
  baza: string;
  children: miniOrder[];
};
const Orders = () => {
  const orders = useUnit($orders);

  useEffect(() => {
    if (!orders.length) getOrders();
  }, []);

  return (
    <>
      {!orders.length ? (
        <div className={s.block}>
          <div className={s.none}>
            <div className={s.top}>
              <span className={s.item}>Количество Ваших заказов сейчас: 0</span>
              <span className={s.item}>
                Отслеживайте свои заказы и просматривайте журнал отправки.
              </span>
            </div>
            <div className={s.bottom}>История начислений баллов</div>
          </div>
        </div>
      ) : (
        <div className={s.orders}>
          {orders.map((o) => (
            <OrderItem key={o.id} o={o} />
          ))}
        </div>
      )}
    </>
  );
};

export default Orders;
