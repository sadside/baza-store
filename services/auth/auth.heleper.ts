import { IUser } from '@/stores/user/user.interface'

export const saveToStorage = (user: IUser): void => {
	localStorage.setItem('user', user.name)
}

export const getAccessToken = () => localStorage.getItem('token')
