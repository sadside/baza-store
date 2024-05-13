"use client";

import { createEvent, createStore, sample, split } from "effector";
import { createGate } from "effector-react";
import { $cart } from "@entities/cart/model/cart-model";
import { createEffect } from "effector";
import { toast } from "sonner";
import { showEmptyCartToastFx } from "@/source/features/show-toast/model/show-toast";

export const cartDrawerOpened = createEvent();
export const cartDrawerClosed = createEvent();

export const cartDrawerStateChanged = createEvent<boolean>();

export const $isCartDrawerVisible = createStore<boolean>(false);

export const drawerGate = createGate();

sample({
  clock: cartDrawerOpened,
  source: $cart,
  filter: (cart) => cart.length > 0,
  fn: () => true,
  target: $isCartDrawerVisible
});

sample({
  clock: cartDrawerOpened,
  source: $cart,
  filter: (cart) => cart.length <= 0,
  target: showEmptyCartToastFx
});

sample({
  clock: cartDrawerStateChanged,
  target: $isCartDrawerVisible
});

sample({
  clock: drawerGate.close,
  target: cartDrawerClosed
});

sample({
  clock: cartDrawerClosed,
  fn: () => false,
  target: $isCartDrawerVisible
});
