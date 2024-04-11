import { createEffect, createEvent, createStore, sample } from "effector";
import { IProductCart } from "../cart/cart.interface";
import axios from "axios";
import { API_URL_CLIENT } from "@/source/shared/api/http/custom-instance";
import { addFavotitesToStorage } from "@shared/utils/localStorage/localStorage";

const $favorites = createStore<IProductCart[]>([]);
const mounted = createEvent();
const addFavorite = createEvent<IProductCart>();
const removeFavorite = createEvent<IProductCart>();

const addToStorageFx = createEffect((favorites: IProductCart[]) => {
  addFavotitesToStorage(favorites);
});

export const getFavoritesFx = createEffect(async () => {
});

const addToServerFx = createEffect(async (id: number) => {
  const res = await axios.post(
    `${API_URL_CLIENT}profile/favorites/`,
    {
      product_id: id
    },
    { withCredentials: true }
  );

  if (res.status < 300) throw new Error("err");
});

sample({
  clock: mounted,
  fn: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
  target: $favorites
});

sample({
  clock: addFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    let flag = true;

    favorites.forEach((favorite) => {
      if (favorite.id === item.id) flag = false;
    });

    if (flag) return [item, ...favorites];
    else return favorites;
  },
  target: [$favorites, addToStorageFx]
});

sample({
  clock: removeFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    return favorites.filter((favorit) => item.id !== favorit.id);
  },
  target: [$favorites, addToStorageFx]
});

export { $favorites, mounted, addFavorite, removeFavorite, addToServerFx };
