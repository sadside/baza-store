import {createEvent, createStore, sample} from "effector";

const clickSam = createEvent()
const clickDost = createEvent()

const clickOplata = createEvent<string>()


const $activeMeth = createStore<string>('sam').on(clickSam, ()=> 'sam').on(clickDost, ()=> 'dost')

const $activeOplata = createStore<string>('Onl').on(clickOplata, (_, payload)=> payload)

export {clickSam, clickDost, $activeMeth, $activeOplata, clickOplata}