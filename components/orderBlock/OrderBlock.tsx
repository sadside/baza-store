import React from "react";
import s from "./OrderBlock.module.scss";
import Link from "next/link";
type Props = {};

export const OrderBlock = (props: Props) => {
  const order = false;

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
                  22.01.01
                </span>
              </div>
              <div className={s.line}>
                <span>Сумма:</span>
                <span suppressHydrationWarning className={s.right}>
                  1845 руб.
                </span>
              </div>
              <div className={s.line}>
                <span>Статус:</span>
                <span
                  suppressHydrationWarning
                  className={`${s.right} ${s.done}`}
                >
                  доставлен
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
