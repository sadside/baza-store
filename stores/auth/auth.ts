import { createEvent, createStore } from 'effector'

export const phoneInputSubmitted = createEvent<string>()
export const codeInputSubmitted = createEvent()

export const $phoneNumber = createStore('')
	.on(phoneInputSubmitted, (_, newState) => newState)
	.reset(codeInputSubmitted)

