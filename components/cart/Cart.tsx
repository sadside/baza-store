import { $cart, $showCart, mouseLeavedFromCart } from "@/stores/cart/init";
import { useUnit } from "effector-react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Cart.module.scss";
import { DropdownCartItem } from "../ui/dropdownCartItem/DropdownCartItem";
import { IProductCart } from "@/stores/cart/cart.interface";
import Button from "../ui/button/Button";
type Props = {};

export const Cart = (props: Props) => {
  const showCart = useUnit($showCart);
  const products = useUnit($cart);

  if (typeof window !== "undefined") {
    const products: IProductCart[] = JSON.parse(
      localStorage.getItem("products") || "[]"
    );
  }

  let totalPrice = 0;

  products.forEach(({ price, count }) => {
    totalPrice += count ? price * count : price;
  });

  const handleMouseLeave = () => {
    mouseLeavedFromCart();
  };

  return (
    <AnimatePresence>
      {showCart && products.length && (
        <motion.div
          className={styles.wrapper}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.35,
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className={styles.items}>
            {products?.map(({ name, price, id, image, count, size }) => (
              <DropdownCartItem
                name={name}
                price={price}
                key={id}
                image={image}
                id={id}
                count={count}
                size={size}
              />
            ))}
          </div>
          <div className={styles.makeOrder}>
            <div className={styles.totalPrice}>
              <div>Итоговая цена без учета доставки:</div>
              <div className={styles.tPrice}>{`${totalPrice} ₽`}</div>
            </div>
            <Button
              text="Оформить заказ"
              style={{
                width: "100%",
                textTransform: "uppercase",
                fontSize: 12,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
