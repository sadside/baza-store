"use client";

import React, { useState } from "react";
import s from "./OrderItem.module.scss";
import SvgSelector from "../../utils/SvgSelector";
import MiniOrder from "./miniOrder/MiniOrder";
import { AnimatePresence, motion } from "framer-motion";
import { OrderType } from "@/components/orders/Orders";
import { getCountPrice } from "@/utils/getCountPrice";
import { convertDate } from "@/utils/convertDate";
import { IOrder } from "@/models/Order";
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
          <span className={s.price}>x ₽</span>
        </div>
        <div className={s.line}>
          <span className={s.left}>Статус: </span>
          <span className={s.right}>{o.status}</span>
        </div>
        <div className={s.line}>
          <span className={s.left}>Заказ получен: </span>
          <span className={s.right}>{o.receiving_date}</span>
        </div>
        <div className={s.bottom}>
          <span className={s.left}>BAZA LOYALTY:</span>
          <span className={s.right}>x ₽</span>
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
