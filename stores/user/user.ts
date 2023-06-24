import axios from "axios";
import {createEffect, createEvent, createStore, forward, sample} from "effector";

export const getUser = createEvent()

const getUserFx = createEffect(async () => {
	const {data} = await axios.get('http://localhost:3000/api/hello')
	
	return data
})

forward({from: getUser, to: getUserFx})

export const $username = createStore('').on(getUserFx.doneData, (_, newUser: any) => newUser.name as string)

$username.watch((state) => {
	console.log(state)
})