"use client";

import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import SvgSelector from "@/utils/SvgSelector";
import { CancelButton } from "../cancelButton/CancelButton";
import { AnimatePresence, motion } from "framer-motion";
import { Gid } from "../gid/Gid";

type Props = {
  descrition?: string;
};

export const ProductDetails = ({ descrition }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>Детали продукта</div>
        <CancelButton
          open={open}
          handleClick={() => setOpen((prev) => !prev)}
        />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.4 }}
            exit={{ height: 0 }}
            key={"container"}
          >
            <div className={styles.productDetail}>
              {descrition ? descrition : "Мы скоро добавим описание товара :)"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ marginTop: open ? "25px" : "0" }}>
        <Gid
          idIcon="gid"
          title="Гид по уходу"
          description="Мы расскажем, как долго сохранять качество продукта"
        />

        <Gid
          idIcon="map"
          title="Доставка и возврат"
          description="Условия доставки и возврата товара"
        />

        <Gid
          idIcon="chat"
          title="Online консультация"
          description="Получите консультацию любым удобным способом"
        />
      </motion.div>
    </div>
  );
};
