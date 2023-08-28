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
  clock: [addToServerFx.doneData],
  fn: (items) => {

    console.log('effector', items)

    if (items.length) {
      const cart: IProductCart[] = items.map(item => {
        return {
          id: item.product.id,
          name: item.product.name,
          image: item.product.images.images[0],
          price: item.product.price,
          count: item.quantity,
          size: item.product.size,
          color: item.product.color,
          // slug: item.product.slug
        }
      })

      return cart
    }

    return []
  },
  target: [addToStorageFx, $cart]
})


export {mouseEnteredToCart, mouseLeavedFromCart, $cart, $showCart, addToStorageFx, productAddedToCart, pageMounted, productCountIncremented, productCounDecremented}