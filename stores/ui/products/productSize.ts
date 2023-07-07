import { createEvent, createStore } from "effector";


export const sizeClicked = createEvent<string>()

export const $selectSize = createStore('').on(sizeClicked, (_, state) => state)

