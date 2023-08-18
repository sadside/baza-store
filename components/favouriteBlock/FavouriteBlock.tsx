import React from "react";
import s from "./FavouriteBlock.module.scss";
import classNames from "classnames";
import { Favour } from "@/components/screens/LcFavourPage/LcFavourPage";
import SvgSelector from "@/utils/SvgSelector";
type Props = {
  o: Favour;
};
const FavouriteBlock = ({ o }: Props) => {
  const { name, id, size, price, count, color, img } = o;
  return (
    <div className={s.root}>
      <div className={s.img}>
        <img src={img} alt="sosi hyi" />
      </div>
      <div className={s.card}>
        <div className={s.content}>
          <div className={s.top}>
            <span className={s.name}>{name}</span>
            <span className={s.heart}>
              <SvgSelector id={"favoriteHeart"} />
            </span>
          </div>
          <div className={s.description}>
            <div className={s.item}>Артикул: {id}</div>
            <div className={s.item}>{color}</div>
            <div className={s.item}>Размер: {size}</div>
            <div className={s.bot}>
              <div className={classNames(s.item, s.count)}>
                Количество: {count}
              </div>
              <div className={s.price}>{count * price} ₽</div>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <span className={s.setting} style={{ cursor: "pointer" }}>
            Изменить
          </span>
          <span className={s.price}>{count * price} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default FavouriteBlock;
