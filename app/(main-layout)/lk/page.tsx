import React from "react";
import { LoyaltySmallMenu } from "@entities/loyalty-menu";
import { LkActualOrder } from "@widgets/lk-actual-order";
import { LkFavourite } from "@widgets/lk-favourite";

const Page = () => {
  const bonus = {
    status: "Gold",
    active: 294,
    await: 52
  };
  const favourites = [
    {
      id: 1,
      price: 4500,
      name: "СУМКА-АВОСЬКА МИДИ ИЗ ПЛАЩЕВКИ",
      image: "/dress.png",
      sale: 1100
    },
    {
      id: 2,
      price: 4500,
      name: "СУМКА-АВОСЬКА МИДИ ИЗ ПЛАЩЕВКИ",
      image: "/dress.png"
    },
    {
      id: 3,
      price: 4500,
      name: "СУМКА-АВОСЬКА МИДИ ИЗ ПЛАЩЕВКИ",
      image: "/dress.png",
      sale: 1100
    },
    {
      id: 4,
      price: 4500,
      name: "СУМКА-АВОСЬКА МИДИ ИЗ ПЛАЩЕВКИ",
      image: "/dress.png"
    },
    {
      id: 5,
      price: 4500,
      name: "СУМКА-АВОСЬКА МИДИ ИЗ ПЛАЩЕВКИ",
      image: "/dress.png",
      sale: 1100
    }

  ];
  return (
    <div>
      <LoyaltySmallMenu bonus={bonus} />
      <div className="mt-5"></div>
      <LkActualOrder />
      <div className="mt-5"></div>
      <div className="font-medium text-[14px] leading-5 uppercase">Избранное</div>
      <LkFavourite favourites={favourites} />
    </div>
  );
};

export default Page;