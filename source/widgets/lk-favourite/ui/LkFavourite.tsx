'use client';
import React from 'react';
import { ItemFavourite } from '@/source/features/item-faavourite';
import { $favorites, Favorite, getFavoritesFx } from '@entities/favorite/model/favorite-model';
import { useUnit } from 'effector-react';
import { FavoritesEmpty } from '@entities/favorite/ui/favorites-empty/favorites-empty';
import { Skeleton } from '@shared/ui/shadcn/ui/skeleton';

export const LkFavourite = () => {
  const favourites = useUnit($favorites);
  const loading = useUnit(getFavoritesFx.pending);

  if (loading && !favourites) return <Skeleton className="bg-black-50 h-[100px] rounded w-full" />;

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
