"use client";

import React, { useEffect } from "react";
import styles from "./CartPage.module.scss";
import { useUnit } from "effector-react";
import {
  $cart,
  $user,
  addToServerFx,
  getCartFromLocalStorageFx,
  getCartFromServerFx,
  removeCartItem,
} from "@/stores/cart/init";
import { CartItem } from "@/components/cartItem/CartItem";
import { getPriceFromCart } from "@/utils/getFullPrice";
import Button from "@/components/ui/button/Button";
import { IProductCart } from "@/stores/cart/cart.interface";
import { getSalePriceFromCart } from "@/utils/getSalePrice";
import { useRouter } from "next/navigation";
import { EmptyCart } from "@/components/emptyCart/EmptyCart";
import { formatMany, formatManyofFull } from "@/utils/formatMany";

type Props = {};

export const CartPage = (props: Props) => {
  const products = useUnit($cart);
  const { push } = useRouter();
  const user = useUnit($user);

  const res = products.sort(function (a: IProductCart, b: IProductCart) {
    if (a.id && b.id) return a.id - b.id;
    else return 0;
  });

  useEffect(() => {
    if (user) getCartFromServerFx();
    else getCartFromLocalStorageFx();
  }, []);

  const fullPrice = getSalePriceFromCart(products);
  const salePrice = getPriceFromCart(products);

  return (
    <div className={styles.wrapper}>
      <h1>Корзина</h1>
      {products.length ? (
        <div className={styles.columns}>
          <div className={styles.products}>
            {res.map(
              ({
                size,
                name,
                count,
                price,
                id,
                image,
                color,
                old_price = 0,
                slug,
                server_count,
              }) => (
                <CartItem
                  size={size}
                  name={name}
                  count={count}
                  price={price}
                  server_count={server_count}
                  key={id}
                  id={id}
                  slug={slug}
                  image={image}
                  color={color}
                  old_price={old_price}
                />
              ),
            )}
          </div>
          <div className={styles.right}>
            <div className={styles.makeOrder}>
              <div className={styles.title}>Детали заказа</div>
              <div className={styles.orderInfo}>
                <div className={styles.columnsOrder}>
                  <div>Товары, {products.length} шт.</div>
                  <div className={styles.price}>
                    {formatManyofFull(fullPrice)} ₽
                  </div>
                </div>
                {fullPrice - salePrice > 0 && (
                  <div className={styles.columnsOrder}>
                    <div>
                      Скидка <span>BAZA</span>
                    </div>
                    <div className={styles.sale}>
                      {`-${formatManyofFull(fullPrice - salePrice)}₽`}
                    </div>
                  </div>
                )}
                <div className={`${styles.columnsOrder} ${styles.total}`}>
                  <div>
                    <span>ИТОГО</span>
                  </div>
                  <div>
                    <span>{formatManyofFull(salePrice)} ₽</span>
                  </div>
                </div>
                <div className={styles.text}>
                  Стоимость доставки рассчитывается после оформления заказа
                </div>
              </div>

              <Button
                text="ОФОРМИТЬ ЗАКАЗ"
                style={{ marginTop: 40 }}
                onClick={() => push("/order")}
              />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
