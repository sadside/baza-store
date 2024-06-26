"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGate } from "effector-react";
import { appStarted } from "@shared/lib/utils/helpers/app-status";
import { routerGate } from "@shared/lib/utils/helpers/router-instance";
import "@/source/features/cart-mutation/model/cart-mutation";
import "@/source/layouts/lk-layout/model/lk-layout-model";

type Props = { children?: ReactNode };

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    appStarted();
  }, []);

  const router = useRouter();

  useGate(routerGate, router);
  return <>{children}</>;
};
