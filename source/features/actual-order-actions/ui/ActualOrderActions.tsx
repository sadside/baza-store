"use client";
import React from "react";
import { Button } from "@shared/theme/button";

export const ActualOrderActions = () => {
  return (
    <div className="uppercase flex gap-[15px] min-w-[340px]  w-[40%] text-[12px] mt-7">
      <Button.Primary>Отследить посылку</Button.Primary>
      <Button.Secondary>Связаться с нами</Button.Secondary>
    </div>
  );
};

