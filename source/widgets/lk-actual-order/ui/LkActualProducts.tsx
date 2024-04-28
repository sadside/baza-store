'use client';

import ActualOrder from '@entities/order/ui/actual-order';
import { ActualOrderActions } from '@/source/features/actual-order-actions';
import { useUnit } from 'effector-react';
import { $actualOrders } from '@entities/order/model/order-model';
import { OrdersEmpty } from '@entities/order/ui/orders-empty';

export const LkActualOrders = () => {
  const actualOrders = useUnit($actualOrders);
  return (
    <div className="w-full">
      {actualOrders?.length ? (
        actualOrders.map((order) => <ActualOrder order={order} key={order.id} />)
      ) : (
        <OrdersEmpty />
      )}
      <ActualOrderActions />
    </div>
  );
};
