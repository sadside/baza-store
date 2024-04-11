import React from "react";

export const StateOrderLk = ({ state }: { state: string }) => {
  switch (state.toLowerCase()) {
    case "в пути":
      return (
        <div
          className="bg-green min-w-[88px] overflow-visible  text-white uppercase px-[20px] text-[12px] font-semibold py-[4px]">
          в пути
        </div>
      );
    case "завершен":
      return (
        <div className="bg-black-25 min-w-[88px] text-black uppercase px-[20px] text-[12px] font-semibold py-[4px]">
          завершен
        </div>
      );
    case "не оплачен":
      return (
        <div className="bg-yellow min-w-[120px] text-black-300 uppercase px-[20px] text-[12px] font-semibold py-[4px]">
          не оплачен
        </div>
      );
    default:
      return (
        <></>
      );
  }
};
