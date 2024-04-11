import React from "react";

type Props = {
  bonus: {
    status: string
    active: number
    await: number
  }
}

export const LoyaltySmallMenu = ({ bonus }: Props) => {
  return (
    <div className="w-full flex justify-between max-[400px]:px-[10px] mt-5 px-[20px] py-[10px ">
      <div className="">
        <div className="font-semibold ">{bonus.status}</div>
        <div className="text-black-400">Ваш статуc</div>
      </div>
      <div className="">
        <div className="flex justify-end"><span className="font-medium mr-1">Активных бонусов </span><span
          className="font-semibold"> {bonus.active}</span></div>
        <div className="flex justify-end text-black-200">Ожидают подтверждения <span
          className="font-semibold ml-1"> {bonus.await}</span></div>
      </div>
    </div>
  );
};
