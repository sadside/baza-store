'use client';
import React from 'react';
import { ItemFavourite } from '@/source/features/item-faavourite';
import { $favorites, Favorite } from '@entities/favorite/model/favorite-model';
import { useUnit } from 'effector-react';
import { FavoritesEmpty } from '@entities/favorite/ui/favorites-empty/favorites-empty';

export const LkFavourite = () => {
  const favourites = useUnit($favorites);

  return (
    <>
      {favourites?.length ? (
        <div className="flex justify-around flex-wrap">
          {favourites.map((f) => (
            <ItemFavourite item={f} />
          ))}
        </div>
      ) : (
        <FavoritesEmpty />
      )}
    </>
  );
};
