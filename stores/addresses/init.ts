import { createEvent, createStore, sample } from "effector";

const changeTypeAddresses = createEvent<string>();


const $activeTypeAddressesSelf = createStore<string>("cdek");

sample({
  clock: changeTypeAddresses,
  fn: e => e,
  target: $activeTypeAddressesSelf
});

export { changeTypeAddresses, $activeTypeAddressesSelf };