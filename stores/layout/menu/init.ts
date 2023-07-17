import { ICategory } from "@/components/menuCategory/menuCategory.interface";
import { createEvent, createStore, sample } from "effector";


const smallMenuClosed = createEvent()
const dropdownMenuClosed = createEvent()
const dropdownMenuOpened = createEvent()
const smallMenuOpened = createEvent()

const $showSmallMenu = createStore(true)
const $showDropdownMenu = createStore(false)

export const categorySelected = createEvent<ICategory>()
export const categoryCleared = createEvent()

export const $activeCategory = createStore<ICategory | null>(null).on(categorySelected, (_, payload) => payload)

$activeCategory.watch(state => console.log(state))


sample({
  clock: smallMenuClosed,
  fn: () => (false),
  target: $showSmallMenu,
})

sample({
  clock: smallMenuOpened,
  fn: () => (true),
  target: $showSmallMenu,
})

sample({
  clock: dropdownMenuClosed,
  fn: () => (false),
  target: $showDropdownMenu,
})

sample({
  clock: categorySelected,
  fn: () => true,
  target: $showDropdownMenu,
})

sample({
  clock: categoryCleared,
  fn: () => false,
  target: $showDropdownMenu,
})

sample({
  clock: dropdownMenuClosed,
  target: categoryCleared
})





export {$showDropdownMenu, $showSmallMenu, smallMenuClosed
, dropdownMenuClosed, smallMenuOpened, dropdownMenuOpened}