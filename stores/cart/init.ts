'use client';

import { createEffect, createEvent, createStore, sample, split } from 'effector';
import { IProductCart } from './cart.interface';
import { dropdownMenuOpened, smallMenuClosed } from '../layout/menu/init';
import { normalizeProductCount } from './cart.helper';
import { IUser } from '@shared/types/models/User';
import axios, { AxiosError } from 'axios';
import { IServerCart } from '@shared/types/models/Cart';
import AuthService from '@/services/AuthService';
import { IServerFavorite } from '@shared/types/models/Favorites';
import { createOrderFx } from '@/stores/order/init';
import { $apiWithGuard, API_URL_CLIENT } from '@shared/api/http/axios-instance';
import { $currentCountryCode } from '@/source/shared/ui/PhoneInput/model/countryCodes';
import { addFavotitesToStorage, addProductToStorage } from '@shared/utils/localStorage/localStorage';
import { createGate } from 'effector-react';
import { AppRouterInstance, NavigateOptions } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { removeFromStorage, saveTokenStorage } from '@shared/api/lib/api.helpers';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { getCartFromServerFx } from '@entities/cart/model/cart';
import '@entities/cart/model/cart';
import { ProfileFormFields } from '@widgets/lk-profile-form/ui/LkProfileForm';
import { toast } from 'sonner';
import { getFavoritesFx } from '@entities/favorite/model/favorite-model';
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
      }
    );

    return res.data as IServerCart[];
  } catch (e) {
    return [];
  }
});

export const testGate = createGate<AppRouterInstance>();

export const redirectFx = createEffect(
  ({ path, action }: { path: string; action: (href: string, options?: NavigateOptions | undefined) => void }) => {
    action(path);
  }
);

export const synchronizationWithLocalStorage = createEffect(async () => {
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
    const { data } = await $apiWithGuard.post(`profile/cart/`, body);

    const result: IProductCart[] = [];

    data.forEach((item: IServerCart) => {
      result.push({
        id: item.product.id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        quantityInCart: item.quantity,
        size: item.product.size,
        color: item.product.color,
        slug: item.product.slug,
        old_price: item.product.old_price || item.product.price,
        quantityInShop: item.product.quantity,
      });
    });

    return result;
  } catch (e: any) {
    return [];
  }
});

export const decrementProductCountServer = createEffect(async ({ id, quantity }: { id: number; quantity: number }) => {
  try {
    const res = await axios.post(`${API_URL_CLIENT}profile/cart/remove/`, {
      modification_id: id,
    });

    return res.data as IServerCart[];
  } catch {
    // throw new Error('Ошибка.')
    return [];
  }
});

export const productNormalized = createEvent<IProductCart>();

export const getCartFromLocalStorageFx = createEffect<void, IProductCart[]>(() => {
  return JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[];
});

const productAddedToCart = createEvent<IProductCart>();
const pageMounted = createEvent<IUser>();
const mouseLeavedFromCart = createEvent<any>();
const mouseEnteredToCart = createEvent<any>();

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
        quantityInCart: item.quantity,
        size: item.product.size,
        color: item.product.color,
        slug: item.product.slug,
        old_price: item.product.old_price || item.product.price,
        quantityInShop: item.product.quantity,
      });
    });

    return result;
  } catch {
    return [];
  }
});

export const clearLocalCartFx = createEffect(() => {
  localStorage.setItem('products', '[]');
});

export const logoutFx = createEffect(async () => {
  await AuthService.logout();
  removeFromStorage();
});

const $showCart = createStore(false)
  .on(mouseEnteredToCart, () => true)
  .on(mouseLeavedFromCart, () => false);
const $cart = createStore<IProductCart[]>([]).reset(logoutFx, createOrderFx.doneData);

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
  fn: normalizeProductCount,
  target: $cart,
});

export const phoneInputSubmitted = createEvent<string>();
export const codeInputSubmitted = createEvent<{
  phone: string;
  code: string[];
}>();

export const postUserFx = createEffect(async (data: ProfileFormFields) => {
  try {
    const newUserData = {
      name: data.name,
      surname: data.surname,
      birthday_date: data.date,
      email: data.mail,
    };

    const res = await $apiWithGuard.post(`profile/info/`, newUserData);

    return res.data;
    //@ts-ignore
  } catch (error: AxiosError) {
    //@ts-ignore
    error.response.data.email.forEach((errorText) => {
      toast(errorText, {
        position: 'top-right',
      });
    });
    throw new Error('Не удалось обновить информацию.');
  }
});

export const userInfoEdited = createEvent<ProfileFormFields>();

sample({
  clock: userInfoEdited,
  target: postUserFx,
});

sample({
  clock: logoutFx.doneData,
  target: clearLocalCartFx,
});

sample({
  clock: logouted,
  target: logoutFx,
});

export const $user = createStore<IUser | null>(null).reset(logoutFx.doneData);

export const $loginError = createStore<string | null>(null);
export const showToastErrorF = createEffect((error: string) => {
  toast.error(error);
});

export const loginErrorChanged = createEvent<string | null>();

sample({
  clock: loginErrorChanged,
  target: $loginError,
});

export const loginFx = createEffect(async ({ phone, code }: { phone: string; code: string }) => {
  try {
    const res = await AuthService.login(phone, code);

    saveTokenStorage(res.data.access_token);

    return res.data.user;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(err?.response?.data.error);
    } else {
      throw new Error('Произошла неизвестная ошибка ошибка...');
    }
  }
});

sample({
  clock: loginFx.fail,
  fn: (error) => error.error.message,
  target: [$loginError, showToastErrorF],
});

export const getUserFx = createEffect(async () => {
  try {
    const res = await AuthService.getUser();

    return res.data;
  } catch (e: any) {
    return null;
  }
});

export const $phoneNumber = createStore<string>('')
  .on(phoneInputSubmitted, (_, newState) => newState)
  .reset(loginFx.doneData);

sample({
  clock: codeInputSubmitted,
  source: $currentCountryCode,
  fn: (phoneCode, loginData) => {
    return {
      phone: phoneCode + loginData.phone,
      code: loginData.code.join(''),
    };
  },
  target: loginFx,
});

sample({
  clock: getUserFx.doneData,
  filter: (user) => user !== null,
  target: $user,
});

sample({
  clock: loginFx.doneData,
  target: [$user, synchronizationWithLocalStorage],
});

sample({
  //@ts-ignore
  clock: synchronizationWithLocalStorage.doneData,
  target: [$cart, clearLocalCartFx],
});

sample({
  clock: postUserFx.doneData,
  target: $user,
});

sample({
  clock: appStarted,
  target: [getUserFx],
});

export { mouseEnteredToCart, mouseLeavedFromCart, $cart, $showCart, addToStorageFx, productAddedToCart, pageMounted };
