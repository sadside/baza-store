import React from "react";
import s from "./LoyaltyBlock.module.scss";

type Props = {};

export const LoyaltyBlock = (props: Props) => {
  return (
    <div className={s.block}>
      <div className={s.content}>
        <div className={s.title}>BAZA LOYALTY</div>
        {/* <div className={s.line}>
          <span>Акутальный баланс:</span>
          <span suppressHydrationWarning className={s.right}>
            1845
          </span>
        </div>
        <div className={s.line}>
          <span>Акутальный баланс:</span>
          <span suppressHydrationWarning className={s.right}>
            1845
          </span>
        </div> */}
        <div className={s.dev}>В разработке</div>
      </div>
      {/* <div className={s.bottom}>
        <Link href="baza-loyalty">История начислений баллов</Link>
      </div> */}
    </div>
  );
};
