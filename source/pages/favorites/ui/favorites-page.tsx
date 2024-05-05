'use client';

import React from 'react';
import { useUnit } from 'effector-react';
import { LkFavourite } from '@widgets/lk-favourite';
import { $favorites, Favorite } from '@entities/favorite/model/favorite-model';

export const FavoritesPage = () => {
  return <LkFavourite />;
};
