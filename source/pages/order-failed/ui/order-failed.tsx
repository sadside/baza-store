"use client";
import Logo from "@shared/assets/logo.svg";
import { useUnit } from "effector-react";
import { $user } from "@entities/user/model/user-model";

export const OrderFailed = () => {
  const user = useUnit($user);

  return (
    <div className="max-w-[2560px] px-10 flex flex-col items-center mb-10">
      <div className="mt-32 mb-10">
        <Logo />
      </div>
      <h4 className="font-semibold uppercase mb-5">ЗАКАЗ НЕ ОПЛАЧЕН</h4>
      <p className="text-center font-normal text-[14px] mb-5">
        {user?.name ? user.name : "Загрузка"}
        , Вы не оплатили заказ!
        <br />
      </p>
      <p className="text-center font-normal text-[14px] mb-5">
        Если у вас появились дополнительные вопросы, свяжитесь с нами удобным способом.
      </p>
      <div className="flex gap-5 flex-wrap justify-center items-center">
        <a
          href="tel:89228865945"
          className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px]"
        >
          +7 (922) 886-59-45
        </a>
        <a
          href="tel:89228865945"
          target="_blank"
          className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px]"
        >
          TELEGRAM
        </a>
        <a
          href="mailto:info@thebaza.ru"
          className="px-[30px] py-2.5 flex items-center justify-center bg-black-50 text-black-300 uppercase font-semibold text-[12px]"
        >
          INFO@THEBAZA.RU
        </a>
      </div>
    </div>
  );
};
