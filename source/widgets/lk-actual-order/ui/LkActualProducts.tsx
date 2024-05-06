'use client';

import ActualOrder from '@entities/order/ui/actual-order';
import { ActualOrderActions } from '@/source/features/actual-order-actions';
import { useUnit } from 'effector-react';
import { $actualOrders, getOrdersFx } from '@entities/order/model/order-model';
import { OrdersEmpty } from '@entities/order/ui/orders-empty';
import { Skeleton } from '@shared/ui/shadcn/ui/skeleton';

export const LkActualOrders = () => {
  const actualOrders = useUnit($actualOrders);
  const loading = useUnit(getOrdersFx.pending);

  if (loading && !actualOrders) return <Skeleton className="bg-black-50 h-[100px] rounded w-full" />;

  return (
    <div className="w-full">
      <h2 className="text-[14px] font-medium uppercase mb-2.5">актуальные заказы</h2>
      {actualOrders?.length ? (
        actualOrders.map((order) => <ActualOrder order={order} key={order.id} />)
      ) : (
        <OrdersEmpty />
      )}
    </div>
  );
};
