import { addProductToStorage } from "@/utils/localStorage/localStorage";
import { createEffect, createEvent, createStore, sample } from "effector";
import { IProductCart } from "./cart.interface";
import { dropdownMenuOpened, smallMenuClosed } from "../layout/menu/init";
import {
  createListWithNewProduct,
  decrementProductCount,
  incrementProductCount,
  normilzeProductCount,
} from "./cart.helper";
import { IUser } from "@/models/User";
import axios from "axios";
import { API_URL_CLIENT } from "@/http";
import { IServerCart } from "@/models/Cart";
import AuthService from "@/services/AuthService";
import { addFavotitesToStorage } from "@/utils/localStorage/localStorage";
import { IServerFavorite } from "@/models/Favorites";
import { createOrderFx } from "@/stores/order/init";
import { toast } from "react-toastify";

const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products);
});

export const addToServerFx = createEffect(async (id: number) => {
  try {
    const res = await axios.post(
      `${API_URL_CLIENT}profile/cart/add/`,
      {
        modification_id: id,
      },
      {
        withCredentials: true,
      },
    );

    return res.data as IServerCart[];
  } catch (e) {
    return [];
  }
});

export const synchronizationWithLocalStorage = createEffect(async () => {
  const products = localStorage.getItem("products") as string;

  const cart = JSON.parse(products);

  const body: {
    modifications: number[];
    quantities: number[];
  } = {
    modifications: [],
    quantities: [],
  };

  cart.forEach((item: any) => {
    body.modifications.push(item.id);
    body.quantities.push(item.count);
  });

  try {
    const { data } = await axios.post(`${API_URL_CLIENT}profile/cart/`, body, {
      withCredentials: true,
    });

    const result: IProductCart[] = [];

    data.forEach((item: IServerCart) => {
      result.push({
        id: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        count: item.quantity,
        size: item.product.size,
        color: item.product.color,
        slug: item.product.slug,
        old_price: item.product.old_price || item.product.price,
        server_count: item.product.quantity,
      });
    });

    return result;
  } catch (e: any) {
    console.log(e.message());
    return [];
  }
});

export const decrementProductCountServer = createEffect(
  async ({ id, quantity }: { id: number; quantity: number }) => {
    try {
      const res = await axios.post(`${API_URL_CLIENT}profile/cart/remove/`, {
        modification_id: id,
      });

      return res.data as IServerCart[];
    } catch {
      // throw new Error('Ошибка.')
      return [];
    }
  },
);

export const productNormalized = createEvent<IProductCart>();

export const getCartFromServerFx = createEffect(async () => {
  try {
    const res = await axios.get(`${API_URL_CLIENT}profile/cart/`);

    return res.data as IServerCart[];
  } catch {
    return [];
  }
});

export const getCartFromLocalStorageFx = createEffect<void, IProductCart[]>(
  () => {
    return JSON.parse(
      localStorage.getItem("products") || "[]",
    ) as IProductCart[];
  },
);

const productAddedToCart = createEvent<IProductCart>();
const pageMounted = createEvent<IUser>();
const mouseLeavedFromCart = createEvent<any>();
const mouseEnteredToCart = createEvent<any>();
const productCountIncremented = createEvent<IProductCart>();
const productCounDecremented = createEvent<IProductCart>();
export const logouted = createEffect();

export const removeCartItem = createEffect(async (id: number) => {
  try {
    const { data } = await axios.post(`${API_URL_CLIENT}profile/cart/remove/`, {
      modification_id: id,
    });

    const result: IProductCart[] = [];

    data.forEach((item: IServerCart) => {
      result.push({
        id: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        count: item.quantity,
        size: item.product.size,
        color: item.product.color,
        slug: item.product.slug,
        old_price: item.product.old_price || item.product.price,
        server_count: item.product.quantity,
      });
    });

    return result;
  } catch {
    return [];
  }
});

export const logoutFx = createEffect(async () => {
  await AuthService.logout();
});

const $showCart = createStore(false)
  .on(mouseEnteredToCart, () => true)
  .on(mouseLeavedFromCart, () => false);
