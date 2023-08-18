import React from "react";
import Welcome from "../../welcome/Welcome";
import LcBlock from "../../lcBlock/LcBlock";

import s from "./index.module.scss";
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
