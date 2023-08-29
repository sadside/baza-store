"use client";

import React from "react";
import { IProductCart } from "@/stores/cart/cart.interface";

import styles from "./CartItem.module.scss";
import Image from "next/image";
import {
  productCounDecremented,
  productCountIncremented,
} from "@/stores/cart/init";
import axios from "axios";
import { API_URL_CLIENT } from "@/http";

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
      <Image src={image} width={150} height={200} alt={"img"} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.size}>Размер: {size}</div>
        <div className={styles.size}>Цвет: {color}</div>
        <div className={styles.count}>
          Количество:
          <span
            onClick={async () =>
              await axios.post(`${API_URL_CLIENT}profile/cart/remove/`, {
                modification_id: id,
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
