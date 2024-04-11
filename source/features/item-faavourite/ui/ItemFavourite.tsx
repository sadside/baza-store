import React from "react";
import { ItemFavouriteType } from "@shared/types/models/ItemFavoirite";
import Image from "next/image";
import SvgSelector from "@shared/utils/SvgSelector";

export const ItemFavourite = ({ item }: { item: ItemFavouriteType }) => {
  return (
    <div
      className="w-[200px] max-[620px]:w-[165px] overflow-hidden  flex flex-col justify-center align-middle text-center ">
      <div className="relative group">
        <Image className="pb-[18px] max-[620px]:w-[165px]  h-[270px] max-[620px]:h-[250px]" src={item.image}
               alt={item.name} height={200} width={200} />
        {item.sale &&
          <span className="absolute right-[5px] top-[5px] uppercase opacity-[0.5] font-semibold text-[12px] text-red">
          sale
        </span>}
        <div className=" top-0 left-0 right-0 bottom-0 hidden  absolute  group-hover:flex  ">
          <span className=" left-[5px] pt-[3px] top-[100px]"> <SvgSelector id={"close"} /></span>
          <button
            className="absolute left-[5px] bottom-[5px] text-[12px] uppercase bg-black-25 text-black-300 h-[36px] w-[200px] px-[30px] py-[10px]">
            в корзину
          </button>
        </div>
      </div>
      <div className="uppercase font-semibold text-[12px] ">{item.name}</div>
      <div className="flex justify-center">
        <span
          className="font-semibold text-[12px]">{item.sale ? item.price - item.sale + " ₽" : item.price + " ₽"}</span>
        <span
          className="line-through font-semibold text-[12px] pl-2.5 text-black-200">{item.sale ? item.price + " ₽" : ""}</span>
      </div>
    </div>
  );
};

