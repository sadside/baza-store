import React from "react";
import styles from "./SelectProductSize.module.scss";
import clsx from "clsx";
import { useUnit } from "effector-react";
import { $selectedSize, sizeSelected } from "@/stores/ui/products/productSize";

type Props = {};

export const SelectProductSize = (props: Props) => {
  const selectedSize = useUnit($selectedSize);

  const sizes = ["s", "x", "xl", "m"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.sizeTitle}>
        <div className={styles.title}>Размер: </div>
        <div className={styles.gid}>Гид по уходу</div>
      </div>
      <div className={styles.sizeItems}>
        {sizes.map((size) => {
          return (
            <div
              className={clsx({
                [styles.sizeItem]: true,
                [styles.active]: selectedSize === size,
              })}
              onClick={() => sizeSelected(size)}
              key={size}
            >
              {size}
            </div>
          );
        })}
      </div>
    </div>
  );
};
