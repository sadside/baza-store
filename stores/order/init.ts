import { API_URL_CLIENT } from "@/http";
import { IOrderPaymentData } from "@/models/Order";
import axios from "axios";
import {createEffect, createEvent, createStore, sample} from "effector";

const clickSam = createEvent()
const clickDost = createEvent()

const clickOplata = createEvent<string>()
const orderPageMounted = createEvent()

const getOrderPaymentDataFx = createEffect(async () => {
  try {
    const res = await axios.get<IOrderPaymentData>(`${API_URL_CLIENT}orders/calculate/`, {
      withCredentials: true
    })

    return res.data
  } catch {
    return null
  }
})

const $orderPaymentData = createStore<IOrderPaymentData | null>(null)
const $activeMeth = createStore<string>('sam').on(clickSam, ()=> 'sam').on(clickDost, ()=> 'dost')

const $activeOplata = createStore<string>('Onl').on(clickOplata, (_, payload)=> payload)


sample({
  clock: orderPageMounted,
  target: getOrderPaymentDataFx
})

sample({
  clock: getOrderPaymentDataFx.doneData,
  target: $orderPaymentData
})

export {clickSam, clickDost, $activeMeth, $activeOplata, clickOplata, orderPageMounted, $orderPaymentData}