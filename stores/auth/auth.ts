import AuthService from '@/services/AuthService'
import axios, { AxiosResponse } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { IUser } from '@/models/User'

export const phoneInputSubmitted = createEvent<string>()
export const codeInputSubmitted = createEvent<{phone: string, code: string}>()


export const saveUser = createEvent()
export const $user = createStore<IUser | null >(null).on(saveUser, (_, state) => state)

export const loginFx = createEffect(async ({phone, code}: {phone: string, code: string}) => {
	try {
		const res = await AuthService.login(phone, code)

		return res.data
	} catch (e: any) {
		console.log(e.message())
		return null
	}
})

export const getUserFx = createEffect(async () => {
	try {
		const res = await AuthService.getUser()

		return res.data
	} catch (e: any) {
		console.log(e.message())
		return null
	}
})

export const logoutFx = createEffect(async () => {})

export const $loading = createStore(true).on(getUserFx.finally, () => false)

export const $phoneNumber = createStore<string>('')
	.on(phoneInputSubmitted, (_, newState) => newState)
	.reset(loginFx.doneData)

sample({
	clock: codeInputSubmitted,
	target: loginFx,
})

sample({
	clock: getUserFx.doneData,
	target: $user,
})

sample({
	clock: loginFx.doneData, 
	target: $user
})


$user.watch(state => console.log(state))