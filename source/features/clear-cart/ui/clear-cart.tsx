import styles from './clear-cart.module.scss';
import { Button } from '@shared/theme/button';
import { cartModalStateChanged } from '@/source/features/clear-cart-confirm/model/clear-cart-confirm-model';

interface ClearCartProps {
  className?: string;
}

export const ClearCart = ({ className }: ClearCartProps) => {
  return (
    <div className={styles.wrapper} onClick={() => cartModalStateChanged(true)}>
      <Button.Secondary>Очистить корзину</Button.Secondary>
    </div>
  );
};
