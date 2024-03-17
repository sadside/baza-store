import styles from "./order-details.module.scss";
import React from "react";
import { getSalePriceFromCart } from "@shared/utils/getSalePrice";
import { getPriceFromCart } from "@shared/utils/getFullPrice";
import { useUnit } from "effector-react";
import { $cart } from "@/stores/cart/init";
import PartsLogo from "@shared/assets/icons/parts.svg";
import RightArrow from "@shared/assets/icons/tui-ic-small-pragmatic/chevron-right.svg";
import { Button } from "@shared/theme/button";

interface OrderDetailsProps {
  className?: string;
}

export const OrderDetails = ({}: OrderDetailsProps) => {
  const products = useUnit($cart);

  const fullPrice = getSalePriceFromCart(products);
  const salePrice = getPriceFromCart(products);

  return (
    <div className={styles.makeOrder}>
      <div className={styles.title}>Детали заказа</div>
      <div className={styles.orderInfo}>
        <div className={styles.columnsOrder}>
          <div>Товары, {products.length} шт.</div>
          <div className={styles.price}>{fullPrice} ₽</div>
        </div>
        {fullPrice - salePrice > 0 && (
          <div className={styles.columnsOrder}>
            <div>
              Скидка <span>BAZA</span>
            </div>
            <div className={styles.sale}>{`-${fullPrice - salePrice}₽`}</div>
          </div>
        )}
        <div className={`${styles.columnsOrder} ${styles.total}`}>
          <div>
            <span>ИТОГО</span>
          </div>
          <div>
            <span>{salePrice} ₽</span>
          </div>
        </div>
      </div>
      <button className={styles.partsPayment}>
        <PartsLogo />
        <div className={styles.value}>4 платежа по {salePrice / 4}</div>
        <RightArrow />
      </button>
      <Button.Primary style={{ marginBottom: 16 }}>
        Оформить заказ
      </Button.Primary>
      <p className={styles.loyaltyInfo}>
        АВТОРИЗУЙТЕСЬ, ЧТОБЫ СПИСАТЬ ИЛИ НАКОПИТЬ БАЛЛЫ
      </p>
    </div>
  );
};
