"use client";

import React from "react";
import { useUnit } from "effector-react";
import { $favoritesItems } from "@/stores/cart/init";
import { LkFavourite } from "@widgets/lk-favourite";

export type Favour = {
  name: string;
  id: number;
  price: number;
  image: string;
};

export const FavoritesPage = () => {
  const favorites = useUnit($favoritesItems);
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
    <LkFavourite favourites={favourites} />
  );
};
