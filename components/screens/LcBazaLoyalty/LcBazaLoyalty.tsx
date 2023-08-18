import React from "react";

import s from "./index.module.scss";
import Welcome from "@/components/welcome/Welcome";
import LcBlock from "@/components/lcBlock/LcBlock";
const LcBazaLoyalty = () => {
  let o = {
    type: "baza",
    strokes: [
      { name: "Актуальный баланс", val: "1845" },
      { name: "Скоро зачислится", val: "845" },
    ],
  };
  return (
    <Welcome>
      <div className={s.content}>
        <LcBlock o={o} />
      </div>
    </Welcome>
  );
};

export default LcBazaLoyalty;