const $cart = createStore<IProductCart[]>([]).reset(
  logoutFx,
  createOrderFx.doneData,
);

sample({
  clock: [dropdownMenuOpened, smallMenuClosed],
  target: mouseLeavedFromCart,
});

sample({
  clock: createOrderFx.doneData,
  fn: () => [],
  target: addToStorageFx,
});

sample({
  // @ts-ignore
  clock: productNormalized,
  source: $cart,
  fn: normilzeProductCount,
  target: $cart,
});

sample({
  clock: productCountIncremented,
  source: {
    cart: $cart,
  },
  filter: ({ cart }, product) => {
    const addedProduct = cart.find((item) => item.slug === product.slug);

    if (addedProduct && product.count) {
      if (addedProduct.server_count - product.count > 0) {
        return true;
      } else {
        toast.error("Нет в наличии");
      }
    }

    return false;
  },
  fn: incrementProductCount,
  target: [addToStorageFx, $cart],
});

sample({
  //@ts-ignore
  clock: productCounDecremented,
  source: {
    cart: $cart,
  },
  filter: ({ cart }: { cart: IProductCart[] }, product: IProductCart) => {
    const addedProduct = cart.find((item) => item.slug === product.slug);

    if (addedProduct && product.count) {
      if (addedProduct.server_count - product.count >= 0) {
        return true;
      } else {
        normilzeProductCount();
      }
    }

    return false;
  },
  fn: decrementProductCount,
  target: [addToStorageFx, $cart],
});

sample({
  clock: getCartFromLocalStorageFx,
  fn: () =>
    JSON.parse(localStorage.getItem("products") || "[]") as IProductCart[],
  target: $cart,
});

sample({
  clock: productAddedToCart,
  source: $cart,
  filter: (cart, product) => {
    const addedProduct = cart.find((item) => item.slug === product.slug);

    if (addedProduct && product.count) {
      if (addedProduct.server_count - product.count > 0) {
        return true;
      } else {
        toast.error("Нет в наличии");
        return false;
      }
    } else {
      return true;
    }
  },
  fn: createListWithNewProduct,
  target: [addToStorageFx, $cart],
});

$cart.watch((state) => console.log(state));

sample({
  clock: [addToServerFx.doneData, getCartFromServerFx.doneData],
  fn: (items) => {
    if (items.length) {
      const cart: IProductCart[] = items.map((item) => {
        return {
          id: item.product.id,
          name: item.product.name,
          image: item.product.image,
          price: item.product.price,
          count: item.quantity,
          size: item.product.size,
          color: item.product.color,
          slug: item.product.slug,
          old_price: item.product.old_price || item.product.price,
          server_count: item.product.quantity,
        };
      });
      return cart;
    }

    return [];
  },
  target: [$cart, addToStorageFx],
});

export const phoneInputSubmitted = createEvent<string>();
export const codeInputSubmitted = createEvent<{
  phone: string;
  code: string;
}>();

// sample({
//   clock: synchronizationWithLocalStorage.doneData,
//   fn: (items) => {

//     if (items.length) {
//       const cart: IProductCart[] = items.map(item => {
//         return {
//           id: item.product.id,
//           name: item.product.name,
//           image: item.product.image,
//           price: item.product.price,
//           count: item.quantity,
//           size: item.product.size,
//           color: item.product.color,
//           slug: item.product.slug
//         }
//       })
//       return cart
//     }

//     return []
//   },
//   target: $cart,
// })

export const postUserFx = createEffect(async (data: any) => {
  try {
    // const date = data.date.split('.').reverse().join('-')

    data = {
      name: data.name,
      surname: data.surname,
      birthday_date: data.date,
      city: data.city,
      street: data.street,
      house: data.house,
      frame: data.frame,
      apartment: data.room,
      email: data.mail,
    };

    console.log(data);

    const res = await axios.post(`${API_URL_CLIENT}profile/info/`, data);

    console.log(res);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.status);
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
});

export const saveUser = createEvent();

sample({
  clock: logouted,
  target: logoutFx,
});

