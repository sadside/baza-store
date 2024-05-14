"use client";

import { createEvent, createStore, sample } from "effector";
import { createGate } from "effector-react";
import { cartCleared } from "@entities/cart/model/cart-model";

export const cartPageGate = createGate();

export const resetModal = createEvent();
export const $isClearCartModalVisible = createStore(false).reset([cartPageGate.close, resetModal]);
export const cartCleanConfirmed = createEvent();
export const cartCleanNotConfirmed = createEvent();
export const cartModalStateChanged = createEvent<boolean>();

sample({
  clock: [cartCleanNotConfirmed],
  fn: () => false,
  target: $isClearCartModalVisible
});

sample({
  clock: cartCleanConfirmed,
  fn: () => false,
  target: $isClearCartModalVisible
});

sample({
  clock: cartModalStateChanged,
  target: $isClearCartModalVisible
});
