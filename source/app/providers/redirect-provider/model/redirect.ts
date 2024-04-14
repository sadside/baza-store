import { createEvent, createStore, sample } from "effector";

const $redirectPath = createStore<string | null>(null);

const redirect = createEvent<string>();

sample({
  clock: redirect,
  target: $redirectPath
});

export { $redirectPath };
