import React from "react";
import { InfoLayout } from "@/source/layouts/info-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <InfoLayout children={children} />;
}
