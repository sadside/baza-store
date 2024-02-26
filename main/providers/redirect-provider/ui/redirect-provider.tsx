"use client";
import { ReactNode } from "react";
import { useUnit } from "effector-react";
import { useRouter } from "next/navigation";
import { $redirectPath } from "@/main/providers/redirect-provider/model/redirect";

interface RedirectProviderProps {
  children: ReactNode;
}

export const RedirectProvider = ({ children }: RedirectProviderProps) => {
  const path = useUnit($redirectPath);

  const { push } = useRouter();

  if (path) push(path);

  return <div>{children}</div>;
};
