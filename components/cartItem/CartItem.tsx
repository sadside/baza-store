"use client";

import React from "react";
import { IProductCart } from "@/stores/cart/cart.interface";

import styles from "./CartItem.module.scss";
import Image from "next/image";
import {
  $user,
  addToServerFx,
  productCounDecremented,
  productCountIncremented,
  removeCartItem,
} from "@/stores/cart/init";
import { useUnit } from "effector-react";

export const CartItem = ({
  name,
  price,
  size,
  image,
  count,
  id,
  color,
}: IProductCart) => {
  const user = useUnit($user);
  const isLoading1 = useUnit(addToServerFx.pending);

  const isLoading2 = useUnit(removeCartItem.pending);

  return (
    <div className={styles.wrapper}>
      <Image src={image} width={150} height={200} alt={"img"} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.size}>Размер: {size}</div>
        <div className={styles.size}>Цвет: {color}</div>
        <div className={styles.count}>
          Количество:
          <span
            onClick={() => {
              if (!isLoading2 && !isLoading1) {
                productCounDecremented({
                  name,
                  price,
                  size,
                  image,
                  count,
                  id,
                  color,
                  old_price: price,
                });

                if (user) removeCartItem(id || 0);
              }
            }}
          >
            -
          </span>
          {count}
          <span
            onClick={() => {
              if (!isLoading2 && !isLoading1) {
                productCountIncremented({
                  name,
                  price,
                  size,
                  image,
                  count,
                  id,
                  color,
                  old_price: price,
                });

                if (user) addToServerFx(id || 0);
              }
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className={styles.price}>{`${price / 100} ₽`}</div>
    </div>
  );
};
