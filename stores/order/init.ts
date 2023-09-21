import { API_URL_CLIENT } from "@/http";
import { IOrder, IOrderPaymentData } from "@/models/Order";
import OrderServise from "@/services/OrderService";
import axios from "axios";
import { createEffect, createEvent, createStore, sample } from "effector";

const clickSam = createEvent();
const clickDost = createEvent();

const clickOplata = createEvent<string>();
const orderPageMounted = createEvent();

export const $orders = createStore<IOrder[]>([]);

export const createOrderFx = createEffect(async (data: any) => {
  const res = await OrderServise.createOrder(data);

  return res.data as IOrder[];
});

export const getOrders = createEffect(async () => {
  try {
    const res = await axios.get(`${API_URL_CLIENT}orders/orders/`, {
      withCredentials: true,
    });

    return res.data as IOrder[];
  } catch {
    return [];
  }
});

sample({
  clock: createOrderFx.doneData,
  target: $orders,
});

const getOrderPaymentDataFx = createEffect(async () => {
  try {
    const res = await axios.get<IOrderPaymentData>(
      `${API_URL_CLIENT}orders/calculate/`,
      {
        withCredentials: true,
      },
    );

    return res.data;
  } catch {
    return null;
  }
});

const $orderPaymentData = createStore<IOrderPaymentData | null>(null);
const $activeMeth = createStore<string>("sam")
  .on(clickSam, () => "sam")
  .on(clickDost, () => "dost");

const $activeOplata = createStore<string>("Onl").on(
  clickOplata,
  (_, payload) => payload,
);

sample({
  clock: orderPageMounted,
  target: getOrderPaymentDataFx,
});

sample({
  clock: getOrders.doneData,
  target: $orders,
});

sample({
  clock: getOrderPaymentDataFx.doneData,
  target: $orderPaymentData,
});

export const cityInputChanged = createEvent<string>();
export const citySelected = createEvent<string>();

export const $selectedCity = createStore<string>("")
  .on(citySelected, (_, state) => state)
  .reset(cityInputChanged);

export const getOrderPriceInfoFx = createEffect(async (address = "") => {
  try {
    const response = await axios.get(`${API_URL_CLIENT}orders/calculate/`, {
      params: {
        delivery_address: address,
      },
    });

    //TODO: вынести в интерфейс

    return response.data as {
      price: number;
      delivery?: {
        price: number;
        period_min: number;
        period_max: number;
      };
    };
  } catch {
    return null;
  }
});

export const $orderPriceData = createStore<{
  price: number;
  delivery?: {
    price: number;
    period_min: number;
    period_max: number;
  };
} | null>(null);

// export const $deliveryOrderPrice = createStore(0);

export const getCitySuggestionsFx = createEffect(async (string: string) => {
  try {
    const response = await axios.get(
      `${API_URL_CLIENT}profile/search-address/`,
      {
        params: {
          q: string,
          type: "city",
          limit: 5,
        },
      },
    );

    return response.data as string[];
  } catch {
    return [];
  }
});
export const $cityInputValue = createStore("")
  .on(cityInputChanged, (_, payload) => payload)
  .on(citySelected, (_, city) => city);
export const $citySuggestions = createStore<string[]>([]);

sample({
  clock: citySelected,
  fn: () => [],
  target: $citySuggestions,
});

sample({
  clock: cityInputChanged,
  target: getCitySuggestionsFx,
});

sample({
  clock: getCitySuggestionsFx.doneData,
  target: $citySuggestions,
});

// street

export const streetInputChanged = createEvent<string>();
export const streetSelected = createEvent<string>();

export const getStreetSuggestionsFx = createEffect(
  async ({ street, city }: { street: string; city: string }) => {
    try {
      const response = await axios.get(
        `${API_URL_CLIENT}profile/search-address/`,
        {
          params: {
            q: `${city}, ${street}`,
            type: "street",
            limit: 5,
          },
        },
      );

      return response.data as string[];
    } catch {
      return [];
    }
  },
);
export const $streetInputValue = createStore("")
  .on(streetInputChanged, (_, payload) => payload)
  .reset(cityInputChanged);

export const $selectedStreet = createStore<string | null>(null)
  .on(streetSelected, (_, state) => state)
  .reset(streetInputChanged, cityInputChanged);
export const $streetSuggestions = createStore<string[]>([]);

sample({
  clock: streetSelected,
  target: $streetInputValue,
});

sample({
  clock: streetSelected,
  fn: () => [],
  target: $streetSuggestions,
});

sample({
  clock: streetInputChanged,
  filter: (street) => street === "",
  fn: () => [],
  target: $streetSuggestions,
});

sample({
  source: { city: $cityInputValue },
  clock: streetInputChanged,
  filter: ({ city }, street) => !!city && !!street,
  fn: ({ city }, street) => ({ city, street }),
  target: getStreetSuggestionsFx,
});

sample({
  clock: getStreetSuggestionsFx.doneData,
  target: $streetSuggestions,
});

// house

export const houseInputChanged = createEvent<string>();
export const houseSelected = createEvent<string>();

export const getHouseSuggestionsFx = createEffect(
  async ({
    house,
    city,
    street,
  }: {
    house: string;
    city: string;
    street: string;
  }) => {
    try {
      const response = await axios.get(
        `${API_URL_CLIENT}profile/search-address/`,
        {
          params: {
            q: `${city}, ${street}, ${house}`,
            type: "house",
            limit: 5,
          },
        },
      );

      return response.data as string[];
    } catch {
      return [];
    }
  },
);
export const $houseInputValue = createStore("")
  .on(houseInputChanged, (_, payload) => payload)
  .reset(cityInputChanged, streetInputChanged);

export const $selectedHouse = createStore<string | null>(null)
  .on(houseSelected, (_, state) => state)
  .reset(houseInputChanged, cityInputChanged, streetInputChanged);
export const $houseSuggestions = createStore<string[]>([]);

sample({
  clock: houseSelected,
  target: $houseInputValue,
});

sample({
  clock: houseSelected,
  fn: () => [],
  target: $houseSuggestions,
});

sample({
  clock: houseInputChanged,
  filter: (house) => house === "",
  fn: () => [],
  target: $houseSuggestions,
});

sample({
  //@ts-ignore
  source: { city: $selectedCity, street: $selectedStreet },
  clock: houseInputChanged,
  filter: ({ city, street }, house) => !!city && !!house && !!street,
  fn: ({ city, street }, house) => ({ city, house, street }),
  target: getHouseSuggestionsFx,
});

sample({
  clock: getHouseSuggestionsFx.doneData,
  target: $houseSuggestions,
});

sample({
  clock: orderPageMounted,
  source: {
    city: $selectedCity,
    street: $selectedStreet,
    house: $selectedHouse,
  },
  fn: ({ city, street, house }) => {
    if (city && street && house) return `${city}, ${street} улица, ${house}`;
    else return "";
  },
  target: getOrderPriceInfoFx,
});

sample({
  clock: houseSelected,
  source: {
    city: $selectedCity,
    street: $selectedStreet,
    house: $selectedHouse,
  },
  fn: ({ city, street, house }) => {
    if (city && street && house) return `${city}, ${street} улица, ${house}`;
    else return "";
  },
  target: getOrderPriceInfoFx,
});

export {
  clickSam,
  clickDost,
  $activeMeth,
  $activeOplata,
  clickOplata,
  orderPageMounted,
  $orderPaymentData,
};
