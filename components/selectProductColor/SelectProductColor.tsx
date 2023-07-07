import React, { useId, useState } from "react";
import styles from "./SelectProductColor.module.scss";
import { IColor } from "./SelectProductColor.interface";
import clsx from "clsx";

type Props = {};

export const SelectProductColor = (props: Props) => {
  const colors: IColor[] = [
    { label: "Черный", color: "#000" },
    { label: "Серый", color: "#F2F2F2" },
    { label: "Серо-буро-малиновый", color: "#8D6B6B" },
    { label: "Фиолка", color: "#3F489A" },
  ];

  const [selectedColor, setSelectdColor] = useState<IColor>(colors[0]);

  const selectColorHandleClicked = (color: IColor) => {
    setSelectdColor(color);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.color}>
        <div className={styles.titleText}>ЦВЕТ:</div>
        <div className={styles.selectedColor}>{selectedColor.label}</div>
      </div>
      <div className={styles.colorPicker}>
        {colors.map((color) => {
          return (
            <div
              style={{ backgroundColor: color.color }}
              onClick={() => selectColorHandleClicked(color)}
              className={clsx({
                [styles.colorPrickerBtn]: true,
                [styles.selectedColorBtn]: color.color === selectedColor.color,
              })}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
