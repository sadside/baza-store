'use client';

import { FirstStep } from '@widgets/create-order-form/ui/auth-step/step';
import { SecondStep } from '@widgets/create-order-form/ui/pickup-step/second-step';
import { ReceiverStep } from '@widgets/create-order-form/ui/receiver-step/ui/receiver-step';
import { PaymentStep } from '@widgets/create-order-form/ui/payment-step/ui/payment-step';
import { OrderDetails } from '@widgets/create-order-form/ui/order-details';
import { useGate, useUnit } from 'effector-react';
import { $getUserFxStatus, getUserFx } from '@entities/user/model/user-model';
import { Skeleton } from '@shared/ui/shadcn/ui/skeleton';
import { $order, orderGate } from '@widgets/create-order-form/model/create-order-model';
import { $cart, getCartFxStatus } from '@entities/cart/model/cart-model';
import { EmptyCart } from '@/components/emptyCart/EmptyCart';

export const CreateOrderForm = () => {
  useGate(orderGate);

  const status = useUnit($getUserFxStatus);
  const cart = useUnit($cart);
  const cartLoadingStatus = useUnit(getCartFxStatus);

  if (!cart.length && cartLoadingStatus === 'done')
    return (
      <div className="max-w-[2560px] px-10">
        <div className="flex justify-center items-center py-10">
          <h2 className="text-[20px] uppercase font-semibold">Оформление заказа</h2>
        </div>
        <EmptyCart />
      </div>
    );

  return (
    <div className="max-w-[2560px] px-10">
      <div className="flex justify-center items-center py-10">
        <h2 className="text-[20px] uppercase font-semibold">Оформление заказа</h2>
      </div>
      <div className="w-full flex gap-5">
        <div className="flex-1">
          {status != 'done' ? (
            <>
              <Skeleton className={'h-[72px] w-full bg-black-100 mb-2'} />
              <Skeleton className={'h-[72px] w-full bg-black-100 mb-2'} />
              <Skeleton className={'h-[72px] w-full bg-black-100 mb-2'} />
            </>
          ) : (
            <>
              <FirstStep />
              <SecondStep />
              <ReceiverStep />
              <PaymentStep />
            </>
          )}
        </div>
        <OrderDetails />
      </div>
    </div>
  );
};
