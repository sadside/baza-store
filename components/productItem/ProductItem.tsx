'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductItem.module.scss';
import { IProduct } from '@shared/types/models/Product';

export const formatter = new Intl.NumberFormat('ru', {
  style: 'unit',
  unit: 'meter',
  unitDisplay: 'long',
});

const ProductItem = ({ images, product_id, name, price, colors_count, slug }: IProduct) => {
  return (
    <Link className={styles.product} href={`/products/${slug}`}>
      <Image
        src={images[0]}
        alt={'j'}
        className="w-full object-cover"
        objectFit="cover"
        objectPosition="center"
        height={460}
        width={250}
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className={styles.infoWrap}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{price / 100} ₽</div>
        <div className={styles.countColor}>{formatter.format(colors_count || 1).replace('метр', 'цвет')}</div>
      </div>
    </Link>
  );
};

export default ProductItem;
