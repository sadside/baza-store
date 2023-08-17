import { notAuthApi } from "@/api/api";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";
import { IProduct } from "@/components/productItem/productItem.interface";
import { pageMounted } from "@/stores/cart/init";
import { createEffect, createEvent, sample } from "effector";
import {createStore} from 'effector/compat'

// const getMenuContentFx = createEffect(async () => {
//   const menuContent = await notAuthApi.get(`api/menu-content/`)

//   return menuContent.data
// })


export const menuMounted = createEvent()

// const $menuContent = createStore<ICategory[]>([]).on(getMenuContentFx.done, (_, payload) => payload.result)

// $menuContent.watch(state => console.log(state))


// sample({
//   clock: menuMounted, 
//   target: getMenuContentFx
// })


// export {$menuContent, menuMounted, getMenuContentFx}