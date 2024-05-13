"use client";

import styles from "./cart-page.module.scss";
import { useUnit } from "effector-react";
import { IProductCart } from "@/stores/cart/cart.interface";
import { EmptyCart } from "@/components/emptyCart/EmptyCart";
import { OrderDetails } from "@/source/features/order-details";
import { ClearCart } from "@/source/features/clear-cart/";
import { CartItem } from "@/source/features/cart-item";
import { $cart } from "@entities/cart/model/cart-model";
import { ClearCartConfirm } from "@/source/features/clear-cart-confirm/ui/clear-cart-confirm";

type Props = {};

export const CartPage = (props: Props) => {
  const products = useUnit($cart);

  const res = products.sort(function(a: IProductCart, b: IProductCart) {
    if (a.id && b.id) return a.id - b.id;
    else return 0;
  });

  return (
    <div className={styles.wrapper}>
      <ClearCartConfirm />
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
