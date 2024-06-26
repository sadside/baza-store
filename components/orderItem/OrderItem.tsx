"use client";

import React, { useState } from "react";
import s from "./OrderItem.module.scss";

import MiniOrder from "./miniOrder/MiniOrder";
import { AnimatePresence, motion } from "framer-motion";
import SvgSelector from "@shared/utils/SvgSelector";
import { getOrderPrice } from "@shared/utils/getOrderPrice";
import { convertOrderStatus } from "@shared/utils/convertOrderStatus";
import { getLoyaltyCount } from "@shared/utils/getLoyaltyCount";
import { IOrder } from "@shared/types/models/Order";

type Props = {
  o: IOrder;
};
const OrderItem = ({ o }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={s.root}>
      <div className={s.info}>
        <div className={s.title}>
          <div className={s.left}>
            <span className={s.arrow} onClick={() => setOpen(!open)}>
              <SvgSelector id={open ? "arrowTop" : "arrowDown"} />
            </span>
            <span className={s.TxtDate}>
              <span className={s.txt}>Заказ vs{o.id} </span>
              <span className={s.date}> от {o.order_date}</span>
            </span>
          </div>
          <span className={s.count}>{o.products.length} товаров</span>
          <span className={s.price}>{getOrderPrice(o)} ₽</span>
        </div>
        <div className={s.line}>
          <span className={s.left}>Статус: </span>
          <span className={s.right}>{convertOrderStatus(o.status)}</span>
        </div>
        {convertOrderStatus(o.status) === "Получен" && (
          <div className={s.line}>
            <span className={s.left}>Заказ получен: </span>
            <span className={s.right}>{o.receiving_date}</span>
          </div>
        )}
        <div className={s.bottom}>
          <span className={s.left}>BAZA LOYALTY:</span>
          <span className={s.right}>{getLoyaltyCount(o)} ₽</span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ height: "auto" }}
            initial={{ height: "0" }}
            exit={{ height: "0" }}
            transition={{ duration: 0.4 }}
            style={{ overflow: "hidden" }}
            className={s.orders}
          >
            {o.products.map((p) => (
              <MiniOrder key={p.product.id} o={p} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OrderItem;
