import { combine } from "effector";

import { $currentCountryCode } from "@shared/ui/PhoneInput/model/countryCodes";
import { $phoneNumber } from "@entities/user/model/user-model";

export const $fullPhoneNumber = combine({
  code: $currentCountryCode,
  phoneNumber: $phoneNumber
});
