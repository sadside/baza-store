import { IColor } from "@/components/selectProductColor/SelectProductColor.interface";
import { Modification } from "@/models/Product";
import { createEvent, createStore, sample } from "effector";


export const sizeSelected = createEvent<{name: string, mod_id: number} | null>()
export const colorSelected = createEvent<IColor>()
export const pageUnMounted = createEvent()

export const $selectedSize = createStore<{name: string, mod_id: number}| null>(null).on(sizeSelected, (_, state) => state).reset(pageUnMounted)

export const $selectedColor = createStore<IColor | null>(null).on(colorSelected, (_, payload) => payload)



$selectedColor.watch((state) => console.log(state))



