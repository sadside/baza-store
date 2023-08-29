import { addProductToStorage } from "@/utils/localStorage/localStorage"
import { createEffect, createEvent, createStore, sample } from "effector"
import { IProductCart } from "./cart.interface"
import { dropdownMenuOpened, smallMenuClosed } from "../layout/menu/init"
import { createListWithNewProduct, decrementProductCount, incrementProductCount } from "./cart.helper"
import { IUser } from "@/models/User"
import axios from "axios"
import { API_URL_CLIENT } from "@/http"
import { IFullProduct } from "@/models/Product"
import { IServerCart } from "@/models/Cart"
import AuthService from "@/services/AuthService"

const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products)
})

export const addToServerFx = createEffect(async (id: number) => {
  try {
    const res = await axios.post(`${API_URL_CLIENT}profile/cart/add/`, {
      modification_id: id,
    }, {
      withCredentials: true
    })

    return res.data as IServerCart[]
  } catch (e) {
    // throw new Error('Ошибка')
    //@ts-ignore
    console.log(e.message())
    return []
  }
})

export const synchronizationWithLocalStorage = createEffect(async () => {

  const products = localStorage.getItem('products') as string


  const cart = JSON.parse(products)

  const body: {
    modifications: number[],
    quantities: number[]
  } = {
    modifications: [],
    quantities: []
  }

  cart.forEach((item: any) => {
    body.modifications.push(item.id)
    body.quantities.push(item.count)
  })

  try {
    const res = await axios.post(`${API_URL_CLIENT}profile/cart/`, body, {
      withCredentials: true
    })

    return res.data as IServerCart[]
  } catch(e: any) {
    console.log(e.message())
    return []
  }
})

export const decrementProductCountServer = createEffect(async ({id, quantity}: {id: number, quantity: number}) => {
  try {
    const res = await axios.post(`${API_URL_CLIENT}profile/cart/remove/`, {
      modification_id: id,
    })

    return res.data as IServerCart[]
  } catch {
    // throw new Error('Ошибка.')
    return []
  }
})

export const getCartFromServerFx = createEffect(async () => {
  try {
    const res = await axios.get(`${API_URL_CLIENT}profile/cart/`)

    return res.data as IServerCart[]
  } catch {
    return []
  }
})



export const getCartFromLocalStorageFx = createEffect<void, IProductCart[]>(() => {
  return JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[]
})

const productAddedToCart = createEvent<IProductCart>()
const pageMounted = createEvent<IUser>()
const mouseLeavedFromCart = createEvent<any>()
const mouseEnteredToCart = createEvent<any>()
const productCountIncremented = createEvent<IProductCart>()
const productCounDecremented = createEvent<IProductCart>()

const $showCart = createStore(false).on(mouseEnteredToCart, () => true).on(mouseLeavedFromCart, () => false)
const $cart = createStore<IProductCart[]>([])

sample({
  clock: [dropdownMenuOpened, smallMenuClosed],
  target: mouseLeavedFromCart
})

sample({ 
  clock: productCountIncremented,
  source: $cart,
  fn: incrementProductCount,
  target: [addToStorageFx, $cart]
})

sample({
  //@ts-ignore
  clock: productCounDecremented,
  source: $cart,
  fn: decrementProductCount,
  target: [addToStorageFx, $cart]
})

sample({
  clock: getCartFromLocalStorageFx,
  fn: () => (JSON.parse(localStorage.getItem('products') || '[]') as IProductCart[]),
  target: $cart,
})
 
sample({ 
  clock: productAddedToCart,
  source: $cart,
  fn: createListWithNewProduct,
  target: [addToStorageFx, $cart]
})

sample({
  clock: [addToServerFx.doneData, getCartFromServerFx.doneData],
  fn: (items) => {

    if (items.length) {
      const cart: IProductCart[] = items.map(item => {
        return {
          id: item.product.id,
          name: item.product.name,
          image: item.product.image,
          price: item.product.price,
          count: item.quantity,
          size: item.product.size,
          color: item.product.color,
          slug: item.product.slug
        }
      })
      return cart
    }

    return []
  },
  target: [$cart, addToStorageFx],
})

export const phoneInputSubmitted = createEvent<string>()
export const codeInputSubmitted = createEvent<{phone: string, code: string}>()

// sample({
//   clock: synchronizationWithLocalStorage.doneData,
//   fn: (items) => {

//     if (items.length) {
//       const cart: IProductCart[] = items.map(item => {
//         return {
//           id: item.product.id,
//           name: item.product.name,
//           image: item.product.image,
//           price: item.product.price,
//           count: item.quantity,
//           size: item.product.size,
//           color: item.product.color,
//           slug: item.product.slug
//         }
//       })
//       return cart
//     }

//     return []
//   },
//   target: $cart,
// })


export const postUserFx = createEffect(async (data: any) => {
  try {

		// const date = data.date.split('.').reverse().join('-')

		data = {
      name: data.name,
      surname: data.surname,
      birthday_date: data.date,
      city: data.city,
      street: data.street,
      house: data.house,
      frame: data.frame,
      apartment: data.room,
			email: data.mail,
    }

		console.log(data)

    const res = await axios.post(`${API_URL_CLIENT}profile/info/`, data);

		console.log(res)

    return res.data
  } catch(error) {
		if (axios.isAxiosError(error)) {
      console.log(error.status)
      console.error(error.response);
    } else {
      console.error(error);
    }
  }
})



export const saveUser = createEvent()

export const logoutFx = createEffect(async () => {
	await AuthService.logout()
})

export const $user = createStore<IUser | null >(null).on(saveUser, (_, state) => state).on(postUserFx.doneData, (_, payload) => payload).reset(logoutFx.doneData)

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
	target: [$user, getCartFromServerFx],
})


sample({
	clock: loginFx.doneData, 
	target: $user
})

sample({
	clock: postUserFx.doneData,
	target: $user,
})

sample({
  clock: loginFx.doneData,
  target: synchronizationWithLocalStorage
})


$user.watch(state => console.log(state))
$cart.watch(state => console.log('cart: ', state))

export {mouseEnteredToCart, mouseLeavedFromCart, $cart, $showCart, addToStorageFx, productAddedToCart, pageMounted, productCountIncremented, productCounDecremented}