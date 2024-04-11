import { createEffect, createEvent, createStore, sample } from "effector";
import PhoneInputService from "@/source/shared/ui/PhoneInput/api/phoneInputApi";

type countryCode = {
  country_code: string;
  name_ru: string;
  phone_code: string;
};
// stores
const $countryCodes = createStore<countryCode[]>([]);
const $isSelectCodeOpened = createStore(false);
const $currentCountryCode = createStore<string>("+7");
const $codeInputValue = createStore<string>("+7");

// events
const codesSelectOpened = createEvent<boolean>();
const codesSelectClosed = createEvent<boolean>();
const codeClicked = createEvent<string>();
const codeInputChanged = createEvent<string>();

// effects
const getCountryCodesFx = createEffect(async () => {
  try {
    const res = await PhoneInputService.getAllCodes();

    return res.data;
  } catch (e) {
    return [];
  }
});

const getCountryCodesById = createEffect(async (phoneCode: string) => {
  try {
    const res = await PhoneInputService.getCodesById(phoneCode);

    return res.data;
  } catch (e) {
    return [];
  }
});

//logic

sample({
  clock: [codesSelectOpened, codesSelectClosed],
  target: $isSelectCodeOpened
});

sample({
  clock: codesSelectOpened,
  target: getCountryCodesFx
});

sample({
  clock: [getCountryCodesFx.doneData, getCountryCodesById.doneData],
  target: $countryCodes
});

sample({
  clock: codeClicked,
  target: $currentCountryCode
});

sample({
  clock: codeInputChanged,
  target: [$codeInputValue]
});

export {
  codesSelectOpened,
  $isSelectCodeOpened,
  $currentCountryCode,
  $countryCodes,
  codeClicked,
  getCountryCodesById,
  $codeInputValue,
  codeInputChanged
};
