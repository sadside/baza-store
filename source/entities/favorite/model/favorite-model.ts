'use client';
import { createEvent, createStore, sample, split } from 'effector';
import { createEffect } from 'effector';
import { $apiWithGuard } from '@shared/api/http/axios-instance';
import { loginFx } from '@entities/user/model/user-model';

export interface Favorite {
  name: string;
  price: number;
  image: string;
  slug: string;
}

export const favoriteAdded = createEvent<string>();
export const favoriteRemoved = createEvent<string>();

export const addFavoriteFx = createEffect(async (slug: string) => {
  try {
    const res = await $apiWithGuard.post(`profile/favorites/`, {
      slug,
    });

    return res.data as Favorite[];
  } catch {
    return [];
  }
});

export const getFavoritesFx = createEffect(async () => {
  try {
    const res = await $apiWithGuard.get(`profile/favorites/`);

    return res.data as Favorite[];
  } catch {
    return [];
  }
});

export const deleteFavoriteFx = createEffect(async (slug: string) => {
  try {
    const res = await $apiWithGuard.delete(`profile/favorites/?slug=${slug}`);

    return res.data as Favorite[];
  } catch {
    return [];
  }
});

export const $favorites = createStore<Favorite[] | null>(null);

sample({
  clock: favoriteAdded,
  target: addFavoriteFx,
});

sample({
  clock: favoriteRemoved,
  target: deleteFavoriteFx,
});

sample({
  clock: [getFavoritesFx.doneData, deleteFavoriteFx.doneData, addFavoriteFx.doneData],
  target: $favorites,
});
