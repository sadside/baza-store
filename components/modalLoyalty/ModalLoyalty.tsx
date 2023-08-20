"use client";

import React from "react";
import s from "./ModalLoyalty.module.scss";
import { useUnit } from "effector-react/compat";
import { $activeModal, clickOut } from "@/stores/modal/init";
import SvgSelector from "@/utils/SvgSelector";
import { convertDate } from "@/utils/convertDate";
import { AnimatePresence, motion } from "framer-motion";

const ModalLoyalty = () => {
  const visible = useUnit($activeModal);
  let orders = [
    { id: 26775134, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 26775144,
      date: "21.01.2023",
      time: "21:38",
      count: "+755",
    },
    { id: 24775134, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 24575134,
      date: "21.01.2023",
      time: "21:38",
      count: "+755",
    },
    { id: 24575154, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 24675134,
      date: "21.01.2023",
      time: "21:38",
      count: "+755",
    },
  ];
  let clas = [s.MyModal];
  visible ? clas.push(s.active, "hidden") : undefined;

  return (
    <>
      <div className={clas.join(" ")} onClick={() => clickOut()}>
        <div className={s.MyModalContent} onClick={(e) => e.stopPropagation()}>
          <span onClick={() => clickOut()}>
            {" "}
            <SvgSelector id={"close"} />
          </span>
          <div className={s.orders}>
            {orders.map((o) => {
              return (
                <div key={o.id} className={s.order}>
                  <div className={s.left}>
                    <span className={s.id}>Заказ vs{o.id}</span>
                    <span className={s.data}>
                      {convertDate(o.date)} {o.time}
                    </span>
                  </div>
                  <div className={s.right}>{o.count} ₽</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={s.mobileTop}>
          <AnimatePresence>
            {visible && (
              <motion.div
                onClick={(e) => e.stopPropagation()}
                animate={{ y: "0" }}
                initial={{ y: "150%" }}
                exit={{ y: "150%" }}
                transition={{ duration: 0.4 }}
                className={s.mobile}
              >
                <span onClick={() => clickOut()}>
                  {" "}
                  <SvgSelector id={"home"} />
                </span>
                <div className={s.orders}>
                  {orders.map((o) => {
                    return (
                      <div key={o.id} className={s.order}>
                        <div className={s.left}>
                          <span className={s.id}>Заказ vs{o.id}</span>
                          <span className={s.data}>
                            {convertDate(o.date)} {o.time}
                          </span>
                        </div>
                        <div className={s.right}>{o.count} ₽</div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default ModalLoyalty;
