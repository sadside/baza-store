"use client";

import React from "react";
import s from "./favorites-page.module.scss";
import { useUnit } from "effector-react";
import { $favorites } from "@/stores/favotites/favorites";
import { $favoritesItems } from "@/stores/cart/init";

export type Favour = {
  name: string;
  id: number;
  price: number;
  image: string;
};

export const FavoritesPage = () => {
  const favorites = useUnit($favoritesItems);
  return (
    <>
      {favorites.length ? (
        <div className={s.content}>
          {/*{favorites.map((o) => (*/}
          {/*  <FavouriteBlock key={o.slug} o={o} />*/}
          {/*))}*/}
        </div>
      ) : (
        <div className={s.none}>
          Чтобы добавить товар в избранное нужно нажать на сердечко на странице
          товара
        </div>
      )}
    </>
  );
};
