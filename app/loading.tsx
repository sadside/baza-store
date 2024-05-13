"use client";
import Loader from "@/source/shared/assets/svg-loaders/2.svg";
import { twMerge } from "tailwind-merge";

export default function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        flex: "1 1 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      className={twMerge("animate-fade animate-ease-in")}
    >
      <Loader />
    </div>
  );
}
