"use client";

import React from "react";
import s from "./OrderBlock.module.scss";
import Link from "next/link";
import { $orders } from "@/stores/order/init";
import { useUnit } from "effector-react";
import { getOrderPrice } from "@/utils/getOrderPrice";
import { convertOrderStatus } from "@/utils/convertOrderStatus";
type Props = {};

export const OrderBlock = (props: Props) => {
  const order = useUnit($orders)[0];

  return (
    <div className={s.block}>
      {order ? (
        <>
          <div className={s.content}>
            <div className={s.mainContent}>
              <div className={s.title}>АКТУАЛЬНЫЙ ЗАКАЗ</div>
              <div className={s.line}>
                <span>Покупка от </span>
                <span suppressHydrationWarning className={s.right}>
                  {order.order_date}
                </span>
              </div>
              <div className={s.line}>
                <span>Сумма:</span>
                <span suppressHydrationWarning className={s.right}>
                  {getOrderPrice(order)} руб.
                </span>
              </div>
              <div className={s.line}>
                <span>Статус:</span>
                <span
                  suppressHydrationWarning
                  className={`${s.right} ${s.done}`}
                >
                  {convertOrderStatus(order.status)}
                </span>
              </div>
            </div>
          </div>
          <div className={s.bottom}>
            <Link href="/lk/orders/">Список заказов</Link>
          </div>
        </>
      ) : (
        <div className={s.notFound}>
          <div className={s.notFoundContent}>
            <div>Здесь будут отображаться актуальные заказы.</div>
            <Link href="/">Перейти к покупкам</Link>
          </div>
        </div>
      )}
    </div>
  );
};
