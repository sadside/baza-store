"use client";

import React from "react";
import s from "./InfoBlock.module.scss";
import Link from "next/link";
import { useUnit } from "effector-react";
import { $user } from "@/stores/cart/init";
type Props = {};

export const InfoBlock = (props: Props) => {
  const user = useUnit($user);

  return (
    <div className={s.block}>
      <div className={s.content}>
        <div className={s.mainContent}>
          <div className={s.title}>Учетные данные</div>
          <div className={s.line}>
            <span className={s.tag}>Имя: </span>
            <span suppressHydrationWarning className={s.right}>
              {user?.name ? user.name : "Необходимо заполнить."}
            </span>
          </div>
          <div className={s.line}>
            <span className={s.tag}>Фамилия:</span>
            <span suppressHydrationWarning className={s.right}>
              {user?.surname ? user.surname : "Необходимо заполнить."}
            </span>
          </div>
          <div className={s.line}>
            <span className={s.tag}>E-mail:</span>
            <span suppressHydrationWarning className={`${s.right} ${s.done}`}>
              {user?.email ? user.email : "Необходимо заполнить."}
            </span>
          </div>
          <div className={s.line}>
            <span className={s.tag}>Телефон:</span>
            <span suppressHydrationWarning className={`${s.right} ${s.done}`}>
              {user?.phone ? user.phone : "Необходимо заполнить."}
            </span>
          </div>
        </div>
      </div>
      <div className={s.bottom}>
        <Link href="info">Больше данных</Link>
      </div>
    </div>
  );
};
