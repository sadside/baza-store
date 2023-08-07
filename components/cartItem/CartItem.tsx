import React from "react";
import { IProduct } from "../productItem/productItem.interface";
import { IProductCart } from "@/stores/cart/cart.interface";

import styles from "./CartItem.module.scss";
import Image from "next/image";
import {
  productCounDecremented,
  productCountIncremented,
} from "@/stores/cart/init";
import Id from "@/pages/products/[id]";

type Props = {};

export const CartItem = ({
  name,
  price,
  size,
  image,
  count,
  id,
}: IProductCart) => {
  return (
    <div className={styles.wrapper}>
      <Image src={image} width={150} height={200} alt={"img"} />
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.size}>Размер: {size}</div>
        <div className={styles.count}>
          Количество:{" "}
          <span
            onClick={() =>
              productCounDecremented({ name, price, size, image, count, id })
            }
          >
            -
          </span>{" "}
          {count}{" "}
          <span
            onClick={() =>
              productCountIncremented({ name, price, size, image, count, id })
            }
          >
            +
          </span>
        </div>
      </div>
      <div className={styles.price}>{`${price} ₽`}</div>
    </div>
  );
};
