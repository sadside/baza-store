'use client';

import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

export const addressPageGate = createGate();

export const resetModal = createEvent();
export const $isAddressRemoveConfirmVisible = createStore(false).reset([addressPageGate.close, resetModal]);
export const addressRemoveConfirmed = createEvent();
export const addressRemoveNotConfirmed = createEvent();
export const addressModalStateChanged = createEvent<boolean>();
export const addressModalOpened = createEvent<void>();

sample({
  clock: [addressRemoveNotConfirmed],
  fn: () => false,
  target: $isAddressRemoveConfirmVisible,
});

sample({
  clock: addressModalOpened,
  fn: () => true,
  target: $isAddressRemoveConfirmVisible,
});

sample({
  clock: addressRemoveConfirmed,
  fn: () => false,
  target: $isAddressRemoveConfirmVisible,
});

sample({
  clock: addressModalStateChanged,
  target: $isAddressRemoveConfirmVisible,
});
