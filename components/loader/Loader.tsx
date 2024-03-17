import React from "react";
import styles from "./Loader.module.scss";
import { BUTTON_VARIANTS } from "@/source/shared/ui/button/ui/button-wrapper";

type Props = {
  color?: string;
  height?: number;
  width?: number;
  variant?: BUTTON_VARIANTS;
};

export const Loader = ({
  color = "#28292f",
  height = 88,
  width = 88,
  variant = BUTTON_VARIANTS.SECONDARY,
}: Props) => {
  switch (variant) {
    case BUTTON_VARIANTS.SECONDARY || BUTTON_VARIANTS.COUNT:
      color = "#28292f";
      break;

    case BUTTON_VARIANTS.PRIMARY:
      color = "#fff";
      break;
  }

  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 150"
        height={height}
        width={width}
      >
        <path
          fill="none"
          stroke={color}
          stroke-width="15"
          stroke-linecap="round"
          stroke-dasharray="300 385"
          stroke-dashoffset="0"
          d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="2"
            values="685;-685"
            keySplines="0 0 1 1"
            repeatCount="indefinite"
          ></animate>
        </path>
      </svg>
    </div>
  );
};
