import React from "react";
import { LkLayout } from "@/source/layouts/lk-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LkLayout children={children} />;
}
