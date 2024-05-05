import { createEvent, createStore, sample, split } from 'effector';
import { Address } from '@shared/api/__generated__/generated-api.schemas';
import { $addresses } from '@entities/address/model/address-model';
import {
  $activeTab,
  $apartment,
  $floor_number,
  $intercom,
  cdekFormSubmitted,
  cdekPointsSelect,
  cityForCdekAutocomplete,
  DELIVERY_TARIFFS,
  inShopFormSubmitted,
  personalFormSubmitted,
  selectPersonalPickUpAutocomplete,
  tariffSelect,
} from '@widgets/create-order-form/ui/pickup-step/variants/pickup-not-selected/model/pickup-not-selected';
import { pending } from 'patronum';
import { orderGate } from '@widgets/create-order-form/model/create-order-model';

export const pickupChangeClicked = createEvent();
export const mainFormSubmitted = createEvent();

export const $selectedPickUp = createStore<Address | null>(null).reset(pickupChangeClicked);

sample({
  clock: $addresses,
  filter: (addresses): addresses is Array<Address> => Boolean(addresses?.length),
  //@ts-ignore
  fn: (addresses) => {
    const res = addresses?.find((address) => address.is_main) ?? null;

    //@ts-ignore
    res.price = res?.type === 'cdek' ? 800 : 1200;

    return res;
  },
  target: $selectedPickUp,
});

sample({
  //@ts-ignore
  clock: inShopFormSubmitted,
  fn: () => ({
    address: 'Оренбург, Поляничко 9',
    type: 'pickup',
    price: 0,
  }),
  target: $selectedPickUp,
});

split({
  source: mainFormSubmitted,
  match: $activeTab,
  cases: {
    personal: personalFormSubmitted,
    cdek: cdekFormSubmitted,
    inShop: inShopFormSubmitted,
  },
});

sample({
  //@ts-ignore
  clock: personalFormSubmitted,
  source: {
    selectedItem: selectPersonalPickUpAutocomplete.$selectedItem,
    apartment_number: $apartment,
    floor_number: $floor_number,
    intercom: $intercom,
    tariff: tariffSelect.$selectedItem,
  },
  filter: ({ selectedItem, tariff }) => selectedItem !== null && tariff !== null,
  fn: ({ selectedItem, apartment_number, floor_number, intercom, tariff }, clock) => ({
    address: selectedItem ?? '',
    type: 'personal',
    price: tariff ? tariff.price : 0,
  }),
  target: $selectedPickUp,
});

sample({
  //@ts-ignore
  clock: cdekFormSubmitted,
  source: {
    point: cdekPointsSelect.$selectedItem,
    city: cityForCdekAutocomplete.$selectedItem,
  },
  filter: ({ point, city }) => point !== null && city !== null,
  fn: ({ point, city }) => ({ type: 'cdek', address: point?.address, price: 600, code: point?.code }),
  target: $selectedPickUp,
});
