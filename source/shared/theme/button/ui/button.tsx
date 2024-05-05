'use client';
import React from 'react';
import { ButtonWrapper } from '@/source/shared/ui/button';
import { Primary, primaryProps } from '@/source/shared/ui/button/ui/variants/primary';
import { Secondary } from '@/source/shared/ui/button/ui/variants/secondary';
import { Count, countProps } from '@/source/shared/ui/button/ui/variants/count';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children?: React.ReactNode;
  height?: number;
  width?: number;
}

function createButton<T>(ButtonComponent: React.FC<T>) {
  return (props: T & ButtonProps) => {
    const { ...otherProps } = props;

    return <ButtonComponent {...(otherProps as T)}>{props?.children}</ButtonComponent>;
  };
}

export const Button = {
  Primary: createButton<primaryProps>(Primary),
  Secondary: createButton<primaryProps>(Secondary),
  Count: createButton<countProps>(Count),
};
