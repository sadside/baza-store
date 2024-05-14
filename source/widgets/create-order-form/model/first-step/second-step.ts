import { createEvent, sample } from "effector";
import { ConfirmCodeValues } from "@widgets/create-order-form/ui/auth-step/second-step";
import { loginFx } from "@entities/user/model/user-model";
import { $authPhoneNumber } from "@widgets/create-order-form/model/first-step/first-step";

export const codeSubmitted = createEvent<ConfirmCodeValues>();

sample({
  clock: codeSubmitted,
  source: $authPhoneNumber,
  filter: (phone): phone is string => phone !== null,
  fn: (phoneNumber, code) => ({
    code: code.code,
    phone: `+7 ${phoneNumber}` ?? ""
  }),
  target: loginFx
});
