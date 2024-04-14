import { combine } from "effector";

import { $phoneNumber } from "@/stores/cart/init";
import { $currentCountryCode } from "@shared/ui/PhoneInput/model/countryCodes";

export const $fullPhoneNumber = combine({
  code: $currentCountryCode,
  phoneNumber: $phoneNumber
});
