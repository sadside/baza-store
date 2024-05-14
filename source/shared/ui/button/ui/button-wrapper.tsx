import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./button-wrapper.module.scss";

export enum BUTTON_VARIANTS {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  COUNT = "count",
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const ButtonWrapper = ({ children, className }: Props) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
