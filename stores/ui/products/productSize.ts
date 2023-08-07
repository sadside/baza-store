import { createEvent, createStore } from "effector";


export const sizeSelected = createEvent<string>()

export const $selectedSize = createStore('').on(sizeSelected, (_, state) => state)

