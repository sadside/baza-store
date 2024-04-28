'use client';

import { createDomain, createEffect, createEvent, createStore, merge, sample, split } from 'effector';
import { IProductCart } from '@/stores/cart/cart.interface';
import { addProductToStorage } from '@shared/utils/localStorage/localStorage';
import axios from 'axios';
import { $apiWithGuard, API_URL_CLIENT } from '@shared/api/http/axios-instance';
import { IServerCart } from '@shared/types/models/Cart';
import { normalizeProductCount } from '@/stores/cart/cart.helper';
import { createOrderFx } from '@/stores/order/init';
import { $user, getUserFx, loginFx } from '@/stores/cart/init';
import '../../../../stores/cart/init';

import { toast } from 'sonner';
import {
  cartCleanConfirmed,
  cartCleanNotConfirmed,
  cartModalStateChanged,
  resetModal,
} from '@/source/features/clear-cart-confirm/model/clear-cart-confirm-model';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { pending } from 'patronum/pending';
import { getLoyaltyHistoryFx, getLoyaltyInfoFx } from '@entities/loyalty/model/loyalty-model';
import { getFavoritesFx } from '@entities/favorite/model/favorite-model';

export const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products);
});

function getInitialCart() {
  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('products') || '[]';
    return JSON.parse(items);
  } else return [];
}

export const $cart = createStore<IProductCart[]>([]);
// .reset(logoutFx, createOrderFx.doneData);

export const $cartTotalPrice = createStore(0);

sample({
  clock: $cart,
  fn: (cart) => {
    const initialValue = 0;

    return cart.reduce((prev, current) => {
      return prev + current.price * current.quantityInCart;
    }, initialValue);
  },
  target: $cartTotalPrice,
});

export const cartMounted = createEvent();

sample({
  clock: appStarted,
  fn: () => getInitialCart(),
  target: $cart,
});

sample({
  clock: $cart,
  target: addToStorageFx,
});

export const addProductToServerFx = createEffect(async (slug: string) => {
  try {
    const res = await $apiWithGuard.post(`profile/cart/add/`, {
      slug: slug,
    });

    return res.data as IServerCart[];
  } catch (e) {
    return [];
  }
});

export const clearCartFx = createEffect(async () => {
  try {
    await axios.get(`${API_URL_CLIENT}profile/cart/clear/`, {
      withCredentials: true,
    });
  } catch (e) {
    throw new Error('Ошибка при очистке корзины.');
  }
});

export const synchronizationWithLocalStorageFx = createEffect(async () => {
  const products = localStorage.getItem('products') as string;

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
    await axios.post(`${API_URL_CLIENT}profile/cart/`, body, {
      withCredentials: true,
    });
  } catch (e: any) {
    throw new Error('Ошибка добавления товара');
  }
});

export const decrementProductCountOnServer = createEffect(
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
  }
);

export const productNormalized = createEvent<IProductCart>();

export const getCartFromServerFx = createEffect(async () => {
  try {
    const res = await $apiWithGuard.get(`profile/cart/`);

    return res.data as IServerCart[];
  } catch {
    throw new Error('Ошибка получения товаров с сервера');
  }
});

export const getCartFromLocalStorageFx = createEffect<void, IProductCart[]>(() => {
  return JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[];
});

const productCountIncremented = createEvent<IProductCart>();
const productCountDecremented = createEvent<IProductCart>();

export const removeCartItemFx = createEffect(async (slug: string) => {
  try {
    await $apiWithGuard.post(`profile/cart/remove/`, {
      slug: slug,
    });
  } catch {
    throw new Error('Ошибка удаления товара.');
  }
});

export const $productsLoading = pending([removeCartItemFx, addProductToServerFx, getCartFromServerFx]);

const cartWasChanged = merge([addProductToServerFx.doneData, removeCartItemFx.doneData, clearCartFx.doneData]);

sample({
  clock: cartWasChanged,
  target: getCartFromServerFx,
});

split({
  clock: getUserFx.done,
  source: $user,
  match: (user) => (user ? 'authorized' : 'notAuthorized'),
  cases: {
    authorized: [$user, getCartFromServerFx, getLoyaltyInfoFx, getLoyaltyHistoryFx, getFavoritesFx],
    notAuthorized: [getCartFromLocalStorageFx],
  },
});

sample({
  //@ts-ignore
  clock: productNormalized,
  source: $cart,
  filter: (products: IProductCart[]) => !!products.length,
  fn: normalizeProductCount,
  target: $cart,
});
// cart toasts

