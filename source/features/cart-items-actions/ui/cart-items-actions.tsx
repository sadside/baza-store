import styles from "./cart-items-actions.module.scss";
import {
  $user,
  addToServerFx,
  productCounDecremented,
  productCountIncremented,
  removeCartItem,
} from "@/stores/cart/init";
import React from "react";
import { useUnit } from "effector-react";
import { IProductCart } from "@/stores/cart/cart.interface";

interface CartItemsActionsProps {
  product: IProductCart;
}

export const CartItemsActions = ({ product }: CartItemsActionsProps) => {
  const user = useUnit($user);

  const { count, server_count } = product;

  const isLoading1 = useUnit(addToServerFx.pending);
  const isLoading2 = useUnit(removeCartItem.pending);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.count}>
          Количество:
          <span
            onClick={() => {
              if (!isLoading2 && !isLoading1) {
                if (!user) {
                  productCounDecremented(product);
                }

                if (user && product?.id) removeCartItem(product.id);
              }
            }}
          >
            -
          </span>
          <span>{count}</span>
          <span
            onClick={() => {
              if (!isLoading2 && !isLoading1 && count && count < server_count) {
                if (!user) productCountIncremented(product);

                if (user && count && count < server_count)
                  product?.id && addToServerFx(product.id);
              }
            }}
          >
            +
          </span>
        </div>
        <div className={styles.removeProduct}>Удалить</div>
      </div>
    </>
  );
};
