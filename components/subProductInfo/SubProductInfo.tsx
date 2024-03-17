import React from "react";
import styles from "./SubProductInfo.module.scss";
import SvgSelector from "@shared/utils/SvgSelector";

type Props = {};

export const SubProductInfo = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoItem}>
        <SvgSelector id="infoProductIcon" />
        <div>Информация об изделлии</div>
      </div>
      <div className={styles.infoItem}>
        <SvgSelector id="bonusProductIcon" />
        <div>Приобретайте продукцию со скидкой</div>
      </div>
    </div>
  );
};
