import React from "react";

export const BonusLoyalty = ({ bonus }: {
  bonus: {
    active: number
    await: number
    status: string
  }
}) => {
  return (
    <div className="flex w-full h-[74px] ">
      <div className="h-[74px] w-1/2 bg-black-5 flex-col flex justify-center items-center "><span
        className="font-semibold">{bonus.active}</span><span> Активных баллов</span></div>
      <div className="w-1/2 ml-2 bg-black-5 flex-col flex justify-center items-center "><span
        className="font-semibold"> {bonus.await}</span><span> В ожидании</span></div>
    </div>
  );
};

