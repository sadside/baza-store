import { ICategory } from '@/components/menuCategory/menuCategory.interface';
import { createEvent, createStore, sample } from 'effector';

const smallMenuClosed = createEvent();
const dropdownMenuClosed = createEvent();
const dropdownMenuOpened = createEvent();
const smallMenuOpened = createEvent();
export const menuChanged = createEvent<'transparent' | 'color'>();

const HamburgMenuOpened = createEvent();
const HamburgMenuClosed = createEvent();
const categoryBurgerSelected = createEvent<ICategory>();
const HamburgCategoryOpen = createEvent();
const HamburgCategoryClose = createEvent();
const $showHamburgMenu = createStore(false);
const $showBurgerCategory = createStore(false);

const $showSmallMenu = createStore(true);
const $showDropdownMenu = createStore(false);
export const heightChanged = createEvent<number>();

export const $videoHeight = createStore(0).on(heightChanged, (_, paylaod) => paylaod);

export const $stateOfMenu = createStore<'transparent' | 'color'>('transparent').on(
  menuChanged,
  (_, payload) => payload
);
export const categorySelected = createEvent<ICategory>();
export const categoryCleared = createEvent();
export const $activeCategoryBurger = createStore<ICategory | null>(null).on(
  categoryBurgerSelected,
  (_, payload) => payload
);

export const $activeCategory = createStore<ICategory | null>(null).on(categorySelected, (_, payload) => payload);

sample({
  clock: smallMenuClosed,
  fn: () => false,
  target: $showSmallMenu,
});

sample({
  clock: smallMenuOpened,
  fn: () => true,
  target: $showSmallMenu,
});

sample({
  clock: dropdownMenuClosed,
  fn: () => false,
  target: $showDropdownMenu,
});

sample({
  clock: categorySelected,
  fn: () => true,
  target: $showDropdownMenu,
});

sample({
  clock: HamburgMenuOpened,
  fn: () => true,
  target: $showHamburgMenu,
});
sample({
  clock: HamburgMenuClosed,
  fn: () => false,
  target: $showHamburgMenu,
});
sample({
  clock: HamburgCategoryOpen,
  fn: () => true,
  target: $showBurgerCategory,
});
sample({
  clock: HamburgMenuClosed,
  fn: () => false,
  target: $showBurgerCategory,
});
sample({
  clock: HamburgCategoryClose,
  fn: () => false,
  target: $showBurgerCategory,
});
sample({
  clock: categoryCleared,
  fn: () => false,
  target: $showDropdownMenu,
});

sample({
  clock: dropdownMenuClosed,
  target: categoryCleared,
});

export {
  $showDropdownMenu,
  $showSmallMenu,
  smallMenuClosed,
  dropdownMenuClosed,
  smallMenuOpened,
  dropdownMenuOpened,
  $showHamburgMenu,
  HamburgMenuOpened,
  HamburgMenuClosed,
  $showBurgerCategory,
  HamburgCategoryClose,
  categoryBurgerSelected,
  HamburgCategoryOpen,
};
