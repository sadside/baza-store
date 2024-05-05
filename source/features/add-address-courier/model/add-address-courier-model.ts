import { invoke } from '@withease/factories';
import { createAutocomplete } from '@shared/theme/autocomplete/model/autocomplete-model';
import { createEvent, createStore, sample } from 'effector';
import { createEffect } from 'effector';
import { $apiWithGuard } from '@shared/api/http/axios-instance';
import { redirectFx } from '@shared/lib/utils/helpers/router-instance';
import { toast } from 'sonner';

export interface Fields {
  apartment: string;
  floor: string;
  intercom: string;
}

interface Address {
  address: string;
  apartment_number: number;
  floor_number: number;
  intercom: number;
}

export const courierAutocomplete = invoke(createAutocomplete, {
  url: 'http://localhost:8000/api/profile/address/search/',
});
export const formSubmitted = createEvent<Fields>();

export const createCourierAddressFx = createEffect(async (data: Address) => {
  try {
    const res = await $apiWithGuard.post('profile/address/', {
      ...data,
      type: 'personal',
    });

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const $autocompleteError = createStore<string | null>(null);
export const mainAddressClicked = createEvent();
export const $isMainAddress = createStore(false).on(mainAddressClicked, (state) => !state);

sample({
  clock: formSubmitted,
  source: courierAutocomplete.$selectedItem,
  filter: (selectedItem) => !Boolean(selectedItem),
  fn: () => 'Это обязательное поле.',
  target: $autocompleteError,
});

sample({
  clock: formSubmitted,
  source: courierAutocomplete.$selectedItem,
  filter: (selectedItem) => Boolean(selectedItem),
  fn: () => null,
  target: $autocompleteError,
});

sample({
  clock: formSubmitted,
  source: {
    selectedItem: courierAutocomplete.$selectedItem,
    isMain: $isMainAddress,
  },
  filter: ({ selectedItem }) => selectedItem !== null,
  fn: ({ selectedItem, isMain }, clock) => ({
    address: selectedItem ?? '',
    apartment_number: +clock.apartment ?? null,
    floor_number: +clock.floor ?? null,
    intercom: +clock.intercom ?? null,
    is_main: isMain,
  }),
  target: createCourierAddressFx,
});

sample({
  clock: createCourierAddressFx.doneData,
  fn: () => '/lk/addresses/',
  target: redirectFx,
});

sample({
  clock: createCourierAddressFx.fail,
  fn: () => toast('Ошибка при создании адреса.'),
});
