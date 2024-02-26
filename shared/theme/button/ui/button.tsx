"use client";
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FormEventHandler,
} from "react";
import { Primary, primaryProps } from "@/shared/ui/button/ui/variants/primary";
import { Secondary } from "@/shared/ui/button/ui/variants/secondary";
import { ButtonWrapper } from "@/shared/ui/button";
import { Count, countProps } from "@/shared/ui/button/ui/variants/count";

interface ButtonProps {
  children?: React.ReactNode;
  height?: number;
  width?: number;
}

function createButton<T>(ButtonComponent: React.FC<T>) {
  return (props: T & ButtonProps) => {
    const { height = 44, width, ...otherProps } = props;

    return (
      <ButtonWrapper style={{ height, width }}>
        <ButtonComponent {...(otherProps as T)}>
          {props?.children}
        </ButtonComponent>
      </ButtonWrapper>
    );
  };
}

export const Button = {
  Primary: createButton<primaryProps>(Primary),
  Secondary: createButton<primaryProps>(Secondary),
  Count: createButton<countProps>(Count),
};
