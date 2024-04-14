"use client";

import React, { useEffect } from "react";
import styles from "./cart-page.module.scss";
import { useUnit } from "effector-react";
import { $cart, $user, getCartFromLocalStorageFx, getCartFromServerFx } from "@/stores/cart/init";
import { IProductCart } from "@/stores/cart/cart.interface";
import { EmptyCart } from "@/components/emptyCart/EmptyCart";
import { OrderDetails } from "@/source/features/order-details";
import { ClearCart } from "@/source/features/clear-cart/";
import { CartItem } from "@/source/features/cart-item";

type Props = {};

export const CartPage = (props: Props) => {
  const products = useUnit($cart);

  const user = useUnit($user);

  const res = products.sort(function(a: IProductCart, b: IProductCart) {
    if (a.id && b.id) return a.id - b.id;
    else return 0;
  });

  useEffect(() => {
    if (user) getCartFromServerFx();
    else getCartFromLocalStorageFx();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Корзина</h1>
      {products?.length ? (
        <div className={styles.columns}>
          <div className={styles.products}>
            {res.map((product) => (
              <CartItem product={product} />
            ))}
          </div>
          <div className={styles.right}>
            <OrderDetails />
            <ClearCart />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
