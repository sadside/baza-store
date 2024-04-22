'use client';

import styles from './heart-button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from 'react';
import CheckedHeartIcon from '@shared/assets/icons/CheckedHeartIcon.svg';
import UncheckedHeartIcon from '@shared/assets/icons/UncheckedHeartIcon.svg';
import { useUnit } from 'effector-react';
import {
  $favorites,
  $user,
  addFavorite,
  addFavoriteToServerFx,
  deleteFavoriteToServerFx,
  removeFavorite,
} from '@/stores/cart/init';
import { IProductCart } from '@/stores/cart/cart.interface';
import { IFullProduct } from '@shared/types/models/Product';

interface HeartButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  checked: boolean;
  onClick?: () => void;
  fill?: string;
  height?: number;
  width?: number;
  slug: string;
}

export const HeartButton = ({ height = 20, fill = '#A2A2A2', width = 20, slug }: HeartButtonProps) => {
  const user = useUnit($user);

  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites.forEach((item) => {
      if (item === slug) {
        setFavorite(true);
      }
    });
  }, [favorites]);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      addFavorite(slug);

      if (user) addFavoriteToServerFx(slug);
    } else {
      removeFavorite(slug);
      if (user) deleteFavoriteToServerFx(slug);
    }
  };

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {isFavorite ? (
        <CheckedHeartIcon height={height} width={width} style={{ fill }} />
      ) : (
        <UncheckedHeartIcon height={height} width={width} style={{ fill }} />
      )}
    </button>
  );
};
