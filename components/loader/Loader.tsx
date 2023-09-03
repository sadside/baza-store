import React from "react";
import Image from "next/image";
import styles from "./Loader.module.scss";
import img from "../../svg-loaders/2.svg";

type Props = {
  color?: string;
  height?: number;
  width?: number;
};

export const Loader = ({
  color = "#28292f",
  height = 88,
  width = 88,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        height={height}
        width={width}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke-width="5"
          stroke={color}
          stroke-dasharray="39.269908169872416 39.269908169872416"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
        <circle
          cx="50"
          cy="50"
          r="19"
          stroke-width="5"
          stroke={color}
          stroke-dasharray="29.845130209103033 29.845130209103033"
          stroke-dashoffset="29.845130209103033"
          fill="none"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};