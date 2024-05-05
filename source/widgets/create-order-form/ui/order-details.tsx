import { useUnit } from 'effector-react';
import { $currentFormStep, $order, orderCalculateFx } from '@widgets/create-order-form/model/create-order-model';
import { $selectedPickUp } from '@widgets/create-order-form/model/second-step/step';
import PartsLogo from '@shared/assets/icons/parts.svg';
import RightArrow from '@shared/assets/icons/tui-ic-small-pragmatic/chevron-right.svg';
import React from 'react';
import { OrderProductItem } from '@widgets/create-order-form/ui/order-product-item';
import { Skeleton } from '@shared/ui/shadcn/ui/skeleton';
import { $getUserFxStatus } from '@entities/user/model/user-model';
import { Address, Calculate } from '@shared/api/__generated__/generated-api.schemas';
import { cartDrawerOpened } from '@widgets/cart-drawer/model/cart-drawer-model';

export const OrderDetails = () => {
  const currentStep = useUnit($currentFormStep);
  const selectedPickup = useUnit($selectedPickUp) as Address;
  const calculatedOrder = useUnit($order) as Calculate;
  const loading = useUnit(orderCalculateFx.pending);
  const status = useUnit($getUserFxStatus);

  const handleEditOrderClick = () => {
    cartDrawerOpened();
  };

  return (
    <div className="bg-white-600 w-[380px] py-6 px-[18px]" style={{ height: 'min-content' }}>
      {currentStep <= 2 && (
        <div>
          <h2 className="uppercase font-semibold mb-[18px]">ДЕТАЛИ ЗАКАЗА</h2>
          {status !== 'done' ? (
            <Skeleton className="bg-black-100 h-4 w-full" />
          ) : (
            <p className="uppercase text-[12px]">детали заказа будут доступны после авторизации</p>
          )}
        </div>
      )}
      {currentStep >= 3 && (
        <div>
          <div className="flex mb-[18px] justify-between">
            <h2 className="uppercase font-semibold">ДЕТАЛИ ЗАКАЗА</h2>
            <button className="text-black-300 font-light text-[12px]" disabled={loading} onClick={handleEditOrderClick}>
              Изменить
            </button>
          </div>
          {loading ? (
            <div>
              <div className="flex gap-2.5 mb-2">
                <Skeleton className="h-[95px] w-[70px] bg-black-100" />
                <div className="flex flex-col justify-between flex-1 h-[95px] py-2">
                  <Skeleton className="h-4 w-full bg-black-100" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-[100px] bg-black-100" />
                    <Skeleton className="h-4 w-[80px] bg-black-100" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 mb-2">
                <Skeleton className="h-[95px] w-[70px] bg-black-100" />
                <div className="flex flex-col justify-between flex-1 h-[95px] py-2">
                  <Skeleton className="h-4 w-full bg-black-100" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-[100px] bg-black-100" />
                    <Skeleton className="h-4 w-[80px] bg-black-100" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2.5 mb-2">
                <Skeleton className="h-[95px] w-[70px] bg-black-100" />
                <div className="flex flex-col justify-between flex-1 h-[95px] py-2">
                  <Skeleton className="h-4 w-full bg-black-100" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-[100px] bg-black-100" />
                    <Skeleton className="h-4 w-[80px] bg-black-100" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">{calculatedOrder?.products.map((item) => <OrderProductItem product={item} />)}</div>
              <div className="flex justify-between items-center text-[12px] font-semibold mb-6">
                <div className="uppercase">доставка</div>
                <div>{selectedPickup ? selectedPickup.price + '₽' : 'не выбрана'}</div>
              </div>
              <div className="flex justify-between items-center text-[14px] font-semibold mb-6">
                <div className="uppercase">итого</div>
                <div>{calculatedOrder?.price / 100 + (selectedPickup?.price || 0)} ₽</div>
              </div>
              <div className="flex justify-between items-center p-2 border border-black rounded-[4px]">
                <div className="flex gap-2.5 items-center">
                  <PartsLogo />
                  <div className="text-[12px]">4 платежа по {calculatedOrder?.price / 400}</div>
                </div>
                <RightArrow />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
