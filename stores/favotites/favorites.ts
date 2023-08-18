import { createEffect, createEvent, createStore, sample } from "effector";
import { IProductCart } from "../cart/cart.interface";
import { addFavotitesToStorage } from "@/utils/localStorage/localStorage";


const $favorites = createStore<IProductCart[]>([])
const mounted = createEvent()
const addFavorite = createEvent<IProductCart>()
const removeFavorite = createEvent<IProductCart>()

const addToStorageFx = createEffect((favorites: IProductCart[]) => {
  addFavotitesToStorage(favorites)
})

sample({
  clock: mounted,
  fn: () => (JSON.parse(localStorage.getItem('favorites') || '[]')),
  target: $favorites
})

sample({
  clock: addFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    let flag = true

    favorites.forEach(favorite => {
      if (favorite.id === item.id && favorite.color === item.color && favorite.size === item.size) flag = false
    })

    if (flag) return [item, ...favorites]
    else return favorites
  },
  target: [$favorites, addToStorageFx]
})

sample({
  // @ts-ignore
  clock: removeFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    return favorites.map((favorite) => {
      if (favorite.id === item.id && favorite.color === item.color && favorite.size === item.size) {
        return undefined
      } else {
        return favorite
      }

    }).filter(item => item !== undefined)
  },
  target: [$favorites, addToStorageFx]
})




export {$favorites, mounted, addFavorite, removeFavorite}

