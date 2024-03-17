import styles from "./clear-cart.module.scss";
import { Button } from "@shared/theme/button";

interface ClearCartProps {
  className?: string;
}

export const ClearCart = ({ className }: ClearCartProps) => {
  return (
    <div className={styles.wrapper}>
      <Button.Secondary>Очистить корзину</Button.Secondary>
    </div>
  );
};
