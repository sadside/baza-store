import React from "react";
import { ItemFavouriteType } from "@shared/types/models/ItemFavoirite";
import Link from "next/link";
import { ItemFavourite } from "@/source/features/item-faavourite";


type Props = {
  favourites?: ItemFavouriteType[]
}

export const LkFavourite = ({ favourites }: Props) => {
  return (
    <>
      {favourites?.length ?
        <div className="flex justify-around flex-wrap">
          {favourites.map(f => <ItemFavourite item={f} />)}
        </div>
        :
        <div>
          <div className="font-medium text-[14px] leading-5 uppercase">Избранное</div>
          <div className="font-medium text-[12px] mt-2.5">Здесь будут модели, которые вы отложите в избранное.<br />
            Для добавления перейдите в каталог.
          </div>
          <div className="mt-[30px]">
            <Link
              className="uppercase  font-semibold text-[12px] px-[50px] w-[270px] py-[14px] bg-black text-white mt-[50px]"
              href={"/"}>
              Перейти в каталог
            </Link>
          </div>
        </div>
      }
    </>);
};
