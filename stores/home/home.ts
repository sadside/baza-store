import { createEvent, createStore, sample } from "effector";

const changeVisibleWoman = createEvent<boolean>();


const $showWomanHome = createStore<boolean>(false);

sample({
  clock: changeVisibleWoman,
  target: $showWomanHome
});

const changeVisibleMan = createEvent<boolean>();


const $showManHome = createStore<boolean>(false);

sample({
  clock: changeVisibleMan,
  target: $showManHome
});

export { changeVisibleWoman, $showWomanHome, changeVisibleMan, $showManHome };