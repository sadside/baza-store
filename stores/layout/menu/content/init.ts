import { notAuthApi } from "@/api/api";
import { ICategory } from "@/components/menuCategory/menuCategory.interface";
import { pageMounted } from "@/stores/cart/init";
import { createEffect, createEvent, sample } from "effector";
import {createStore} from 'effector/compat'

const getMenuContentFx = createEffect(async () => {
  const menuContent = await notAuthApi.get(`api/menu-content/`)

  return menuContent.data
})


const menuMounted = createEvent()

const $menuContent = createStore([]).on(getMenuContentFx.done, (_, payload) => payload.result)


sample({
  clock: menuMounted, 
  target: getMenuContentFx
})


export {$menuContent, menuMounted, getMenuContentFx}