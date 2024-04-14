import React from "react";
import classNames from "classnames";

export const StatusLoyalty = ({ status }: { status: string }) => {

  return (
    <>
      <div className="w-full mt-5   ">
        <div className="flex justify-between uppercase font-semibold">
          <div>{status}</div>
          <div>80 000₽</div>
        </div>
        <div className="font-medium flex justify-between text-black-400 text-[12px]">
          <div>Кэшбек бонусами 5%</div>
          <div>До следующего статуса</div>
        </div>
      </div>
      <div className={"grid grid-cols-3 mt-2.5  "}>
        <div
          className={classNames("border-t-black text-black flex justify-center border-t-[1px] mr-[5px] items-center flex-col")}>
          <div className="uppercase font-medium pt-[2px]  text-black">Black</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 5%</div>
        </div>
        <div
          className={classNames("flex justify-center border-t-[1px] mr-[5px] items-center flex-col", status === "Black" ? "border-t-black-100" : "border-t-black text-black")}>
          <div className="uppercase font-medium pt-[2px] ">gold</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 7%</div>
        </div>
        <div
          className={classNames("flex justify-center border-t-[1px]  items-center flex-col", status === "Black" || status === "Gold" ? "border-t-black-100" : "border-t-black text-black")}>
          <div className="uppercase font-medium pt-[2px] ">platinum</div>
          <div className=" text-[10px] font-medium text-black-400">Кешбэк 10%</div>
        </div>

      </div>
    </>
  );
};
