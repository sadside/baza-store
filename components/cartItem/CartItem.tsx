"use client";

import React from "react";
import { IProductCart } from "@/stores/cart/cart.interface";

import styles from "./CartItem.module.scss";
import Image from "next/image";
import {
  productCounDecremented,
  productCountIncremented,
} from "@/stores/cart/init";

export const CartItem = ({
  name,
  price,
  size,
  image,
  count,
  id,
  color,
}: IProductCart) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={image
          .replace("http://localhost:8000/", "http://thebaza.ru/")
          .replace("http://127.0.0.1:8000/", "http://thebaza.ru/")}
        width={150}
        height={200}
        alt={"img"}
      />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.size}>Размер: {size}</div>
        <div className={styles.size}>Цвет: {color}</div>
        <div className={styles.count}>
          Количество:
          <span
            onClick={() =>
              productCounDecremented({
                name,
                price,
                size,
                image,
                count,
                id,
                color,
              })
            }
          >
            -
          </span>
          {count}
          <span
            onClick={() =>
              productCountIncremented({
                name,
                price,
                size,
                image,
                count,
                id,
                color,
              })
            }
          >
            +
          </span>
        </div>
      </div>
      <div className={styles.price}>{`${price / 100} ₽`}</div>
    </div>
  );
};
