import { IColor } from "@/components/selectProductColor/SelectProductColor.interface";
import { createEvent, createStore } from "effector";


export const sizeSelected = createEvent<string>()
export const colorSelected = createEvent<IColor>()

export const $selectedSize = createStore('').on(sizeSelected, (_, state) => state)

export const $selectedColor = createStore<IColor | null>(null).on(colorSelected, (_, payload) => payload)


$selectedColor.watch((state) => console.log(state))




