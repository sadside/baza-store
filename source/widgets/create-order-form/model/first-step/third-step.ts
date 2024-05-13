import { createEvent, createStore } from "effector";

export const offerCheckBoxClicked = createEvent();
export const policyCheckBoxClicked = createEvent();

export const $offerCheckBox = createStore(false).on(offerCheckBoxClicked, (state) => !state);
export const $policyCheckBox = createStore(false).on(policyCheckBoxClicked, (state) => !state);
