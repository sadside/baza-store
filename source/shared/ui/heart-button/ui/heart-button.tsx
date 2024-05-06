'use client';

import styles from './heart-button.module.scss';
import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect, useState } from 'react';
import CheckedHeartIcon from '@shared/assets/icons/CheckedHeartIcon.svg';
import UncheckedHeartIcon from '@shared/assets/icons/UncheckedHeartIcon.svg';
import { useUnit } from 'effector-react';

import { $favorites, favoriteAdded, favoriteRemoved } from '@entities/favorite/model/favorite-model';

interface HeartButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  checked: boolean;
  onClick?: () => void;
  fill?: string;
  height?: number;
  width?: number;
  slug: string;
}

export const HeartButton = ({ height = 20, fill = '#A2A2A2', width = 20, slug }: HeartButtonProps) => {
  const favorites = useUnit($favorites);

  const [isFavorite, setFavorite] = useState(false);

  useEffect(() => {
    favorites?.forEach((item) => {
      if (slug.includes(item.slug)) {
        setFavorite(true);
      }
    });
  }, [favorites]);

  const handleClick = () => {
    setFavorite(!isFavorite);

    if (!isFavorite) {
      favoriteAdded(slug);
    } else {
      favoriteRemoved(slug);
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
