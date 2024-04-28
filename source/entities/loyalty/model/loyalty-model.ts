import { createStore, sample } from 'effector';
import { Loyalty, LoyaltyHistory } from '@shared/api/__generated__/generated-api.schemas';
import { createEffect } from 'effector';
import { profileLoyaltyHistoryList, profileLoyaltyRetrieve } from '@shared/api/__generated__/generated-api';
import { lkGate } from '@entities/order';

export const getLoyaltyInfoFx = createEffect(async () => {
  try {
    const res = await profileLoyaltyRetrieve();

    return res.data;
  } catch (e) {
    throw new Error('Ошибка загрузки системы лояльности.');
  }
});

export const getLoyaltyHistoryFx = createEffect(async () => {
  try {
    const res = await profileLoyaltyHistoryList();

    return res.data;
  } catch (e) {
    throw new Error('Ошибка загрузки системы лояльности.');
  }
});

export const $loyalty = createStore<Loyalty | null>(null);
export const $loyaltyHistory = createStore<LoyaltyHistory[] | null>(null);

sample({
  clock: lkGate.open,
  target: getLoyaltyInfoFx,
});

sample({
  clock: getLoyaltyInfoFx.doneData,
  target: $loyalty,
});

sample({
  clock: getLoyaltyHistoryFx.doneData,
  target: $loyaltyHistory,
});
