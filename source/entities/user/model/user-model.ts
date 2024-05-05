'use client';

import { createEffect, createEvent, createStore, sample, split } from 'effector';
import { IUser } from '@shared/types/models/User';
import axios, { AxiosError } from 'axios';
import AuthService from '@/services/AuthService';
import { $apiWithGuard } from '@shared/api/http/axios-instance';
import { $currentCountryCode } from '@/source/shared/ui/PhoneInput/model/countryCodes';
import { removeFromStorage, saveTokenStorage } from '@shared/api/lib/api.helpers';
import { appStarted } from '@shared/lib/utils/helpers/app-status';
import { getCartFromServerFx } from '@entities/cart/model/cart-model';
import { ProfileFormFields } from '@widgets/lk-profile-form/ui/LkProfileForm';
import { toast } from 'sonner';
import { getFavoritesFx } from '@entities/favorite/model/favorite-model';
import { getLoyaltyHistoryFx, getLoyaltyInfoFx } from '@entities/loyalty/model/loyalty-model';
import { status } from 'patronum/status';
import { getAddressesFx } from '@entities/address/model/address-model';

export const logouted = createEffect();

export const logoutFx = createEffect(async () => {
  await AuthService.logout();
  removeFromStorage();
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
  clock: logouted,
  target: logoutFx,
});

export const $user = createStore<IUser | null>(null).reset(logoutFx.doneData);

export const $loginError = createStore<string | null>(null);
export const showToastErrorF = createEffect((error: string) => {
  toast.error(error, {
    position: 'top-right',
  });
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
      1;
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

export const getUserFxStatus = status(getUserFx);

export const $getUserFxStatus = status({ effect: getUserFx });

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
  clock: getUserFx.doneData,
  source: $user,
  filter: (user) => user !== null,
  target: [$user, getCartFromServerFx, getLoyaltyInfoFx, getLoyaltyHistoryFx, getFavoritesFx, getAddressesFx],
});

sample({
  clock: loginFx.doneData,
  target: [$user, getLoyaltyInfoFx, getLoyaltyHistoryFx, getFavoritesFx],
});

sample({
  clock: postUserFx.doneData,
  target: $user,
});

sample({
  clock: appStarted,
  source: $getUserFxStatus,
  filter: (status) => status !== 'pending',
  target: getUserFx,
});