//work with slug
export const productIncremented = createEvent<string>();
export const productDecremented = createEvent<string>();
export const productAddedToCart = createEvent<IProductCart>();
export const cartCleared = createEvent();

export const showProductAddedToastFx = createEffect(() => {
  toast('Товар добавлен в корзину.');
});

export const showProductRemovedToastFx = createEffect(() => {
  toast('Товар удален из корзины.');
});

sample({
  clock: cartCleanConfirmed,
  target: cartCleared,
});

sample({
  clock: productAddedToCart,
  source: { user: $user, cart: $cart },
  filter: (data) => data.user === null,
  fn: (data, item) => [...data.cart, item],
  target: [$cart, showProductAddedToastFx],
});

sample({
  clock: productAddedToCart,
  source: { user: $user, cart: $cart },
  filter: (data) => data.user !== null,
  fn: (_, product) => product.slug,
  target: addProductToServerFx,
});

sample({
  clock: cartCleared,
  source: $user,
  filter: (user) => !!user,
  target: clearCartFx,
});

sample({
  clock: cartCleared,
  source: $user,
  filter: (user) => !user,
  fn: () => [],
  target: [$cart, resetModal],
});

sample({
  clock: clearCartFx.doneData,
  fn: () => false,
  target: cartModalStateChanged,
});

sample({
  clock: productIncremented,
  source: {
    cartItems: $cart,
    user: $user,
  },
  filter: ({ cartItems, user }, itemSlug) => !user && isCanIncrement(cartItems, itemSlug),
  fn: incrementProduct,
  target: [$cart, showProductAddedToastFx],
});

sample({
  clock: productDecremented,
  source: {
    cartItems: $cart,
    user: $user,
  },
  filter: ({ cartItems, user }, itemSlug) => !user && isCanDecrement(cartItems, itemSlug),
  fn: decrementProduct,
  target: [$cart, showProductRemovedToastFx],
});

sample({
  clock: productDecremented,
  source: {
    cartItems: $cart,
    user: $user,
  },
  filter: ({ cartItems, user }, itemSlug) => !!user && isCanDecrement(cartItems, itemSlug),
  fn: (_, slug) => slug,
  target: [removeCartItemFx],
});

sample({
  clock: productIncremented,
  source: {
    cartItems: $cart,
    user: $user,
  },
  filter: ({ cartItems, user }, itemSlug) => !!user && isCanIncrement(cartItems, itemSlug),
  fn: (_, slug) => slug,
  target: [addProductToServerFx],
});

sample({
  clock: getCartFromServerFx.doneData,
  fn: (serverProducts) =>
    serverProducts.map((item) => {
      const { quantity, ...product } = item.product;

      return {
        ...product,
        quantityInCart: item.quantity,
        quantityInShop: quantity,
      };
    }),
  target: $cart,
});

function isCanIncrement(cartItems: IProductCart[], slug: string) {
  let flag = false;

  cartItems.forEach((item) => {
    if (item.slug === slug && item.quantityInCart + 1 <= item.quantityInShop) flag = true;
  });

  return flag;
}

function isCanDecrement(cartItems: IProductCart[], slug: string) {
  let flag = false;

  cartItems.forEach((item) => {
    if (item.slug === slug && item.quantityInCart - 1 >= 0) flag = true;
  });

  return flag;
}

function incrementProduct({ cartItems }: { cartItems: IProductCart[] }, slug: string) {
  return cartItems.map((cartItem) => {
    if (cartItem.slug === slug)
      return {
        ...cartItem,
        quantityInCart: cartItem.quantityInCart + 1,
      };
    else return cartItem;
  });
}

function decrementProduct({ cartItems }: { cartItems: IProductCart[] }, slug: string) {
  const res = cartItems.map((cartItem) => {
    if (cartItem.slug === slug)
      return {
        ...cartItem,
        quantityInCart: cartItem.quantityInCart - 1,
      };
    else return cartItem;
  });

  return res.filter((item) => item.quantityInCart !== 0);
}

// Сетевой слой из ServerCart -> ProductCart
function convertServerProductsToLocalProducts(serverProducts: IServerCart[]) {
  return serverProducts.map((serverProduct) => {
    const {
      product: { id, image, quantity: quantityInShop, size, slug, color, old_price, price, name },
      quantity: quantityInServerCart,
    } = serverProduct;

    return {
      id,
      image,
      quantityInShop,
      quantityInCart: quantityInServerCart,
      size,
      slug,
      color,
      old_price,
      price,
      name,
    } as IProductCart;
  });
}
