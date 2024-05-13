"use client";
import React from "react";
import { Button } from "@shared/theme/button";
import { useUnit } from "effector-react";
import { $actualOrder } from "@entities/order/model/order-model";
import { ReceivingEnum, ViewOrder, ViewOrderStatusEnum } from "@shared/api/__generated__/generated-api.schemas";
import { contactsModalChanged } from "@widgets/contacts-modal/model/contact-modal";
import { cancelOrderFx, createPaymentFx } from "@widgets/create-order-form/model/create-order-model";

interface ActualOrderProps {
  order: ViewOrder;
}

export const ActualOrderActions = ({ order }: ActualOrderProps) => {
  const loading = useUnit(createPaymentFx.pending);

  const handleCancelClick = () => {
    cancelOrderFx(order.id);
  };

  const orderIsCanceling = useUnit(cancelOrderFx.pending);

  return (
    <div className="uppercase flex gap-[15px] min-w-[340px]  w-[40%] text-[12px] mt-7 items-center">
      {/*{order.receiving === ReceivingEnum.cdek && <Button.Primary>Отследить посылку</Button.Primary>}*/}
      {(order.status === "created" || order.status === "failed_payment") && (
        <Button.Primary
          className="w-[244px]"
          onClick={() => createPaymentFx(order.id)}
          disabled={loading}
          loading={loading}
        >
          Оплатить
        </Button.Primary>
      )}
      {(order.status === "created" || order.status === "failed_payment") && (
        <Button.Secondary
          className="w-[244px]"
          onClick={handleCancelClick}
          loading={orderIsCanceling}
          disabled={orderIsCanceling}
        >
          Отменить
        </Button.Secondary>
      )}
      <button
        className="text-[12px] uppercase text-black-300 flex justify-center items-center py-2.5 font-medium"
        onClick={() => contactsModalChanged(true)}
      >
        Связаться с нами
      </button>
    </div>
  );
};
