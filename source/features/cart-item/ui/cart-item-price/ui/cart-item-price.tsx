import styles from "./cart-item-price.module.scss";
import { useCallback } from "react";

interface CartItemPriceProps {
  originalPrice: number;
  salePrice: number;
}

export const CartItemPrice = ({
  originalPrice,
  salePrice,
}: CartItemPriceProps) => {
  const saleValue = ((originalPrice - salePrice) / originalPrice) * 100;

  return (
    <div>
      {saleValue === 0 ? (
        <div className={styles.commonPrice}>{originalPrice / 100} ₽</div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.salePrice}>{salePrice / 100} ₽</div>
          <div className={styles.originalPrice}>{originalPrice / 100} ₽</div>
          <div className={styles.saleValue}>-{saleValue}%</div>
        </div>
      )}
    </div>
  );
};
