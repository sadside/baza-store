
import {createEffect, createEvent, createStore} from "effector";

const clickCategory = createEvent<number>()
const $activeCategory = createStore<number>(0).on(clickCategory, (_, payload) => payload)




export {clickCategory, $activeCategory}