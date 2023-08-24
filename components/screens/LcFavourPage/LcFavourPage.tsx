"use client";

import React from "react";
import Welcome from "@/components/welcome/Welcome";
import FavouriteBlock from "../../favouriteBlock/FavouriteBlock";
import s from "./index.module.scss";
import { useUnit } from "effector-react";
import { $favorites } from "@/stores/favotites/favorites";

export type Favour = {
  name: string;
  id: number;
  price: number;
  image: string;
};

const LcFavourPage = () => {
  const favorites = useUnit($favorites);
  return (
    <>
      {favorites.length ? (
        <div className={s.content}>
          {/* {favorites.map((o) => (
            <FavouriteBlock key={o.id} o={o} />
          ))} */}
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

export default LcFavourPage;
