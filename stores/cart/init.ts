import { addProductToStorage } from "@/utils/localStorage/localStorage"
import { createEffect, createEvent, createStore, sample } from "effector"
import { IProductCart } from "./cart.interface"
import { dropdownMenuOpened, smallMenuClosed } from "../layout/menu/init"
import { createListWithNewProduct, decrementProductCount, incrementProductCount } from "./cart.helper"

const addToStorageFx = createEffect((products: IProductCart[]) => {
  addProductToStorage(products)
})

const productAddedToCart = createEvent<IProductCart>()
const pageMounted = createEvent()
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
  clock: pageMounted,
  fn: () => (JSON.parse(localStorage.getItem('products') || '[]')),
  target: $cart
})
 
sample({ 
  clock: productAddedToCart,
  source: $cart,
  fn: createListWithNewProduct,
  target: [addToStorageFx, $cart]
})


export {mouseEnteredToCart, mouseLeavedFromCart, $cart, $showCart, addToStorageFx, productAddedToCart, pageMounted, productCountIncremented, productCounDecremented}