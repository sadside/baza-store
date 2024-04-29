import { createStore, sample } from 'effector';
import { ViewOrder, ViewOrderStatusEnum } from '@shared/api/__generated__/generated-api.schemas';
import { createGate } from 'effector-react';
import { createEffect } from 'effector';
import { ordersOrdersRetrieve } from '@shared/api/__generated__/generated-api';
import { status } from 'patronum/status';

export const getOrdersFx = createEffect(async () => {
  try {
    const res = await ordersOrdersRetrieve();

    return res.data;
  } catch (e) {
    throw new Error('Ошибка при загрузке заказов');
  }
});

const $getOrdersStatusFx = status(getOrdersFx);

export const $orders = createStore<ViewOrder[] | null>(null);
export const $actualOrders = $orders.map(
  (orders) => orders?.filter((order) => order.status !== ViewOrderStatusEnum.received)
);
export const $archiveOrders = $orders.map(
  (orders) => orders?.filter((order) => order.status === ViewOrderStatusEnum.received)
);
export const $actualOrder = createStore<ViewOrder | null>(null);
export const lkGate = createGate();

sample({
  clock: lkGate.open,
  source: $getOrdersStatusFx,
  filter: (status) => status !== 'pending',
  target: getOrdersFx,
});

sample({
  clock: $orders,
  filter: (orders) => orders !== null && orders?.length > 0,
  fn: (orders) => (orders !== null ? orders[0] : null),
  target: $actualOrder,
});

sample({
  clock: getOrdersFx.doneData,
  target: $orders,
});
