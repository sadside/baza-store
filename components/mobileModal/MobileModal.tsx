import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useUnit } from "effector-react/compat";
import { $activeModal, clickOut } from "@/stores/modal/init";
import SvgSelector from "@/utils/SvgSelector";
import { convertDate } from "@/utils/convertDate";
import s from "./MobileModal.module.scss";

const MobileModal = () => {
  const visible = useUnit($activeModal);
  let orders = [
    { id: 26775134, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 26775144,
      date: "21.01.2023",
      time: "21:38",
      count: "+755"
    },
    { id: 24775134, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 24575134,
      date: "21.01.2023",
      time: "21:38",
      count: "+755"
    },
    { id: 24575154, date: "21.01.2023", time: "21:38", count: "+755" },
    {
      id: 24675134,
      date: "21.01.2023",
      time: "21:38",
      count: "+755"
    }
  ];
  return (
    <AnimatePresence>
      {visible &&
        <motion.div
          onClick={(e) => e.stopPropagation()}
          animate={{ y: "0%" }}
          initial={{ y: "150%" }}
          style={{ width: "100%" }}
          exit={{ y: "150%" }}
          transition={{ duration: 0.5 }}
          className={s.mobile}
        >
          <span onClick={() => clickOut()}> <SvgSelector id={"home"} /></span>
          <div className={s.orders}>
            {orders.map(o => {
              return (
                <div key={o.id} className={s.order}>
                  <div className={s.left}>
                    <span className={s.id}>Заказ vs{o.id}</span>
                    <span className={s.data}>{convertDate(o.date)} {o.time}</span>
                  </div>
                  <div className={s.right}>{o.count} ₽</div>
                </div>
              );
            })}
          </div>
        </motion.div>}
    </AnimatePresence>
  );
};

export default MobileModal;