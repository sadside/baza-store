'use client';
import { createEffect, createEvent, createStore, sample } from 'effector';
import { invoke } from '@withease/factories';
import { createAutocomplete } from '@shared/theme/autocomplete/model/autocomplete-model';
import { $apiWithGuard, API_URL_CLIENT } from '@shared/api/http/axios-instance';
import { Fields } from '@/source/features/add-address-courier/model/add-address-courier-model';
import { Address } from '@shared/api/__generated__/generated-api.schemas';
import { toast } from 'sonner';
import { createSelect } from '@/source/features/add-address-cdek/ui/select/model/select-model';
import axios from 'axios';
import { SdekPoint } from '@/source/features/add-address-cdek/model/add-address-cdek';

export const tabChanged = createEvent<string>();

export const personalFormSubmitted = createEvent();
export const cdekFormSubmitted = createEvent();
export const inShopFormSubmitted = createEvent();

export const apartmentChanged = createEvent<string>();
export const floorNumberChanged = createEvent<string>();
export const intercomChanged = createEvent<string>();

export const orderCommentChanged = createEvent<string>();

const getCdekPointsFx = createEffect(async (city: string) => {
  try {
    const res = await axios.get<SdekPoint[]>('https://thebaza.ru/service/cdek/delivery-points', {
      params: {
        city,
      },
      withCredentials: true,
    });

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const $activeTab = createStore<string>('personal').on(tabChanged, (_, tabChanged) => tabChanged);
export const $autocompleteError = createStore<string | null>(null);
export const $cdekAutocompleteError = createStore<string | null>(null);
export const $orderComment = createStore<string>('').on(orderCommentChanged, (_, text) => text);

export const $apartment = createStore<string>('').on(apartmentChanged, (_, value) => value);
export const $floor_number = createStore<string>('').on(floorNumberChanged, (_, value) => value);
export const $intercom = createStore<string>('').on(intercomChanged, (_, value) => value);

export const selectPersonalPickUpAutocomplete = invoke(createAutocomplete, {
  url: `${API_URL_CLIENT}profile/address/search/`,
});
export const cityForCdekAutocomplete = invoke(createAutocomplete, {
  url: 'https://thebaza.ru/service/cdek/cities/search',
});
export const cdekPointsSelect = invoke(createSelect<SdekPoint, 'address'>, { renderField: 'address' });

export const $showPointsSelect = createStore(false)
  .on(getCdekPointsFx.doneData, () => true)
  .reset(cityForCdekAutocomplete.$selectedItem);

type TariffSelect = {
  id: number;
  value: string;
  price: number;
};

const tariffs: TariffSelect[] = [
  {
    id: 1,
    value: 'Обычная - 1200₽',
    price: 1200,
  },
  {
    id: 2,
    value: 'Экспресс - 1500₽',
    price: 1200,
  },
];

export const tariffSelect = invoke(createSelect<TariffSelect, 'value'>, { renderField: 'value', items: tariffs });
export const $selectTariffError = createStore(false);
export const $selectCdekError = createStore(false);

sample({
  clock: personalFormSubmitted,
  source: selectPersonalPickUpAutocomplete.$selectedItem,
  filter: (selectedItem) => !Boolean(selectedItem),
  fn: () => 'Это обязательное поле.',
  target: $autocompleteError,
});

sample({
  clock: selectPersonalPickUpAutocomplete.$selectedItem,
  fn: () => null,
  target: $autocompleteError,
});

sample({
  clock: personalFormSubmitted,
  source: selectPersonalPickUpAutocomplete.$selectedItem,
  filter: (selectedItem) => Boolean(selectedItem),
  fn: () => null,
  target: $autocompleteError,
});

sample({
  clock: personalFormSubmitted,
  source: tariffSelect.$selectedItem,
  filter: (selectedItem) => !Boolean(selectedItem),
  fn: () => true,
  target: $selectTariffError,
});

sample({
  clock: personalFormSubmitted,
  source: tariffSelect.$selectedItem,
  filter: (selectedItem) => Boolean(selectedItem),
  fn: () => false,
  target: $selectTariffError,
});

sample({
  clock: tariffSelect.$selectedItem,
  fn: () => false,
  target: $selectTariffError,
});

sample({
  clock: cityForCdekAutocomplete.$selectedItem,
  fn: () => null,
  target: $cdekAutocompleteError,
});

sample({
  clock: cdekFormSubmitted,
  source: cityForCdekAutocomplete.$selectedItem,
  filter: (selectedItem) => !Boolean(selectedItem),
  fn: () => 'Это обязательное поле.',
  target: $cdekAutocompleteError,
});
sample({
  clock: cdekFormSubmitted,
  source: cityForCdekAutocomplete.$selectedItem,
  filter: (selectedItem) => Boolean(selectedItem),
  fn: () => null,
  target: $cdekAutocompleteError,
});

sample({
  clock: cdekFormSubmitted,
  source: cdekPointsSelect.$selectedItem,
  filter: (selectedItem) => !Boolean(selectedItem),
  fn: () => true,
  target: $selectCdekError,
});

sample({
  clock: cdekFormSubmitted,
  source: cdekPointsSelect.$selectedItem,
  filter: (selectedItem) => Boolean(selectedItem),
  fn: () => false,
  target: $selectCdekError,
});

sample({
  clock: cdekPointsSelect.$selectedItem,
  fn: () => false,
  target: $selectCdekError,
});

sample({
  clock: cityForCdekAutocomplete.itemSelected,
  target: getCdekPointsFx,
});

sample({
  clock: getCdekPointsFx.doneData,
  target: cdekPointsSelect.$items,
});

sample({
  clock: cityForCdekAutocomplete.$selectedItem,
  target: cdekPointsSelect.reset,
});
