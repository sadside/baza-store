'use client';
import React from 'react';
import { ButtonWrapper } from '@/source/shared/ui/button';
import { Primary, primaryProps } from '@/source/shared/ui/button/ui/variants/primary';
import { Secondary } from '@/source/shared/ui/button/ui/variants/secondary';
import { Count, countProps } from '@/source/shared/ui/button/ui/variants/count';

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
        <ButtonComponent {...(otherProps as T)} style={{ height, width }}>
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
