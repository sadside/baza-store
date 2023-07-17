import { $showCart, mouseLeavedFromCart } from "@/stores/cart/init";
import { useUnit } from "effector-react";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./Cart.module.scss";
type Props = {};

export const Cart = (props: Props) => {
  const showCart = useUnit($showCart);

  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.7,
          }}
        >
          <div onMouseLeave={mouseLeavedFromCart}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            labore mollitia assumenda, autem, magni modi nobis quidem eveniet
            fuga eaque sapiente sint, neque laboriosam quisquam voluptatum?
            Excepturi, repellendus. Magnam, provident.
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
