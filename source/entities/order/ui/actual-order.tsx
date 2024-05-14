"use client";

import React from "react";
import { StateOrderLk } from "@shared/ui/state-order-lk";
import { CardProductLk } from "@entities/card-product-lk";
import { ViewOrder, ViewOrderStatusEnum } from "@shared/api/__generated__/generated-api.schemas";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import { useClipboard } from "use-clipboard-copy";
import { formatter } from "@/components/productItem/ProductItem";
import { ActualOrderActions } from "@/source/features/actual-order-actions";
import { toast } from "sonner";

interface LkActualInfoProps {
  order: ViewOrder;
}

const ActualOrder = ({ order }: LkActualInfoProps) => {
  const clipboard = useClipboard();

  const handleClick = React.useCallback(
    () => {
      const id = order.id;
      clipboard.copy(id); // programmatically copying a value
      toast("Вы скопировали номер заказа", {
        position: "top-right"
      });
    },
    [clipboard.copy]
  );
  return (
    <div className="my-2.5">
      <div className="flex items-center">
        <div className="w-[25%]  max-w-[120px]">
          <StateOrderLk status={order.status as ViewOrderStatusEnum} />
        </div>
        <div
          className="flex ml-5 justify-between w-[91%] max-[1050px]:w-[85%]  max-[850px]:w-[80%]   max-[720px]:flex-col">
          <div className="flex items-center">
            <span className="font-semibold mr-2 text-[14px] line-clamp-1 cursor-pointer" onClick={handleClick}><span
              className="max-[850px]:hidden"> Номер заказа:</span> {order.id}</span>
            <span className="text-black-300 text-[14px] min-w-[100px]">
              {format(new Date(order.order_date?.split("T")[0] || ""), "d MMMM yyyy", {
                // @ts-ignore
                locale: ru
              })}
            </span>
          </div>
          <div>
            <span className=" text-black-300  text-[14px]  ">
              {formatter.format(order.products.length || 1).replace("метр", "товар")}
            </span>
            <span className="font-semibold text-[14px] ml-2">{order?.amount ? order.amount / 100 : 0} ₽</span>
          </div>
        </div>
      </div>
      <div className="flex mt-5 flex-wrap justify-around	">
        {
          //@ts-ignore
          order.products.map((product) => (
            <CardProductLk key={product.product.id} product={product} />
          ))
        }
      </div>
      <ActualOrderActions order={order} />
    </div>
  );
};

export default ActualOrder;
