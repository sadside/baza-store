'use client';

import { createEffect, createEvent, createStore, sample } from 'effector';
import { resetModal } from '@/source/features/clear-cart-confirm/model/clear-cart-confirm-model';
import {
  $cart,
  addProductToServerFx,
  cartCleared,
  clearCartFx,
  getCartFromServerFx,
  removeCartItemFx,
} from '@entities/cart/model/cart-model';
import { IProductCart } from '@/stores/cart/cart.interface';
import { $apiWithGuard } from '@shared/api/http/axios-instance';
import { $user, getUserFx, loginFx, logoutFx } from '@entities/user/model/user-model';
import { showProductAddedToastFx, showProductRemovedToastFx } from '@/source/features/show-toast/model/show-toast';
import { addProductToStorage } from '@shared/utils/localStorage/localStorage';

export const productIncremented = createEvent<string>();
export const productDecremented = createEvent<string>();
export const productAddedToCart = createEvent<IProductCart>();

export const clearLocalCartFx = createEffect(() => {
  localStorage.setItem('products', '[]');
});

export const getCartFromLocalStorageFx = createEffect<void, IProductCart[]>(() => {
  return JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[];
});

export const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products);
});

interface Body {
  quantity: number;
  slug: string;
}

const synchronizationWithLocalStorageFx = createEffect(async () => {
  const cart = JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[];
  const body: Body[] = [];

  cart.forEach(({ slug, quantityInCart }) =>
    body.push({
      slug,
      quantity: quantityInCart,
    })
  );

  try {
    await $apiWithGuard.post(`profile/cart/`, body);
  } catch (e: any) {
    throw new Error('Ошибка добавления товара.');
  }
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
  clock: loginFx.doneData,
  target: synchronizationWithLocalStorageFx,
});

sample({
  clock: synchronizationWithLocalStorageFx.doneData,
  target: [clearLocalCartFx, getCartFromServerFx],
});

sample({
  clock: logoutFx.doneData,
  target: clearLocalCartFx,
});

sample({
  clock: clearLocalCartFx,
  fn: () => [],
  target: $cart,
});

sample({
  clock: getUserFx.doneData,
  source: $user,
  filter: (user) => user === null,
  target: getCartFromLocalStorageFx,
});

sample({
  clock: $cart,
  source: $user,
  filter: (user) => user === null,
  fn: (_, cart) => cart,
  target: addToStorageFx,
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
