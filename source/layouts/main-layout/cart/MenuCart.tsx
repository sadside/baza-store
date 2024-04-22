'use client';

import { useUnit } from 'effector-react';
import React from 'react';

import styles from './MenuCart.module.scss';
import { $cart } from '@entities/cart/model/cart';

type Props = {};

export const MenuCart = (props: Props) => {
  const products = useUnit($cart);
  console.log(products);

  const countsProducts = products.map((item) => (item.quantityInCart ? item.quantityInCart : 0));

  const initialValue = 0;

  const count = countsProducts.reduce((prev, current) => {
    return prev + current;
  }, initialValue);

  return <div className={styles.count}>{count ? count : 0}</div>;
};
