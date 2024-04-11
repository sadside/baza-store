"use client";

import { $cart } from "@/stores/cart/init";
import { useUnit } from "effector-react";
import React from "react";

import styles from "./MenuCart.module.scss";

type Props = {};

export const MenuCart = (props: Props) => {
  const products = useUnit($cart);
  console.log(products);

  const countsProducts = products.map((item) => (item.count ? item.count : 0));

  const initialValue = 0;

  const count = countsProducts.reduce((prev, current) => {
    return prev + current;
  }, initialValue);

  return <div className={styles.count}>{count}</div>;
};
