import { sample } from "effector"
import { smallMenuClosed, $showSmallMenu, dropdownMenuClosed, dropdownMenuOpened, $showDropdownMenu, smallMenuOpened } from "./init"

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
  clock: smallMenuClosed,
  fn: () => (false),
  target: [$showDropdownMenu, $showSmallMenu],
})

