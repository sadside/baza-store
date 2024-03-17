"use client";

import styles from "./styles/primary.module.scss";
import { Loader } from "@/components/loader/Loader";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from "react";
import classNames from "classnames/bind";
import { BUTTON_VARIANTS } from "@shared/ui/button/ui/button-wrapper";

export interface primaryProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  loading?: boolean;
}

const cx = classNames.bind(styles);

export const Primary = ({
  children,
  loading,
  disabled,
  ...props
}: primaryProps) => {
  const [focused, setIsFocused] = useState(false);

  const buttonCls = cx({
    wrapper: true,
    disabled,
    focused,
  });

  return (
    <button
      type="submit"
      className={buttonCls}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      disabled={disabled}
      {...props}
    >
      {!loading ? (
        children
      ) : (
        <Loader height={44} width={44} variant={BUTTON_VARIANTS.PRIMARY} />
      )}
    </button>
  );
};
