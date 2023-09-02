import SvgSelector from "@/utils/SvgSelector";
import React from "react";
import styles from "./EmptyCart.module.scss";

type Props = {};

export const EmptyCart = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <SvgSelector id="empty-cart" />
      <div className={styles.text}>В вашей корзине пусто.</div>
    </div>
  );
};
