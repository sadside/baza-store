'use client';

import { createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';

export const cartDrawerOpened = createEvent();
export const cartDrawerClosed = createEvent();

export const cartDrawerStateChanged = createEvent<boolean>();

export const $isCartDrawerVisible = createStore<boolean>(false);

export const drawerGate = createGate();

sample({
  clock: cartDrawerOpened,
  fn: () => true,
  target: $isCartDrawerVisible,
});

sample({
  clock: cartDrawerStateChanged,
  target: $isCartDrawerVisible,
});

sample({
  clock: drawerGate.close,
  target: cartDrawerClosed,
});

sample({
  clock: cartDrawerClosed,
  fn: () => false,
  target: $isCartDrawerVisible,
});
