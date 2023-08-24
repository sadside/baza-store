"use client";

import styles from "./SelectProductColor.module.scss";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  colours: {
    slug: string;
    name: string;
    hex_code: string;
  }[];
  current_color: {
    name: string;
    hex_code: string;
    eng_name: string;
  };
};

export const SelectProductColor = ({ colours, current_color }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.color}>
        <div className={styles.titleText}>ЦВЕТ:</div>
        <div className={styles.selectedColor}>{current_color.eng_name}</div>
      </div>
      <div className={styles.colorPicker}>
        {colours.map((color) => {
          return (
            <Link
              href={color.slug}
              style={{ backgroundColor: `#${color.hex_code}` }}
              className={clsx({
                [styles.colorPrickerBtn]: true,
                [styles.selectedColorBtn]:
                  color.hex_code === current_color.hex_code,
              })}
              key={color.hex_code}
            ></Link>
          );
        })}
      </div>
    </div>
  );
};
