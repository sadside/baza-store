'use client';

import { IProductCart } from '@/stores/cart/cart.interface';
import { $cart } from '@/stores/cart/init';
import { useUnit } from 'effector-react';
import React from 'react';
import { number } from 'yup';

import styles from './MenuCart.module.scss';

type Props = {};

export const MenuCart = (props: Props) => {
  const products = useUnit($cart);

  const countsProducts = products.map((item) => (item.quantityInCart ? item.quantityInCart : 0));

  const initialValue = 0;

  const count = countsProducts.reduce((prev, current) => {
    return prev + current;
  }, initialValue);

  return <div className={styles.count}>{count}</div>;
};
