import { createEvent, createStore, sample } from 'effector';
import { profileAddressDestroy, profileAddressList } from '@shared/api/__generated__/generated-api';
import { Address } from '@shared/api/__generated__/generated-api.schemas';
import { createEffect } from 'effector';
import { status } from 'patronum';
import { createCourierAddressFx } from '@/source/features/add-address-courier/model/add-address-courier-model';
import {
  addressRemoveConfirmed,
  addressModalOpened,
  resetModal,
} from '@/source/features/remove-address-confirm/model/remove-address-confirm-model';
import { createCdekAddressFx } from '@/source/features/add-address-cdek/model/add-address-cdek';

export const addressRemoveBtnClicked = createEvent<number>();

export const getAddressesFx = createEffect(async () => {
  try {
    const res = await profileAddressList();

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const deleteAddressesFx = createEffect(async (id: number) => {
  try {
    const res = await profileAddressDestroy(id);

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const $clickedAddressId = createStore<number | null>(null);
export const $getAddressesFxStatus = status({ effect: getAddressesFx });
export const $addresses = createStore<Address[] | null>(null);

sample({
  clock: getAddressesFx.doneData,
  target: $addresses,
});

sample({
  clock: [createCdekAddressFx.doneData, createCourierAddressFx.doneData],
  target: getAddressesFx,
});

sample({
  clock: deleteAddressesFx.doneData,
  target: getAddressesFx,
});

sample({
  clock: addressRemoveBtnClicked,
  target: [addressModalOpened, $clickedAddressId],
});

sample({
  clock: addressRemoveConfirmed,
  source: $clickedAddressId,
  filter: (addressId): addressId is number => Boolean(addressId !== null),
  target: deleteAddressesFx,
});

sample({
  clock: deleteAddressesFx.doneData,
  target: resetModal,
});
