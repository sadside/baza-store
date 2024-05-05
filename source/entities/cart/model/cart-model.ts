'use client';

import { createEffect, createEvent, createStore, merge, sample } from 'effector';
import { IProductCart } from '@/stores/cart/cart.interface';
import { addProductToStorage } from '@shared/utils/localStorage/localStorage';
import axios from 'axios';
import { $apiWithGuard, API_URL_CLIENT } from '@shared/api/http/axios-instance';
import { IServerCart } from '@shared/types/models/Cart';
import { toast } from 'sonner';
import {
  cartCleanConfirmed,
  cartModalStateChanged,
} from '@/source/features/clear-cart-confirm/model/clear-cart-confirm-model';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { pending } from 'patronum/pending';
import { status } from 'patronum/status';

function getInitialCart() {
  if (typeof window !== 'undefined') {
    const items = localStorage.getItem('products') || '[]';
    return JSON.parse(items);
  } else return [];
}

export const $cart = createStore<IProductCart[]>([]);

export const $cartTotalPrice = $cart.map((cart) => {
  const initialValue = 0;

  return cart.reduce((prev, current) => {
    return prev + current.price * current.quantityInCart;
  }, initialValue);
});

sample({
  clock: appStarted,
  fn: () => getInitialCart(),
  target: $cart,
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

export const getCartFromServerFx = createEffect(async () => {
  try {
    const res = await $apiWithGuard.get(`profile/cart/`);

    return res.data as IServerCart[];
  } catch {
    throw new Error('Ошибка получения товаров с сервера');
  }
});

export const getCartFxStatus = status(getCartFromServerFx);

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

export const cartCleared = createEvent();

sample({
  clock: cartCleanConfirmed,
  target: cartCleared,
});

sample({
  clock: clearCartFx.doneData,
  fn: () => false,
  target: cartModalStateChanged,
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
