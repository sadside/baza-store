import { combine } from "effector";
import { $currentCountryCode } from "@/shared/ui/PhoneInput/model/countryCodes";
import { $phoneNumber } from "@/stores/cart/init";

export const $fullPhoneNumber = combine({
  code: $currentCountryCode,
  phoneNumber: $phoneNumber
});
