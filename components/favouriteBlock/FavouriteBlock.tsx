"use client";

import React from "react";
import s from "./FavouriteBlock.module.scss";
import classNames from "classnames";
import { Favour } from "@/components/screens/LcFavourPage/LcFavourPage";
import SvgSelector from "@/utils/SvgSelector";
import { IServerFavorite } from "@/models/Favorites";
import { removeFavorite } from "@/stores/cart/init";
type Props = {
  o: IServerFavorite;
};
const FavouriteBlock = ({ o }: Props) => {
  const { name, price, image, slug } = o;

  return (
    <div className={s.root}>
      <div className={s.img}>
        <img
          src={image.replace("http://127.0.0.1:8000/", "http://thebaza.ru/")}
          alt="img"
        />
      </div>
      <div className={s.card}>
        <div className={s.content}>
          <div className={s.top}>
            <span className={s.name}>{name}</span>
            <span className={s.heart} onClick={() => removeFavorite(slug)}>
              <SvgSelector id={"favoriteHeart"} />
            </span>
          </div>
          <div className={s.description}>
            <div className={s.item}>Артикул: {slug}</div>
            {/* <div className={s.item}>{color}</div> */}
            {/* <div className={s.item}>Размер: {size}</div> */}
            <div className={s.bot}>
              {/* <div className={classNames(s.item, s.count)}>
                Количество: {count}
              </div> */}
              <div className={s.price}>{price} ₽</div>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <span className={s.setting} style={{ cursor: "pointer" }}>
            Изменить
          </span>
          <span className={s.price}>{price / 100} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBlock;
