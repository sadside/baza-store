import { createEvent, createStore, sample } from "effector";

const clickSam = createEvent();
const clickDost = createEvent();

const clickOplata = createEvent<string>();

const $activeMeth = createStore<string>("pickup")
  .on(clickSam, () => "pickup")
  .on(clickDost, () => "delivery_address");

const $activeOplata = createStore<string>("Nal").on(
  clickOplata,
  (_, payload) => payload,
);

export { clickSam, clickDost, $activeMeth, $activeOplata, clickOplata };
