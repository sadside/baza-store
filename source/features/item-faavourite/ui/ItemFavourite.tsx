"use client";

import React from "react";
import Image from "next/image";
import SvgSelector from "@shared/utils/SvgSelector";
import { Favorite, favoriteAdded, favoriteRemoved } from "@entities/favorite/model/favorite-model";
import Link from "next/link";
import { addProductToServerFx } from "@entities/cart/model/cart-model";

export const ItemFavourite = ({ item }: { item: Favorite }) => {
  const removeHandleCLick = () => {
    favoriteRemoved(item.slug);
  };

  const addHandleCLick = () => {
    addProductToServerFx(item.slug);
  };

  return (
    <div
      className="w-[200px] max-[620px]:w-[165px] overflow-hidden  flex flex-col justify-center align-middle text-center ">
      <div className="relative group">
        <Link href={`/products/${item.slug}`}>
          <Image
            className="pb-[18px] max-[620px]:w-[165px]  h-[270px] max-[620px]:h-[250px]"
            src={item.image}
            alt={item.name}
            height={200}
            width={200}
          />
        </Link>
        {/*{item.sale &&*/}
        {/*  <span className="absolute right-[5px] top-[5px] uppercase opacity-[0.5] font-semibold text-[12px] text-red">*/}
        {/*  sale*/}
        {/*</span>}*/}
        <div className=" top-0 left-0 right-0 bottom-0 hidden w-full  absolute  group-hover:flex  ">
          <span className=" cursor-pointer h-[24px] duration-300 left-[5px] pt-[3px] top-[100px]" onClick={removeHandleCLick}>
            <SvgSelector id={"close-grey"} />
          </span>
          <Link
            className="absolute cursor-pointer bottom-[5px] text-[12px] uppercase bg-black-25 text-black-300 h-[36px] w-[200px] px-[30px] py-[10px]"
            href={`/products/${item.slug}`}
          >
            в корзину
          </Link>
        </div>
      </div>
      <div className="uppercase font-semibold text-[12px] ">{item.name}</div>
      <div className="flex justify-center">
        <span className="font-semibold text-[12px]">{item.price / 100 + " ₽"}</span>
      </div>
    </div>
  );
};
