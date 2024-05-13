import { createEvent, createStore, sample } from "effector";

const changeTypeAddresses = createEvent<string>();

const $activeTypeAddressesSelf = createStore<string>("personal");

sample({
  clock: changeTypeAddresses,
  target: $activeTypeAddressesSelf
});

export { changeTypeAddresses, $activeTypeAddressesSelf };
