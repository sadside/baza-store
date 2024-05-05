import { createStore, sample } from 'effector';
import { ViewOrder, ViewOrderStatusEnum } from '@shared/api/__generated__/generated-api.schemas';
import { createGate } from 'effector-react';
import { createEffect } from 'effector';
import { status } from 'patronum/status';
import { createCourierAddressFx } from '@/source/features/add-address-courier/model/add-address-courier-model';
import { $addresses } from '@entities/address/model/address-model';
import { ordersOrdersList } from '@shared/api/__generated__/generated-api';
import { lkGate } from '@/source/layouts/lk-layout/model/lk-layout-model';

export const getOrdersFx = createEffect(async () => {
  try {
    const res = await ordersOrdersList();

    return res.data;
  } catch (e) {
    throw new Error('Ошибка при загрузке заказов');
  }
});

const $getOrdersStatusFx = status({ effect: getOrdersFx });

export const $orders = createStore<ViewOrder[] | null>(null);
export const $actualOrders = $orders.map(
  (orders) =>
    orders?.filter(
      (order) => order.status !== ViewOrderStatusEnum.received && order.status !== ViewOrderStatusEnum.cancelled
    )
);

export const $archiveOrders = $orders.map(
  (orders) =>
    orders?.filter(
      (order) => order.status === ViewOrderStatusEnum.received || order.status === ViewOrderStatusEnum.cancelled
    )
);
export const $actualOrder = createStore<ViewOrder | null>(null);

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
