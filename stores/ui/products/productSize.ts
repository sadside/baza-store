import { IColor } from '@/components/selectProductColor/SelectProductColor.interface';
import { createEvent, createStore } from 'effector';

export const sizeSelected = createEvent<{
  name: string;
  mod_id: number;
  quantity: number;
} | null>();
export const colorSelected = createEvent<IColor>();
export const pageUnMounted = createEvent();

export const $selectedSize = createStore<{
  name: string;
  mod_id: number;
  quantity: number;
  slug?: string;
} | null>(null).on(sizeSelected, (_, state) => state);

export const $selectedColor = createStore<IColor | null>(null).on(colorSelected, (_, payload) => payload);

$selectedColor.watch((state) => console.log(state));
$selectedSize.watch((state) => console.log(state));
