"use client";

import { ReactNode } from "react";

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => {
  return <div>{children}</div>;
};
