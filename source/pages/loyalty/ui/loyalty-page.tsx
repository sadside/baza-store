"use client";
import { BonusLoyalty } from "@entities/bonus-loyalty";
import { StatusLoyalty } from "@entities/status-loyalty";
import SvgSelector from "@shared/utils/SvgSelector";
import { HistoryLoyalty } from "@entities/history-loyalty";
import { useLayoutEffect, useState } from "react";

export const LoyaltyPage = () => {
  const [countViews, setCountViews] = useState(0);

  useLayoutEffect(() => {
    const currentCountViews = Number(JSON.parse(localStorage.getItem("loayltyBannerViewsCount") || "0"));

    localStorage.setItem("loayltyBannerViewsCount", String(currentCountViews + 1));
    setCountViews(currentCountViews + 1);
  }, []);

  return (
    <div>
      <BonusLoyalty />
      <StatusLoyalty />
      {countViews < 10 && (
        <div
          className="mt-5  max-[785px]:px-[10px] w-full bg-lightGray justify-between max-[785px]:flex-col gap-[18px]  flex">
          <div
            className="min-w-[160px] max-[785px]:w-[100%]  max-[785px]:mt-[10px]  flex justify-center items-center w-[20%]  h-[98px] bg-backBazaLogo">
            <span className="opacity-[100%]">
              <SvgSelector id={"baza-icon"} />
            </span>
          </div>
          <div className="flex flex-col max-[785px]:pt-0  max-[785px]:justify-center py-[10px] w-[100%] justify-center">
            <div className="text-black-400 m-auto text-[14px] lex font-medium uppercase max-[785px]:justify-center ">
              Получите 300 бонусов
            </div>
            <div className="  mt-[4px] w-[98%] font-medium text-black-200 text-[12px]  max-[785px]:text-center ">
              <span className="text-black-400">Добавьте карту</span> в телефон, чтобы удобно следить за бонусами,
              получать уведомления о новых акциях и скидках.
            </div>
          </div>
        </div>
      )}
      <HistoryLoyalty />
    </div>
  );
};
