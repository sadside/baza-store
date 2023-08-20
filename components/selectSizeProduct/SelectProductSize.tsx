import React from "react";
import styles from "./SelectProductSize.module.scss";
import clsx from "clsx";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  sizeSelected,
} from "@/stores/ui/products/productSize";
import { Modification } from "@/models/Product";

type Props = {
  modifications: Modification[];
};

export const SelectProductSize = ({ modifications }: Props) => {
  const color = useUnit($selectedColor);

  const selectedSize = useUnit($selectedSize);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.sizeTitle}>
          <div className={styles.title}>Размер: </div>
          <div className={styles.gid}>Гид по уходу</div>
        </div>
        <div className={styles.sizeItems}>
          {color?.sizes.map((size) => {
            return (
              <div
                className={clsx({
                  [styles.sizeItem]: true,
                  [styles.active]: selectedSize?.size === size.size,
                })}
                onClick={() => sizeSelected(size)}
                key={size.id}
              >
                {size.size}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
