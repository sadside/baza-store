'use client';
import styles from './ProductInfo.module.scss';
import { MainInfoProduct } from '../mainInfoProduct/MainInfoProduct';
import { Hr } from '../ui/hr/Hr';
import { SelectProductColor } from '../selectProductColor/SelectProductColor';
import { SelectProductSize } from '../selectSizeProduct/SelectProductSize';
import { SubProductInfo } from '../subProductInfo/SubProductInfo';
import { ProductDetails } from '../productDetails/ProductDetails';
import { useGate, useUnit } from 'effector-react';
import { IFullProduct } from '@shared/types/models/Product';
import { useEffect } from 'react';
import { Button } from '@shared/theme/button';
import { $cart, productAddedToCart, productDecremented, productIncremented } from '@entities/cart/model/cart';
import { $productInCart, $selectedSize, productGate, sizeSelected } from '@entities/product/model/product-model';
import { CartDrawer } from '@widgets/cart-drawer/ui/cart-drawer';

type Props = {
  product: IFullProduct;
};

export const ProductInfo = ({ product }: Props) => {
  const selectedSize = useUnit($selectedSize) as {
    name: string;
    mod_id: number;
    quantity: number;
    slug: string;
  };

  useGate(productGate, product);

  const productInCart = useUnit($productInCart);

  const loading = false;

  const handleAddToCartClick = () => {
    productAddedToCart({
      id: selectedSize.mod_id,
      price: product.price,
      name: product.name,
      image: product.images[0],
      size: selectedSize.name,
      color: product.current_color.name,
      quantityInCart: 1,
      slug: selectedSize?.slug || '',
      old_price: product.old_price > 0 ? product.old_price : product.price,
      quantityInShop: selectedSize?.quantity || 0,
    });
  };

  const handlePlusClick = () => {
    productIncremented(selectedSize?.slug);
  };

  const handleMinusClick = () => {
    productDecremented(selectedSize?.slug);
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.wrapper}>
        <MainInfoProduct product={product} />
        <Hr />
        <SelectProductColor colours={product.colors} current_color={product.current_color} />
        <Hr />
        <SelectProductSize sizes={product.sizes} />
        {productInCart?.quantityInCart && productInCart?.quantityInCart > 0 ? (
          <Button.Count
            value={productInCart?.quantityInCart}
            plusAction={handlePlusClick}
            minusAction={handleMinusClick}
            plusNotAllowed={
              selectedSize?.quantity ? selectedSize?.quantity - productInCart?.quantityInCart === 0 : false
            }
          >
            {productInCart?.quantityInCart}
          </Button.Count>
        ) : (
          <Button.Primary loading={loading} onClick={handleAddToCartClick} disabled={selectedSize?.quantity <= 0}>
            {selectedSize?.quantity <= 0 ? 'Нет в наличии' : 'Добавить в корзину'}
          </Button.Primary>
        )}
        <ProductDetails />
      </div>
    </div>
  );
};
