import { invoke } from "@withease/factories";
import { createAutocomplete } from "@shared/theme/autocomplete/model/autocomplete-model";
import { createSelect } from "@/source/features/add-address-cdek/ui/select/model/select-model";
import { createEvent, createStore, sample } from "effector";
import { createEffect } from "effector";
import axios from "axios";
import { $apiWithGuard } from "@shared/api/http/axios-instance";
import { redirectFx } from "@shared/lib/utils/helpers/router-instance";
import { toast } from "sonner";
import { createCourierAddressFx } from "@/source/features/add-address-courier/model/add-address-courier-model";

export interface SdekPoint {
  code: string;
  city: string;
  longitude: number;
  latitude: number;
  address: string;
}

interface Address {
  code: string;
  address: string;
  city: string;
  is_main: boolean;
}

export const buttonClicked = createEvent();

export const mainAddressClicked = createEvent();
export const $isMainAddress = createStore(false).on(mainAddressClicked, (state) => !state);

const getCdekPointsFx = createEffect(async (city: string) => {
  try {
    const res = await axios.get<SdekPoint[]>("https://thebaza.ru/service/cdek/delivery-points", {
      params: {
        city
      },
      withCredentials: true
    });

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const createCdekAddressFx = createEffect(async (data: Address) => {
  try {
    const res = await $apiWithGuard.post("profile/address/", {
      address: `г. ${data.city}, ${data.address}`,
      code: data.code,
      type: "cdek",
      is_main: data.is_main
    });

    return res.data;
  } catch (e) {
    throw new Error();
  }
});

export const cityForCdekAutocomplete = invoke(createAutocomplete, {
  url: "https://thebaza.ru/service/cdek/cities/search"
});
export const cdekPointsSelect = invoke(createSelect<SdekPoint, "address">, { renderField: "address" });

export const $showPointsSelect = createStore(false)
  .on(getCdekPointsFx.doneData, () => true)
  .reset(cityForCdekAutocomplete.$selectedItem);

sample({
  clock: cityForCdekAutocomplete.itemSelected,
  target: getCdekPointsFx
});

sample({
  clock: getCdekPointsFx.doneData,
  target: cdekPointsSelect.$items
});

sample({
  clock: cityForCdekAutocomplete.$selectedItem,
  target: cdekPointsSelect.reset
});

sample({
  //@ts-ignore
  clock: buttonClicked,
  source: {
    point: cdekPointsSelect.$selectedItem,
    city: cityForCdekAutocomplete.$selectedItem,
    isMain: $isMainAddress
  },
  filter: ({ point, city }) => point !== null && city !== null,
  fn: ({ point, city, isMain }) => ({ code: point?.code, address: point?.address, city, is_main: isMain }),
  target: createCdekAddressFx
});

sample({
  clock: createCdekAddressFx.doneData,
  fn: () => "/lk/addresses/",
  target: redirectFx
});

sample({
  clock: createCdekAddressFx.fail,
  fn: () => toast("Ошибка при создании адреса.")
});
