"use client";
import { useUnit } from "effector-react";
import { $loyalty, getLoyaltyInfoFx } from "@entities/loyalty/model/loyalty-model";
import { Loader } from "@/components/loader/Loader";

export const LoyaltySmallMenu = () => {
  const userLoyalty = useUnit($loyalty);

  const loading = useUnit(getLoyaltyInfoFx.pending);

  if (loading || !userLoyalty) {
    return (
      <div className="h-[68px] bg-black-5 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (userLoyalty)
    return (
      <div className="w-full flex justify-between max-[400px]:px-[10px] px-[20px] py-[10px]  bg-black-5">
        <div className="">
          <div className="font-semibold uppercase text-[14px]">{userLoyalty?.status || "black"}</div>
          <div className="text-black-400 text-[12px]">Ваш статус</div>
        </div>
        <div className="">
          <div className="flex justify-end items-center">
            <span className="font-medium text-[12px] mr-1">Активных бонусов </span>
            <span className="font-semibold text-[14px]"> {userLoyalty?.balance ? userLoyalty.balance / 100 : 0}</span>
          </div>
          <div className="flex justify-end text-[12px]  items-center text-black-200">
            Ожидают подтверждения{" "}
            <span className="font-semibold text-[14px] ml-1">
              {" "}
              {userLoyalty?.awaiting_balance ? userLoyalty.awaiting_balance / 100 : 0}
            </span>
          </div>
        </div>
      </div>
    );

  return <></>;
};
