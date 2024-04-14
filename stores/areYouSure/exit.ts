import { createEvent, createStore, sample } from "effector";

const changeVisibleExit = createEvent<boolean>();


const $activeModalExit = createStore<boolean>(false);

sample({
  clock: changeVisibleExit,
  fn: e => e,
  target: $activeModalExit
});

export { changeVisibleExit, $activeModalExit };