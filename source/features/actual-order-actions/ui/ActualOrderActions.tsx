'use client';
import React from 'react';
import { Button } from '@shared/theme/button';
import { useUnit } from 'effector-react';
import { $actualOrder } from '@entities/order/model/order-model';
import { ReceivingEnum } from '@shared/api/__generated__/generated-api.schemas';

export const ActualOrderActions = () => {
  const actualOrder = useUnit($actualOrder);

  if (!actualOrder) {
    return <></>;
  }

  return (
    <div className="uppercase flex gap-[15px] min-w-[340px]  w-[40%] text-[12px] mt-7">
      {actualOrder.receiving === ReceivingEnum.delivery_stock && <Button.Primary>Отследить посылку</Button.Primary>}
      <Button.Secondary>Связаться с нами</Button.Secondary>
    </div>
  );
};
