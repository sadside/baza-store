import styles from './cart-item.module.scss';
import { IProductCart } from '@/stores/cart/cart.interface';
import test from '@shared/assets/pic.png';
import Image from 'next/image';
import { CartItemPrice } from '@/source/features/cart-item/ui/cart-item-price/ui/cart-item-price';
import { HeartButton } from '@shared/ui/heart-button/ui/heart-button';
import { CartItemsActions } from '@/source/features/cart-items-actions';

interface CartItemProps {
  product: IProductCart;
}

export const CartItem = ({ product }: CartItemProps) => {
  const { id, image, name, color, size, old_price, price } = product;

  return (
    <div className={styles.wrapper}>
      <Image src={image} alt="При загрузке изображения произошла ошибка" width={130} height={170} />
      <div className={styles.content}>
        <div className={styles.title}>
          <div>
            <h2>
              {name} <br />({color}, {size})
            </h2>
            <CartItemPrice originalPrice={old_price || price} salePrice={price} />
          </div>
          <div>
            <HeartButton checked={true} slug={product.slug} />
          </div>
        </div>
        <CartItemsActions product={product} />
      </div>
    </div>
  );
};
