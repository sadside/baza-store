"use client";

import { IColor } from "@/components/selectProductColor/SelectProductColor.interface";
import { createEvent, createStore, sample } from "effector";
import { IFullProduct } from "@shared/types/models/Product";
import { createGate } from "effector-react";
import { IProductCart } from "@/stores/cart/cart.interface";
import { $cart } from "@entities/cart/model/cart-model";
import { desktop, mobile } from "@shared/lib/utils/helpers/device-matcher";

export const sizeSelected = createEvent<{
  name: string;
  mod_id: number;
  quantity: number;
  slug: string;
} | null>();
export const colorSelected = createEvent<IColor>();
export const pageUnMounted = createEvent();

export const $selectedSize = createStore<{
  name: string;
  mod_id: number;
  quantity: number;
  slug: string;
} | null>(null);

export const $selectedColor = createStore<IColor | null>(null).on(colorSelected, (_, payload) => payload);
export const $fullProduct = createStore<IFullProduct | null>(null);
export const $productInCart = createStore<IProductCart | null>(null);
export const pageLoaded = createEvent<IFullProduct>();

export const partsModalStateChanged = createEvent<boolean>();

export const $partsDesktopModalIsVisible = createStore(false);
export const $partsMobileModalIsVisible = createStore(false);

// testGate

export const productGate = createGate<IFullProduct>();

sample({
  clock: partsModalStateChanged,
  source: desktop.$matches,
  filter: (isDesktop) => isDesktop,
  fn: (src, clk) => clk,
  target: $partsDesktopModalIsVisible
});

sample({
  clock: partsModalStateChanged,
  source: mobile.$matches,
  filter: (isMobile) => isMobile,
  fn: (src, clk) => clk,
  target: $partsMobileModalIsVisible
});

sample({
  clock: productGate.open,
  target: $fullProduct
});

sample({
  clock: productGate.close,
  fn: () => null,
  target: [$fullProduct, $selectedSize, $productInCart]
});

sample({
  clock: $fullProduct,
  filter: (product) => !!product?.sizes?.length,
  fn: (product) => {
    return {
      //@ts-ignore
      ...product.sizes[0]
    };
  },
  target: $selectedSize
});

sample({
  clock: sizeSelected,
  target: $selectedSize
});

sample({
  //@ts-ignore
  clock: [$cart, $fullProduct, $selectedSize],
  source: {
    cart: $cart,
    size: $selectedSize
  },
  filter: ({ cart, size }) => !!size?.slug,
  fn: ({ cart, size }) => {
    return { ...cart.find((item) => item.slug === size?.slug) } || null;
  },
  target: $productInCart
});
