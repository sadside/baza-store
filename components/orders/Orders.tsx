'use client';

import React from 'react';
import Link from 'next/link';
import { LkActualOrders } from '@widgets/lk-actual-order';
import ActualOrder from '@entities/order/ui/actual-order';
import { useUnit } from 'effector-react';
import { $orders } from '@entities/order';
import { $actualOrders, $archiveOrders, getOrdersFx } from '@entities/order/model/order-model';
import { ArchiveOrder } from '@entities/order/ui/acrhive-order';
import { OrdersEmpty } from '@entities/order/ui/orders-empty';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@shared/ui/shadcn/ui/skeleton';

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

  const loading = useUnit(getOrdersFx.pending);

  if (loading) return <Skeleton className="bg-black-50 h-full w-full"></Skeleton>;

  return (
    <>
      {!orders?.length ? (
        <OrdersEmpty />
      ) : (
        <div className="w-full">
          {activeOrders?.map((order) => <ActualOrder order={order} key={order.id} />)}
          {archiveOrders?.map((order) => <ArchiveOrder order={order} key={order.id} />)}
        </div>
      )}
    </>
  );
};
