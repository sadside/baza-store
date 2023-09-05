"use client";

import React, { useEffect } from "react";
import s from "./OrderBlock.module.scss";
import Link from "next/link";
import { $orders, getOrders } from "@/stores/order/init";
import { useUnit } from "effector-react";
import { getOrderPrice } from "@/utils/getOrderPrice";
import { convertOrderStatus } from "@/utils/convertOrderStatus";
import { Loader } from "../loader/Loader";
import {clickCategory} from "@/stores/lc/init";
type Props = {};

export const OrderBlock = (props: Props) => {
  const orders = useUnit($orders);
  const loading = useUnit(getOrders.pending);

  const order = orders[0];

  if (loading) {
    return (
      <div className={s.block}>
        <Loader />
      </div>
    );
  }

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
                  {order.order_date.split("T")[0]}
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
            <Link href="/lk/orders/"  onClick={()=> clickCategory(3)}>Список заказов</Link>
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
