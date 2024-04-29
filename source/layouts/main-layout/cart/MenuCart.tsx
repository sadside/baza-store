'use client';

import { useUnit } from 'effector-react';
import React from 'react';

import styles from './MenuCart.module.scss';
import { $cart, addProductToServerFx, getCartFromServerFx } from '@entities/cart/model/cart-model';
import { Loader } from '@/components/loader/Loader';

type Props = {};

export const MenuCart = (props: Props) => {
  const products = useUnit($cart);

  const countsProducts = products.map((item) => (item.quantityInCart ? item.quantityInCart : 0));

  const initialValue = 0;

  const productsLoading = useUnit(getCartFromServerFx.pending);

  const count = countsProducts.reduce((prev, current) => {
    return prev + current;
  }, initialValue);

  return <div className={styles.count}>{productsLoading ? <Loader height={18} width={18} /> : count}</div>;
};
