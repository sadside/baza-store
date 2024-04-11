import { createEvent, createStore, sample } from "effector";

const changeVisibleAddress = createEvent<boolean>();


const $activeModalAddress = createStore<boolean>(false);

sample({
  clock: changeVisibleAddress,
  fn: e => e,
  target: $activeModalAddress
});

export { changeVisibleAddress, $activeModalAddress };