"use client";
import React from "react";
import s from "./WelcomeTxt.module.scss";
import { useRouter } from "next/navigation";
import { useUnit } from "effector-react";
import { $user, logoutFx } from "@/stores/cart/init";

const WelcomeText = () => {
  const { push } = useRouter();
  const user = useUnit($user);

  const handleClick = () => {
    logoutFx();
    push("/");
  };

  return (
    <div className={s.root}>
      <span className={s.top}>
        <div className={s.name}>
          ДОБРО ПОЖАЛОВАТЬ{user?.name && `, ${user.name}`}
        </div>
        <span className={s.vix} onClick={handleClick}>
          Выход
        </span>
      </span>
      <div className={s.content}>
        <span className={s.txt}>
          Мы вносим улучшения в "Мою учетную запись", чтобы предложить вам
          лучший опыт. Некоторые из ваших заказов могут быть не видны ниже,
          пожалуйста, <span className={s.line}>свяжитесь с нами для </span>
          получения дополнительной помощи. Если вы хотите вернуть заказ, который
          не отображается ниже, пожалуйста, посетите нашу страницу{" "}
          <span className={s.line}>Возврат</span>, чтобы начать процесс
          возврата. Если у вас есть какие-либо вопросы или вам нужна
          дополнительная помощь, пожалуйста,{" "}
          <span className={s.line}>свяжитесь с нами</span>
        </span>
      </div>
    </div>
  );
};

export default WelcomeText;
