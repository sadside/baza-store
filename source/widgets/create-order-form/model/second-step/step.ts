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
import { SdekPoint } from '@/source/features/add-address-cdek/model/add-address-cdek';

export const pickupChangeClicked = createEvent();
export const mainFormSubmitted = createEvent();

export type Pickup = {
  address: string;
  type: 'personal' | 'cdek';
  price: number;
  tariff: DELIVERY_TARIFFS | null;
  code?: string;
  intercom?: number | null;
  floor_number?: number | null;
  apartment?: number | null;
};

export const $selectedPickUp = createStore<Pickup | null>(null).reset(pickupChangeClicked);

sample({
  clock: $addresses,
  filter: (addresses): addresses is Array<Address> => Boolean(addresses?.length),
  //@ts-ignore
  fn: (addresses) => {
    const item = addresses?.find((address) => address.is_main) ?? null;

    const res: Pickup = {
      price: item?.type === 'cdek' ? 800 : 1200,
      tariff: item?.type === 'personal' ? DELIVERY_TARIFFS.COMMON : null,
      address: item?.address ?? '',
      //@ts-ignore
      type: item?.type ?? 'personal',
      apartment: item?.apartment_number,
      floor_number: item?.floor_number,
      intercom: item?.intercom,
    };

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
  clock: personalFormSubmitted,
  source: {
    selectedItem: selectPersonalPickUpAutocomplete.$selectedItem,
    apartment_number: $apartment,
    floor_number: $floor_number,
    intercom: $intercom,
    tariff: tariffSelect.$selectedItem,
  },
  filter: ({ selectedItem, tariff }) => selectedItem !== null && tariff !== null,
  fn: ({ selectedItem, apartment_number, floor_number, intercom, tariff }, clock) =>
    ({
      address: selectedItem ?? '',
      type: 'personal',
      price: tariff ? tariff.price : 0,
      tariff: tariff?.value || null,
      code: '',
      apartment: Number(apartment_number),
      floor_number: Number(floor_number),
      intercom: Number(intercom),
    }) as Pickup,
  target: $selectedPickUp,
});

sample({
  clock: cdekFormSubmitted,
  source: {
    point: cdekPointsSelect.$selectedItem,
    city: cityForCdekAutocomplete.$selectedItem,
  },
  filter: ({ point, city }) => point !== null && city !== null,
  fn: ({ point, city }) =>
    ({
      type: 'cdek',
      address: point?.address || '',
      price: 600,
      code: point?.code || '',
      tariff: null,
    }) as Pickup,
  target: $selectedPickUp,
});
