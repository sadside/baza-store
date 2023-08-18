import React from "react";

import s from "./Orders.module.scss";
import OrderItem from "../orderItem/OrderItem";
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
  let orders: OrderType[] | undefined = [
    {
      date: { by: "9.11.2023", of: "10.11.2024" },
      id: 26775134,
      state: "доставлен",
      baza: "+755",
      children: [
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553536,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553535,
          count: 2,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553537,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
    {
      date: { by: "9.11.2023", of: "10.11.2024" },
      id: 26775135,
      state: "доставлен",
      baza: "+755",
      children: [
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553536,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553535,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553537,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
    {
      date: { by: "9.11.2023", of: "10.11.2024" },
      id: 26775136,
      state: "доставлен",
      baza: "+755",
      children: [
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553536,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553535,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
          name: "Традиционный тренч Kensington средней длины",
          id: 8800553537,
          count: 1,
          price: 4200,
          img: "https://s3-alpha-sig.figma.com/img/4cfb/f9ea/0d82f9732cf18779e7db909a56694460?Expires=1692576000&Signature=aj4U-tx0cAr9ZQ~IOqDjyhEuq9cxIBYCG43aLWiwHMz2IdOQZcO0VpgWh~jt4UultI0zvzu8-Rk3wwsQyVK-3h4NaztcoB~Pbwnye9UyuoRC4W0qQaY-vMUceqL6BwFzhx~C6VgBD2~7YOnoIqIups9YsCOMQ4QK0UCLPUWUC9IF27m-OglhLYV-FS7vm5cewW23qrzL94fi3wpZmLG0KGgDtW9oaM7YXKZObooX5qbx5gwPksmRJeuRo7SXx~aHZQot-bxzNKwURh9C-70qyP1vIfA~3CAtvuBt1Vr1UqOK22lDPRFevFvAYQNAz8u42C8m499elOEE9FAsVyxWGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
      ],
    },
  ];
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
