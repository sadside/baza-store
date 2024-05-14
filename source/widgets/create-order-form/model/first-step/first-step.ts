import { createEffect, createEvent, createStore, sample } from "effector";
import { RegisterFormValues } from "@pages/auth/ui/auth-page";
import $api from "@shared/api/http/axios-instance";
import { toast } from "sonner";
import { status } from "patronum/status";

export const formSubmitted = createEvent<RegisterFormValues>();

export const sendNumberPhoneFx = createEffect(async (data: RegisterFormValues) => {
  try {
    const res = await $api.post(`auth/send-code/`, {
      phone: `+7${data.phoneNumber}`
    });

    return res.data;
  } catch (e) {
    toast.error("Ошибка авторизации. Проверьте введенный номер телефона.", {
      position: "top-right"
    });
    throw new Error();
  }
});

export const sendNumberPhoneFxStatus = status(sendNumberPhoneFx);
export const $authPhoneNumber = createStore<string | null>(null);

sample({
  clock: formSubmitted,
  fn: (data) => data.phoneNumber,
  target: $authPhoneNumber
});

sample({
  clock: formSubmitted,
  target: sendNumberPhoneFx
});