export const $user = createStore<IUser | null>(null)
  .on(saveUser, (_, state) => state)
  .on(postUserFx.doneData, (_, payload) => payload)
  .reset(logoutFx.doneData);

$user.watch((state) => console.log("user: ", state));

export const loginFx = createEffect(
  async ({ phone, code }: { phone: string; code: string }) => {
    try {
      const res = await AuthService.login(phone, code);

      return res.data;
    } catch (e: any) {
      console.log(e.message());
      return null;
    }
  },
);

export const getUserFx = createEffect(async () => {
  try {
    const res = await AuthService.getUser();

    return res.data;
  } catch (e: any) {
    console.log(e.message());
    return null;
  }
});

export const $loading = createStore(true).on(getUserFx.finally, () => false);

export const $phoneNumber = createStore<string>("")
  .on(phoneInputSubmitted, (_, newState) => newState)
  .reset(loginFx.doneData);

sample({
  clock: codeInputSubmitted,
  target: loginFx,
});

sample({
  clock: getUserFx.doneData,
  target: [$user, getCartFromServerFx],
});

sample({
  clock: loginFx.doneData,
  target: $user,
});

// sample({

// })

sample({
  clock: loginFx.doneData,
  target: synchronizationWithLocalStorage,
});

sample({
  //@ts-ignore
  clock: synchronizationWithLocalStorage.doneData,
  target: $cart,
});

sample({
  clock: postUserFx.doneData,
  target: $user,
});

// favotites

const $favorites = createStore<string[]>([]).reset(logouted);
export const $favoritesItems = createStore<IServerFavorite[]>([]);
const mounted = createEvent();
const addFavorite = createEvent<string>();
const removeFavorite = createEvent<string>();

const addFavoriteToStorageFx = createEffect((favorites: IProductCart[]) => {
  addFavotitesToStorage(favorites);
});

export const getFavoritesFx = createEffect(async () => {
  try {
    const res = await axios.get(`${API_URL_CLIENT}profile/favorites/`);

    return res.data as IServerFavorite[];
  } catch {
    return [];
  }
});

export const addFavoriteToServerFx = createEffect(
  async (slug: string | string[]) => {
    try {
      const res = await axios.post(
        `${API_URL_CLIENT}profile/favorites/`,
        {
          slug,
        },
        { withCredentials: true },
      );

      return res.data as IServerFavorite[];
    } catch {
      return [];
    }
  },
);

export const deleteFavoriteToServerFx = createEffect(
  async (slug: string | string[]) => {
    try {
      const res = await axios.delete(
        `${API_URL_CLIENT}profile/favorites/?slug=${slug}`,
      );

      return res.data as IServerFavorite[];
    } catch {
      return [];
    }
  },
);

sample({
  clock: mounted,
  fn: () => JSON.parse(localStorage.getItem("favorites") || "[]"),
  target: $favorites,
});

sample({
  clock: loginFx.doneData,
  source: $favorites,
  target: addFavoriteToServerFx,
});

sample({
  clock: [
    addFavoriteToServerFx.doneData,
    deleteFavoriteToServerFx.doneData,
    getFavoritesFx.doneData,
  ],
  target: $favoritesItems,
});

sample({
  clock: logouted,
});

sample({
  clock: addFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    favorites.push(item);

    const settedFavorites = new Set(favorites);

    return Array.from(settedFavorites);
  },
  target: [$favorites, addFavoriteToStorageFx],
});

sample({
  clock: removeFavorite,
  source: $favorites,
  fn: (favorites, item) => {
    return favorites.filter((favorite) => favorite !== item);
  },
  target: [$favorites, addFavoriteToStorageFx],
});

//  watch

$user.watch((state) => console.log(state));
$cart.watch((state) => console.log("cart: ", state));
$favorites.watch((state) => console.log("fav", state));

export {
  $favorites,
  mounted,
  addFavorite,
  removeFavorite,
  mouseEnteredToCart,
  mouseLeavedFromCart,
  $cart,
  $showCart,
  addToStorageFx,
  productAddedToCart,
  pageMounted,
  productCountIncremented,
  productCounDecremented,
};
