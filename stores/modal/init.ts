import {createEvent, createStore, sample} from "effector";

const clickOut = createEvent()
const clickOpen = createEvent()


const $activeModal = createStore<boolean>(true)

sample({
    clock: clickOut,
    fn: () => false,
    target: $activeModal,
})
sample({
    clock: clickOpen,
    fn: () => true,
    target: $activeModal,
})

export {clickOut, clickOpen, $activeModal}