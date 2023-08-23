import AuthService from '@/services/AuthService'
import axios, { AxiosResponse } from 'axios'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { IUser } from '@/models/User'
import { API_URL_CLIENT } from '@/http'

export const phoneInputSubmitted = createEvent<string>()
export const codeInputSubmitted = createEvent<{phone: string, code: string}>()


export const postUserFx = createEffect(async (data: any) => {
  try {
    const res = await axios.post(`${API_URL_CLIENT}profile/info/`, {
      name: data.name,
      surname: data.surname,
      birthday_date: data.dateOfBth.replace('.', '-'),
      city: data.city,
      street: data.street,
      house: data.house,
      frame: data.frame,
      apartment: data.room,
			email: data.mail,
    });

    return res.data
  } catch {
		console.log('errrrrror')
    throw new Error('Ошибка получения личных данных')
  }
})



export const saveUser = createEvent()
export const $user = createStore<IUser | null >(null).on(saveUser, (_, state) => state).on(postUserFx.doneData, (_, payload) => payload)

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

sample({
	clock: postUserFx.doneData,
	target: $user,
})


$user.watch(state => console.log(state))