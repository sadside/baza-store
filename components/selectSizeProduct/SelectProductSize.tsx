import React from "react";
import styles from "./SelectProductSize.module.scss";
import clsx from "clsx";
import { useUnit } from "effector-react";
import {
  $selectedColor,
  $selectedSize,
  sizeSelected,
} from "@/stores/ui/products/productSize";
import { Modifications } from "@/models/Product";

type Props = {
  modifications: Modifications[];
};

export const SelectProductSize = ({ modifications }: Props) => {
  //@ts-ignore
  // const sizes: string[] = modifications
  //   ?.map((modidication) => {
  //     if (modidication.size) return modidication.size;
  //   })
  //   ?.filter((item) => item !== undefined);

  const color = useUnit($selectedColor);
  console.log(color);

  const selectedSize = useUnit($selectedSize);

  // const sizes = ["s", "x", "xl", "m"];

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.sizeTitle}>
          <div className={styles.title}>Размер: </div>
          <div className={styles.gid}>Гид по уходу</div>
        </div>
        <div className={styles.sizeItems}>
          {/* {sizes.map((size) => {
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
          })} */}

          {color?.sizes.map((size) => {
            return (
              <div
                className={clsx({
                  [styles.sizeItem]: true,
                  [styles.active]: selectedSize === size.size,
                })}
                onClick={() => sizeSelected(size.size)}
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
