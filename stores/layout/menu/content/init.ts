import { createEvent } from "effector";

// const getMenuContentFx = createEffect(async () => {
//   const menuContent = await notAuthApi.get(`api/menu-content/`)

//   return menuContent.data
// })


export const menuMounted = createEvent();

// const $menuContent = createStore<ICategory[]>([]).on(getMenuContentFx.done, (_, payload) => payload.result)

// $menuContent.watch(state => console.log(state))


// sample({
//   clock: menuMounted, 
//   target: getMenuContentFx
// })


// export {$menuContent, menuMounted, getMenuContentFx}