import React from 'react';
import styles from './SelectProductSize.module.scss';
import clsx from 'clsx';
import { useUnit } from 'effector-react';
import { $selectedSize, sizeSelected } from '@entities/product/model/product-model';

type Props = {
  sizes: {
    name: string;
    mod_id: number;
    quantity: number;
    slug: string;
  }[];
};

export const SelectProductSize = ({ sizes }: Props) => {
  const selectedSize = useUnit($selectedSize);

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.sizeTitle}>
          <div className={styles.title}>Размер:</div>
        </div>
        <div className={styles.sizeItems}>
          {sizes.map((size) => {
            return (
              <div
                className={clsx({
                  [styles.sizeItem]: true,
                  [styles.active]: selectedSize?.slug === size.slug,
                  'text-black-100': selectedSize?.quantity === 0,
                })}
                onClick={() => sizeSelected(size)}
                key={size.mod_id}
              >
                {size.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
