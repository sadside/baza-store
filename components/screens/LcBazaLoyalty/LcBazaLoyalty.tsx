import React from "react";

import s from "./index.module.scss";
import Welcome from "@/components/welcome/Welcome";
import Loyalty from "@/app/lk/baza-loyalty/page";
import { LoyaltyBlock } from "@/components/reviewBlock/LoyaltyBlock";
const LcBazaLoyalty = () => {
  let o = {
    type: "baza",
    strokes: [
      { name: "Актуальный баланс", val: "1845" },
      { name: "Скоро зачислится", val: "845" },
    ],
  };
  return (
    <div className={s.content}>
      <LoyaltyBlock />
    </div>
  );
};

export default LcBazaLoyalty;
