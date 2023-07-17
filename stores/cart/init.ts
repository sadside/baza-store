import { addProductToStorage } from "@/utils/localStorage/localStorage"
import { createEffect, createEvent, createStore } from "effector"
import { IProductCart } from "./cart.interface"

const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products)
})

const productAddedToCart = createEvent<IProductCart>()
const pageMounted = createEvent()

const mouseLeavedFromCart = createEvent<any>()
const mouseEnteredToCart = createEvent<any>()

const $showCart = createStore(false).on(mouseEnteredToCart, () => true).on(mouseLeavedFromCart, () => false)

const $cart = createStore<IProductCart[]>([])


$showCart.watch(state => console.log(state))


export {mouseEnteredToCart, mouseLeavedFromCart, $cart, $showCart, addToStorageFx, productAddedToCart, pageMounted}