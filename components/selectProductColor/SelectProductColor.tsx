"use client";

import React, { useEffect, useId, useState } from "react";
import styles from "./SelectProductColor.module.scss";
import { IColor } from "./SelectProductColor.interface";
import clsx from "clsx";
import { colorSelected } from "@/stores/ui/products/productSize";

type Props = {
  colours: any;
};

export const SelectProductColor = ({ colours }: Props) => {
  const [selectedColor, setSelectdColor] = useState<IColor>(colours[0]);
  useEffect(() => {
    colorSelected(colours[0]);
  }, []);

  const selectColorHandleClicked = (color: IColor) => {
    setSelectdColor(color);
    colorSelected(color);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.color}>
        <div className={styles.titleText}>ЦВЕТ:</div>
        <div className={styles.selectedColor}>{selectedColor.name}</div>
      </div>
      <div className={styles.colorPicker}>
        {colours.map((color: IColor) => {
          return (
            <div
              style={{ backgroundColor: `#${color.hex_code}` }}
              onClick={() => selectColorHandleClicked(color)}
              className={clsx({
                [styles.colorPrickerBtn]: true,
                [styles.selectedColorBtn]:
                  color.hex_code === selectedColor.hex_code,
              })}
              key={color.hex_code}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
