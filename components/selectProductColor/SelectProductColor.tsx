"use client";

import React, { useEffect, useId, useState } from "react";
import styles from "./SelectProductColor.module.scss";
import { IColor } from "./SelectProductColor.interface";
import clsx from "clsx";
import { colorSelected, sizeSelected } from "@/stores/ui/products/productSize";
import { useRouter } from "next/navigation";
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
  };
};

export const SelectProductColor = ({ colours, current_color }: Props) => {
  // const [selectedColor, setSelectdColor] = useState<IColor>(colours[0]);
  const router = useRouter();
  // useEffect(() => {
  //   colorSelected(selectedColor);
  // }, []);

  const selectColorHandleClicked = (color: {
    slug: string;
    name: string;
    hex_code: string;
  }) => {
    // setSelectdColor(color);
    // sizeSelected(null);
    // colorSelected(color);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.color}>
        <div className={styles.titleText}>ЦВЕТ:</div>
        <div className={styles.selectedColor}>{}</div>
      </div>
      <div className={styles.colorPicker}>
        {colours.map((color) => {
          return (
            <Link
              href={color.slug}
              style={{ backgroundColor: `#${color.hex_code}` }}
              onClick={() => selectColorHandleClicked(color)}
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
