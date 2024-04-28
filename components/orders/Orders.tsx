'use client';

import React from 'react';
import Link from 'next/link';
import { LkActualOrders } from '@widgets/lk-actual-order';
import ActualOrder from '@entities/order/ui/actual-order';
import { useUnit } from 'effector-react';
import { $orders } from '@entities/order';
import { $actualOrders, $archiveOrders } from '@entities/order/model/order-model';
import { ArchiveOrder } from '@entities/order/ui/acrhive-order';
import { OrdersEmpty } from '@entities/order/ui/orders-empty';

export type miniOrder = {
  name: string;
  id: number;
  count: number;
  price: number;
  img: string;
};
export type OrderType = {
  date: {
    by: string;
    of: string;
  };
  id: number;
  state: string;
  baza: string;
  children: miniOrder[];
};
export const Orders = () => {
  const orders = useUnit($orders);
  const activeOrders = useUnit($actualOrders);
  const archiveOrders = useUnit($archiveOrders);

  return (
    <>
      {!orders?.length ? (
        <>
          <OrdersEmpty />
        </>
      ) : (
        <div className="w-full">
          {activeOrders?.map((order) => <ActualOrder order={order} key={order.id} />)}
          {archiveOrders?.map((order) => <ArchiveOrder order={order} key={order.id} />)}
        </div>
      )}
    </>
  );
};
