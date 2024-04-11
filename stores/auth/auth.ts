"use client";
import { createEvent, createStore, sample } from "effector";
import { $loginError } from "@/stores/cart/init";

export const clearDigits = createEvent<void>();
export const $codeDigits = createStore(["", "", "", "", "", ""]).reset(
  clearDigits
);

export const digitIntroduced = createEvent<{
  value: string;
  position: number;
}>();

export const digitRemoved = createEvent<number>();

sample({
  clock: [digitRemoved, digitIntroduced],
  source: $loginError,
  filter: (err) => err !== null,
  fn: () => null,
  target: $loginError
});

sample({
  clock: digitIntroduced,
  source: $codeDigits,
  fn: (digits, newDigit) => {
    const oldDigit = digits[newDigit.position];
    const newDigitValue = newDigit.value.trim().replace(oldDigit, "");
    const newDigits = [...digits];
    newDigits[newDigit.position] = newDigitValue;
    return newDigits;
  },
  target: $codeDigits
});

sample({
  clock: digitRemoved,
  source: $codeDigits,
  fn: (digits, index) => {
    const newDigits = [...digits];
    newDigits[index] = "";
    return newDigits;
  },
  target: $codeDigits
});
