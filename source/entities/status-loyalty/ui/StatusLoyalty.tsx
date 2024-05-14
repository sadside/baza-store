"use client";

import classNames from "classnames";
import { useUnit } from "effector-react";
import { $loyalty } from "@entities/loyalty/model/loyalty-model";

export const StatusLoyalty = () => {
  const loyalty = useUnit($loyalty);

  const newStatus = loyalty?.status || "black";

  let cahsback = 0;

  switch (loyalty?.status) {
    case "black":
      cahsback = 5;
      break;
    case "platinum":
      cahsback = 10;
      break;
    case "gold":
      cahsback = 7;
      break;
  }

  return (
    <>
      <div className="w-full mt-5   ">
        <div className="flex justify-between uppercase font-semibold">
          <div>{newStatus}</div>
          <div>{loyalty?.remained ? loyalty?.remained / 100 : 0} ₽</div>
        </div>
        <div className="font-medium flex justify-between text-black-400 text-[12px]">
          <div>Кэшбек бонусами {cahsback}%</div>
          <div>До следующего статуса</div>
        </div>
      </div>
      <div className={"grid grid-cols-3 mt-2.5  "}>
        <div
          className={classNames(
            "border-t-black text-black flex justify-center border-t-[1px] mr-[5px] items-center flex-col"
          )}
        >
          <div className="uppercase font-medium pt-[2px]  text-black">Black</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 5%</div>
        </div>
        <div
          className={classNames(
            "flex justify-center border-t-[1px] mr-[5px] items-center flex-col",
            newStatus === "black" ? "border-t-black-100" : "border-t-black text-black"
          )}
        >
          <div className="uppercase font-medium pt-[2px] ">gold</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 7%</div>
        </div>
        <div
          className={classNames(
            "flex justify-center border-t-[1px]  items-center flex-col",
            newStatus === "black" || newStatus === "gold" ? "border-t-black-100" : "border-t-black text-black"
          )}
        >
          <div className="uppercase font-medium pt-[2px] ">platinum</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 10%</div>
        </div>
      </div>
    </>
  );
};
