import styles from "./heart-button.module.scss";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import CheckedHeartIcon from "@shared/assets/icons/CheckedHeartIcon.svg";
import UncheckedHeartIcon from "@shared/assets/icons/UncheckedHeartIcon.svg";

interface HeartButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  checked: boolean;
  onClick?: () => void;
  fill?: string;
  height?: number;
  width?: number;
}

export const HeartButton = ({
                              checked,
                              onClick,
                              height = 20,
                              fill = "#A2A2A2",
                              width = 20
                            }: HeartButtonProps) => {
  return (
    <button className={styles.wrapper}>
      {checked ? (
        <CheckedHeartIcon height={height} width={width} style={{ fill }} />
      ) : (
        <UncheckedHeartIcon height={height} width={width} style={{ fill }} />
      )}
    </button>
  );
};
