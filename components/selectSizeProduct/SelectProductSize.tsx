import React from "react";
import styles from "./SelectProductSize.module.scss";
import clsx from "clsx";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  sizeSelected,
} from "@/stores/ui/products/productSize";
import { Modification } from "@shared/types/models/Product";

type Props = {
  sizes: {
    name: string;
    mod_id: number;
    quantity: number;
  }[];
};

export const SelectProductSize = ({ sizes }: Props) => {
  const selectedSize = useUnit($selectedSize);

  return (
    <div className={styles.wrapper}>
      <div>
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
                  [styles.active]: selectedSize?.mod_id === size.mod_id,
                })}
                onClick={() => sizeSelected(size)}
                key={size.mod_id}
              >
                {size.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
